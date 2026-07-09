import { NextRequest, NextResponse } from "next/server";

const TARGET_EMAIL = "chingkheinganbaluwangthem@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Remove internal fields before sending
    const { _subject, ...formFields } = body;

    const response = await fetch(
      `https://formsubmit.co/ajax/${TARGET_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: _subject || "New Form Submission from NetNova",
          _captcha: "false",
          _template: "table",
          ...formFields,
        }),
      }
    );

    let data;
    const contentType = response.headers.get("content-type") || "";
    
    if (contentType.includes("application/json")) {
      data = await response.json();
    } else {
      // FormSubmit might return HTML (e.g. activation page)
      const text = await response.text();
      data = { message: text.substring(0, 200) };
    }

    console.log("FormSubmit response status:", response.status);
    console.log("FormSubmit response data:", JSON.stringify(data));

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
      { success: false, message: error?.message || "Internal server error" },
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
