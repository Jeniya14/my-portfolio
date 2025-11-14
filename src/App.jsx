import './App.css'
import GlowCurser from './components/GlowCurser'
import Experience from './section/Experience'
import Hero from './section/Hero'
import Navbar from './section/Navbar'
import Project from './section/Project'
import Skill from './section/Skill'


function App() {
 

  return (
    <div className="bg-midnight text-white py-4">
      <GlowCurser />
      <main className="relative z-10">
        <nav className="hidden sm:block">
        <Navbar/>
        </nav>
        <Hero />
        <Experience/> 
        <Skill />   
        <Project />
      </main>   
    </div>
  )
}

export default App
