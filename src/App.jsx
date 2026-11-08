import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer' 
import Home from './pages/home'
import Overview from './pages/overview'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>

      <Footer /> 
    </BrowserRouter>
  )
}

export default App