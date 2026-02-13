# XDrive Logistics Ltd Website

Official website for XDrive Logistics Ltd (formerly Danny Courier LTD), built with Next.js 16 and deployed on Netlify.

## Overview

This is a single-page marketing website with integrated private operations areas for internal use. The site follows a comprehensive design specification ensuring brand consistency, responsive design, and secure access control.

## Technology Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with custom CSS variables
- **Authentication**: JWT with email OTP verification
- **Runtime**: Node.js 20
- **Deployment**: Netlify with Next.js plugin

## Features

### Public Website
- **Sticky Navigation** with language switcher (EN/DE/FR/ES)
- **Hero Section** with clear CTAs and contact information
- **Benefits Strip** highlighting 24/7 service, nationwide coverage, and full insurance
- **Quick Quote Form** with email submission
- **Services Grid** showcasing all delivery options
- **About Section** with company credibility
- **Contact Section** with social media links
- **Floating WhatsApp Button** for instant contact
- **Footer** with payment terms and company details

### Private Areas (Authentication Required)

#### Login System (`/login`)
- Email and password authentication
- Two-factor authentication via email OTP
- Device detection (redirects to mobile or desktop interface)
- Secure JWT token generation

#### Mobile Operations (`/m`)
- Dashboard for drivers/couriers
- Job status tiles (Active, Pickup, Delivery, History)
- Quick access to delivery operations
- Optimized for mobile devices

#### Admin Dashboard (`/admin`)
- Central management interface
- Invoice management system
- Future: Jobs, customers, and reports

#### Invoice System (`/admin/invoices`)
- Professional invoice templates
- PDF generation and download
- Email and WhatsApp sharing
- Payment terms: 14 or 30 days
- Late fee tracking (£25/week)

## Brand Guidelines

### Colors
- **Primary Navy**: `#0A2239`
- **Secondary Blue**: `#1B63C6`
- **CTA Green**: `#1E7A3E`
- **CTA Green Hover**: `#16602F`
- **Light Background**: `#F6F9FF`
- **Text**: `#0B1B33`
- **Muted Text**: `#5B6B85`

### Typography
- **Font Family**: Inter (via Google Fonts)
- **H1**: 48px (desktop), 32px (mobile)
- **H2**: 32px (desktop), 24px (mobile)
- **Body**: 16px
- **Small**: 14px

### Breakpoints
- **Mobile**: 360–767px
- **Tablet**: 768–1023px
- **Desktop**: 1024–1439px
- **Wide**: 1440–1920px

## Development

### Prerequisites

- Node.js 20 (specified in `.nvmrc`)
- npm

### Getting Started

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Authentication

### Demo Credentials

For testing the private areas:
- **Email**: `admin@xdrivelogistics.com`
- **Password**: `demo123`
- **OTP**: Generated and displayed in console (check terminal)

**Note**: In production, OTP should be sent via email service (Resend, SendGrid, etc.)

## API Routes

### Public APIs
- `POST /api/quote` - Submit quote request form

### Authentication APIs
- `POST /api/auth/login` - Initial login with credentials
- `POST /api/auth/verify-otp` - Verify OTP and issue JWT token

## Project Structure

```
.
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Sticky nav with language switcher
│   │   ├── Hero.tsx         # Hero section
│   │   ├── QuoteForm.tsx    # Quote request form
│   │   ├── Services.tsx     # Services grid
│   │   └── ...
│   ├── admin/               # Admin dashboard
│   │   ├── invoices/        # Invoice management
│   │   └── page.tsx         # Admin home
│   ├── m/                   # Mobile operations
│   │   └── page.tsx         # Mobile ops dashboard
│   ├── login/               # Authentication
│   │   └── page.tsx         # Login page
│   ├── api/                 # API routes
│   │   ├── auth/            # Auth endpoints
│   │   └── quote/           # Quote submission
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                  # Static assets
├── netlify.toml             # Netlify configuration
└── package.json             # Dependencies and scripts
```

## Contact Information

- **Phone**: [07423 272 138](tel:07423272138)
- **Email**: [xdrivelogisticsltd@gmail.com](mailto:xdrivelogisticsltd@gmail.com)
- **WhatsApp**: [Message Us](https://wa.me/447423272138)

## Payment Terms

- **Standard**: 14 days from invoice date
- **Extended**: 30 days (by arrangement)
- **Late Fee**: £25 per full week overdue (after due date)
- **Methods**: Bank Transfer (preferred), PayPal

## Security

- JWT-based authentication with secure tokens
- Password-protected private areas
- Two-factor authentication via email OTP
- Client-side token storage with expiration
- No admin access for public visitors

## Deployment

### Netlify Configuration

The site is configured to deploy from the `main` branch. Deployment settings are defined in `netlify.toml`:

- **Build Command**: `npm run build`
- **Node Version**: 20
- **Plugin**: `@netlify/plugin-nextjs`

### Environment Variables

For production deployment, set these environment variables in Netlify:

```
JWT_SECRET=your-secure-secret-key
```

### Branch Configuration

- **Production Branch**: `main`
- **Default Branch**: `main`

All pull requests create deploy previews automatically.

## Future Enhancements

### Mobile Ops
- Job detail view with real-time tracking
- Camera/gallery upload for Proof of Delivery (POD)
- Digital signature capture
- Delay notification system
- Real-time status updates

### Invoice System
- Complete invoice template implementation
- PDF generation with company branding
- Automated email sending
- WhatsApp integration for invoice sharing
- Payment tracking and reminders

### Multi-language
- i18n infrastructure setup
- Translations for EN, DE, FR, ES
- Language persistence across sessions

## License

© 2026 Danny Courier Ltd. All rights reserved.

## Established

Company established in 2021, serving UK and European markets with reliable courier and logistics services.

