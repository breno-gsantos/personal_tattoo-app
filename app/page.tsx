import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <div className='h-[400px]'></div>
    </main>
  )
}
