import About from '@/components/About'
import GallerySection from '@/components/GallerySection'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <div className='h-[400px]'></div>
    </main>
  )
}
