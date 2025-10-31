import './App.css'
import GlowCurser from './components/GlowCurser'
import About from './section/About'
import Hero from './section/Hero'
import Navbar from './section/Navbar'


function App() {
 

  return (
    <div className="bg-midnight text-white">
      <GlowCurser />
      <Navbar/>
      <Hero />
      <About/>       
    </div>
  )
}

export default App
