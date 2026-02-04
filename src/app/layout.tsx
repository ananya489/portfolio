import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Ananya Rajput | Software Engineer',
  description: 'Computer Science Engineer | Software Engineer Intern | AI & Web Developer',
  keywords: ['Ananya Rajput', 'Software Engineer', 'AI Developer', 'Web Developer', 'Computer Science'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
