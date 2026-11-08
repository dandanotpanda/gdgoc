import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import instagramImg from '../assets/Instagram.png'
import youtubeImg from '../assets/youtube.png'

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              
              <img 
                src={logoImg} 
                alt="GDGoC Logo" 
                className="h-8 w-auto object-contain" 
              />
              
    
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              A student community for curious minds, shared learning, and technology with purpose.
            </p>
          </div>

          {/* Kolom 2: Explore */}
          <div>
            <h4 className="text-sm font-bold text-gray-900">Explore</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
              <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
              <NavLink to="/overview" className="hover:text-blue-600">Overview</NavLink>
              <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
            </div>
          </div>

          {/* Kolom 3: Keep in the loop */}
          <div>
            <h4 className="text-sm font-bold text-gray-900">Keep in the loop</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="https://www.instagram.com/gdgoc.ugm/" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">
                @gdgoc.ugm
              </a>
              
              
             <div className="mt-1 flex items-center gap-4">
  <a href="#" className="flex h-5 w-5 items-center justify-center opacity-60 transition hover:opacity-100">
    <img src={instagramImg} alt="Instagram" className="h-full w-full object-contain" />
  </a>

  <a href="#" className="flex h-5 w-5 items-center justify-center opacity-60 transition hover:opacity-100">
    <img src={youtubeImg} alt="YouTube" className="h-full w-full object-contain" />
  </a>
</div>

              <p className="mt-2 text-xs text-gray-400">
                Learn together. Build together.
              </p>
            </div>
          </div>
        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col justify-between gap-4 text-xs text-gray-400 md:flex-row items-center">
          <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
          <p>Made for the campus. Open to possibilities.</p>
        </div>

        {/* Aksen Garis Warna */}
        <div className="mt-6 flex gap-1">
          <span className="h-1 w-10 bg-blue-500"></span>
          <span className="h-1 w-10 bg-red-500"></span>
          <span className="h-1 w-10 bg-yellow-400"></span>
          <span className="h-1 w-10 bg-green-500"></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer