import './App.css'
import GlowCurser from './components/GlowCurser'
import Experience from './section/Experience'
import Hero from './section/Hero'
import Navbar from './section/Navbar'


function App() {
 

  return (
    <div className="bg-midnight text-white py-4">
      <GlowCurser />
      <nav className="hidden sm:block">
      <Navbar/>
      </nav>
      <Hero />
      <Experience/>       
    </div>
  )
}

export default App
