import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
// import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] font-kanit">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        {/* <TestimonialsSection /> */}
      </main>
      <Footer />
    </div>
  )
}
