import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'

// Simple in-memory OTP store (shared from login route)
// In production, use Redis or database
const otpStore: { [email: string]: { code: string; expires: number } } = {}

// JWT secret - in production, use environment variable
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
)

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json()

    // Validate input
    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
        { status: 400 }
      )
    }

    // Check if OTP exists and is valid
    const storedOtp = otpStore[email]
    
    if (!storedOtp) {
      return NextResponse.json(
        { error: 'No OTP found for this email. Please try logging in again.' },
        { status: 401 }
      )
    }

    if (Date.now() > storedOtp.expires) {
      delete otpStore[email]
      return NextResponse.json(
        { error: 'OTP has expired. Please try logging in again.' },
        { status: 401 }
      )
    }

    if (storedOtp.code !== otp) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 401 }
      )
    }

    // OTP is valid, delete it
    delete otpStore[email]

    // Generate JWT token
    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(JWT_SECRET)

    return NextResponse.json(
      { 
        success: true,
        token,
        message: 'Login successful',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('OTP verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
