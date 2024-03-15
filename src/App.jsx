import './App.css'
import Feature from './components/Feature.jsx'
import Forward from './components/Forward.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Workflow from './components/Workflow.jsx'
import Footer from './components/Footer.jsx'
import Testinomial from './components/Testinomial.jsx'
function App() {
  return (
    <>
    
<Navbar/>
<div className='max-w-7xl mx-auto pt-20 px-6'>
  <Hero/>
  <Feature/>
  <Workflow/>
  <Forward/>
  <Testinomial/>
  <Footer/>
</div> 
    </>
  )
}

export default App
