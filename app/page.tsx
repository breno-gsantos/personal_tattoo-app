import About from '@/components/About'
import GallerySection from '@/components/GallerySection'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonials />
      <div className='h-[400px]'></div>
    </main>
  )
}
