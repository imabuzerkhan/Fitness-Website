import Home from "./Pages/home/Home"
import Gallery from "./Pages/gallery/Gallery"
import About from "./Pages/about/About"
import Contact from "./Pages/contact/Contact"
import Plans from "./Pages/Plans/Plans"
import Trainers from "./Pages/trainers/Trainers"
import Navbar from "./Components/Navbar"
import { createBrowserRouter , Router , Routes , Route, BrowserRouter } from "react-router-dom"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <Gallery/>
    <Plans/>
    <Trainers/>
    </BrowserRouter>
    </>
  )
}

export default App
