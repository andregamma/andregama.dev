import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: [
    { rel: 'icon', url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👻</text></svg>' }
  ],
}

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
      {process.env.NODE_ENV === 'production' && (
        <Script src="./clarity.js" />
      )}
    </html>
  )
}
