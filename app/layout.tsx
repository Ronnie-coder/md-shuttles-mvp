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
      {/* 
        The suppressHydrationWarning is kept as you had it.
        The inline style is added to account for the 80px fixed navbar height.
      */}
      <body suppressHydrationWarning={true} style={{ paddingTop: '80px' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  )
}