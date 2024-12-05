import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Background from '@/components/layout/Background'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quantum AI Forge',
  description: 'Forging the future with advanced AI solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <Background />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

