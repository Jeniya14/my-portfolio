import './App.css'
import About from './section/About'
import Hero from './section/Hero'
import Navbar from './section/Navbar'

function App() {
 

  return (
    <div className="bg-black text-gray-800">
      <Navbar/>
      <Hero />
      <About/>       
    </div>
  )
}

export default App
