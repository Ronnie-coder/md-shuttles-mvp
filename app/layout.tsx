// app/layout.tsx
import type { Metadata } from 'next'
import '@/styles/globals.scss'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTopButton from '@/components/ui/BackToTopButton'

export const metadata: Metadata = {
  title: 'MD Shuttles | Safe, Reliable, Efficient Transport',
  description: 'Premier transportation and delivery solutions in Cape Town, South Africa. Specializing in airport transfers, corporate travel, and guided tours.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* THE FINAL FIX IS HERE - This tells React to ignore browser extension issues */}
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  )
}