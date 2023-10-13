import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className + " " + "scroll-smooth min-h-screen p-8 md:p-16 xl:p-24"}>
        {children}
      </body>
    </html>
  )
}
