import Image from 'next/image'
import Hero from './components/Hero'
import ONama from './components/ONama'
import Galerija from './components/Galerija'
import NasRestoran from './components/NasRestoran'
import Lokacija from './components/Lokacija'

export default function Home() {
  return (

    <main>
      <Hero />
      <ONama />
      <Galerija />
      <NasRestoran />
      <Lokacija />
    </main>
  )
}
