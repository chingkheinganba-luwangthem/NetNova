import { NextRequest, NextResponse } from "next/server";

const TARGET_EMAIL = "chingkheinganbaluwangthem@gmail.com";
const MAX_RETRIES = 3;
const INITIAL_BACKOFF_MS = 1000; // 1 second

// Helper for exponential backoff
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Remove internal fields before sending
    const { _subject, ...formFields } = body;

    const payload = {
      _subject: _subject || "New Form Submission from NetNova",
      _captcha: "false",
      _template: "table",
      ...formFields,
    };

    let attempt = 0;
    let response: Response | null = null;
    let data: any = null;

    // Retry loop with exponential backoff
    while (attempt < MAX_RETRIES) {
      try {
        response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Origin": "https://net-nova-itan-ig8bwpa8u-chingkheinganba-luwangthems-projects.vercel.app",
            "Referer": "https://net-nova-itan-ig8bwpa8u-chingkheinganba-luwangthems-projects.vercel.app/"
          },
          body: JSON.stringify(payload),
        });

        const contentType = response.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
          data = await response.json();
        } else {
          // FormSubmit might return HTML (e.g. activation page or Cloudflare error page)
          const text = await response.text();
          data = { message: text.substring(0, 200) };
        }

        console.log(`[Attempt ${attempt + 1}] FormSubmit response status:`, response.status);
        
        // If it's a 522 or any 5xx error, we should retry
        if (!response.ok && response.status >= 500) {
          console.warn(`Attempt ${attempt + 1} failed with status ${response.status}. Retrying...`);
          throw new Error(`Server returned ${response.status}`);
        }

        // If it's successful or a non-5xx error (like 400 Bad Request), break the loop and return immediately
        break;
      } catch (error: any) {
        attempt++;
        if (attempt >= MAX_RETRIES) {
          console.error("Max retries reached. FormSubmit is unavailable.");
          break;
        }
        // Exponential backoff: 1s, 2s, 4s...
        const backoffTime = INITIAL_BACKOFF_MS * Math.pow(2, attempt - 1);
        console.log(`Waiting ${backoffTime}ms before next attempt...`);
        await delay(backoffTime);
      }
    }

    // After retries, if we still have a 5xx error or no response
    if (!response || (response && response.status >= 500)) {
       return NextResponse.json(
        { 
          success: false, 
          message: "Email service is temporarily unavailable. Please try again in a few minutes."
        },
        { status: 503 }
      );
    }

    if (response.ok && data?.success !== "false") {
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    } else {
      // Return the actual FormSubmit error for debugging
      return NextResponse.json(
        { 
          success: false, 
          message: data?.message || "FormSubmit returned an error. The email may need activation.",
          debug: data
        },
        { status: 400 } // Return 400 so client knows it failed
      );
    }
  } catch (error: any) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET handler to help with activation
export async function GET() {
  return NextResponse.json({
    message: "Form API is working. POST form data to this endpoint.",
    email: TARGET_EMAIL,
  });
}
