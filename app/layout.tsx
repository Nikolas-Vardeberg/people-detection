import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nikolas - AI',
  description: 'People detection with AI using Tensorflow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider 
          attribute='class'
          defaultTheme='system'
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
