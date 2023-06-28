import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'




function App() {
  

  return (
      <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<About/>}/>
            <Route path='/' element={<Testimonials/>}/>
            <Route path='/' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
