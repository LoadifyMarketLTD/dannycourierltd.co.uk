import { NextResponse } from 'next/server'

// In production, this would connect to a real database
// For now, we'll use a simple in-memory store for demo purposes
const DEMO_USER = {
  email: 'admin@xdrivelogistics.com',
  password: 'demo123', // In production, this would be hashed
}

// Store OTPs temporarily (in production, use Redis or database with expiry)
const otpStore: { [email: string]: { code: string; expires: number } } = {}

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check credentials (in production, check against database with hashed password)
    if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Generate OTP
    const otp = generateOTP()
    const expires = Date.now() + 10 * 60 * 1000 // 10 minutes

    // Store OTP
    otpStore[email] = { code: otp, expires }

    // In production, send OTP via email using service like Resend, SendGrid, etc.
    console.log(`OTP for ${email}: ${otp}`)
    console.log('Note: In production, this would be sent via email')

    // TODO: Send actual email
    // await sendEmail({
    //   to: email,
    //   subject: 'XDrive Logistics - Login Verification Code',
    //   text: `Your verification code is: ${otp}. This code will expire in 10 minutes.`,
    // })

    return NextResponse.json(
      { 
        success: true,
        message: 'OTP sent to your email',
        // For demo purposes only - remove in production
        debug_otp: otp,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Export the OTP store for use in verify-otp route
export { otpStore }
