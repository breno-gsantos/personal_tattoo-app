import type { Metadata } from 'next'
import { Oswald, Raleway, Rozha_One } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald'
})

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway'
})

const rozhaOne = Rozha_One({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rozhaOne'
})

export const metadata: Metadata = {
  title: 'Void Tattoo',
  description: 'Explore the world of body art at Void Tattoo. Our expert artists create unique and meaningful tattoos to express your individuality. Discover a welcoming and professional studio, where each work of art is a unique experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${raleway.variable} ${rozhaOne.variable}`}>
        <Header />
          {children}
      </body>
    </html>
  )
}
