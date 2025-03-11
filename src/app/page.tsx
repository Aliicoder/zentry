import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Features from "@/components/sections/Features"
import Footer from "@/components/sections/Footer"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Story from "@/components/sections/Story"

export default function Home() {
  return (
    <main className="relative flex flex-col w-screen  min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}
