import About from '@/components/About'
import GallerySection from '@/components/GallerySection'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <GallerySection />
      <div className='h-[400px]'></div>
    </main>
  )
}
