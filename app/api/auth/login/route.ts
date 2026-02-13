import { NextResponse } from 'next/server'
import { otpStore, generateOTP } from '../otp-store'

// In production, this would connect to a real database
// For now, we'll use a simple in-memory store for demo purposes
const DEMO_USER = {
  email: 'admin@xdrivelogistics.com',
  // In production, use bcrypt or similar: password would be hashed
  // Example: passwordHash: await bcrypt.hash('demo123', 10)
  password: 'demo123', // SECURITY NOTE: This is for demo only - hash passwords in production!
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
    // Example: const isValid = await bcrypt.compare(password, user.passwordHash)
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
        // SECURITY: Only include in development mode
        ...(process.env.NODE_ENV === 'development' && { debug_otp: otp }),
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
