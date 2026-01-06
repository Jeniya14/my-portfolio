import './App.css'
import GlowCurser from './components/GlowCurser'
import MobileSectionHeader from './components/MobileSectionHeader'
import Experience from './section/Experience'
import Footer from './section/Footer'
import Hero from './section/Hero'
import Navbar from './section/Navbar'
import Project from './section/Project'
import Skill from './section/Skill'


function App() {
 

  return (
    <div className="lg:bg-midnight bg-halfnight text-white">
      <GlowCurser />
      {/* <MobileSectionHeader /> */}
      <main className=" z-10">

        {/* <nav className="hidden sm:block"> */}
        <Navbar/>
        {/* </nav> */}
        <Hero />
        <Experience/> 
         
        <Project />
        <Footer />
      </main>   
    </div>
  )
}

export default App
