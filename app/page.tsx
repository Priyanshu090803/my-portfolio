import Experience from "@/components/Experience"
import Hero from "../components/Hero"
import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import Contact from "@/components/Contact"
import { Footer } from "@/components/Footer"
const Home = () => {


  return (
    <div className="min-h-screen w-full px-4 md:px-12 lg:px-32 xl:px-64 py-15 font-stack relative">
      <Hero />
      <Experience />
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home