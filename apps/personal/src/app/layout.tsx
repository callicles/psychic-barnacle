import './../styles/globals.css'
import {Header} from '../components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className=''>
        {children}
        <Analytics />
        </div>
        <Footer />
        </body>
    </html>
  )
}
