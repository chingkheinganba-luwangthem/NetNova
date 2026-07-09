import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://formsubmit.co/ajax/chingkheinganbaluwangthem@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: body._subject || "New Form Submission from NetNova",
          ...body,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: data?.message || "Submission failed" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
