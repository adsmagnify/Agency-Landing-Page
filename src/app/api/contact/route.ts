import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  instituteType?: string;
  budget?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, phone, instituteType, budget, message } = payload;

  if (!name?.trim() || !email?.trim() || !company?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { error: "Name, email, institute, and phone are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const receiverEmail =
    process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || "adsmagnify@gmail.com";

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;

  let emailSent = false;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name} via Adsmagnify" <${smtpUser}>`,
        replyTo: email,
        to: receiverEmail,
        subject: `Student Funnel Application: ${name} (${company || "Institute"})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; color: #0f172a;">
            <div style="background: linear-gradient(135deg, #004aad 0%, #1e40af 100%); padding: 24px 28px; color: #ffffff;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">Student Acquisition Funnel Application</h2>
              <p style="margin: 6px 0 0; font-size: 13px; color: #93c5fd;">Adsmagnify Landing Page Lead</p>
            </div>
            <div style="padding: 28px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 10px 0; color: #64748b; width: 140px; font-weight: 600;">Full Name:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${name}</td>
                </tr>
                <tr style="border-top: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #004aad; text-decoration: none; font-weight: 600;">${email}</a></td>
                </tr>
                <tr style="border-top: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Institute:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${company || "Not specified"}</td>
                </tr>
                <tr style="border-top: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${phone || "Not specified"}</td>
                </tr>
                <tr style="border-top: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Institute Type:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${instituteType || "Not specified"}</td>
                </tr>
                <tr style="border-top: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Monthly Ad Budget:</td>
                  <td style="padding: 10px 0; color: #004aad; font-weight: 700;">${budget || "Not specified"}</td>
                </tr>
                <tr style="border-top: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Submitted At:</td>
                  <td style="padding: 10px 0; color: #64748b;">${timestamp} IST</td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <h4 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Intake / Goals:</h4>
                <div style="background-color: #f8fafc; border-left: 4px solid #004aad; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message?.trim() || "No intake details provided."}</div>
              </div>
            </div>
          </div>
        `,
      });
      emailSent = true;
    } catch (err) {
      console.error("[Contact API] Failed to send email via SMTP:", err);
    }
  }

  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `🔔 **Student Funnel Application**\n**Name:** ${name}\n**Email:** ${email}\n**Institute:** ${company || "N/A"}\n**Type:** ${instituteType || "N/A"}\n**Budget:** ${budget || "N/A"}\n**Phone:** ${phone || "N/A"}\n**Message:** ${message}`,
        }),
      });
    } catch (webhookErr) {
      console.error("[Contact API] Webhook delivery error:", webhookErr);
    }
  }

  return NextResponse.json({
    success: true,
    emailSent,
  });
}
