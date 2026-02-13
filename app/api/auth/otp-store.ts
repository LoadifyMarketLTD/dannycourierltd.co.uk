// Shared OTP store for authentication
// In production, use Redis or a database with expiry
export const otpStore: { [email: string]: { code: string; expires: number } } = {}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}
