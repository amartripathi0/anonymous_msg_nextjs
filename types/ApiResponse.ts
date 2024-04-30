import VerificationEmail from "@/emails/VerificationEmail";
import { resend } from "@/lib/resend";
import { Message } from "@/model/User.model";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessage?: boolean;
  messages?: Message[];
}

export async function sendVerificationEmail(
  email: string,
  username: string,
  verificationCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "",
      to: email,
      subject: "Anonymous Message | Verification Code",
      react: VerificationEmail({ username, otp: verificationCode }),
    });
    return { success: true, message: "verification email send successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error on sending verification email" };
  }
}
