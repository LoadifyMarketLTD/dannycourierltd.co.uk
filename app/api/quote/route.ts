import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.pickup || !formData.delivery || !formData.cargoType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In a production environment, you would send an actual email here
    // For now, we'll log the quote request and return success
    console.log('Quote Request Received:', {
      name: formData.name,
      email: formData.email,
      pickup: formData.pickup,
      delivery: formData.delivery,
      cargoType: formData.cargoType,
      quantity: formData.quantity || 'N/A',
      timestamp: new Date().toISOString(),
    })

    // In production, integrate with an email service like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    // Example structure for email content:
    const emailContent = `
New Quote Request from XDrive Logistics Website

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}

Delivery Details:
- Pickup Location: ${formData.pickup}
- Delivery Location: ${formData.delivery}
- Cargo Type: ${formData.cargoType}
- Quantity: ${formData.quantity || 'Not specified'}

Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}

Please respond to this quote request within 1-2 hours.
    `.trim()

    // TODO: Send email to xdrivelogisticsltd@gmail.com
    // await sendEmail({
    //   to: 'xdrivelogisticsltd@gmail.com',
    //   subject: `New Quote Request from ${formData.name}`,
    //   text: emailContent,
    // })

    return NextResponse.json(
      { 
        success: true,
        message: 'Quote request received successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
