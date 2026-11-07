import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const navClass = ({ isActive }) =>
    `text-sm ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3 text-lg font-bold text-gray-900">
        <img src={logo} alt="GDGoC Logo" className="h-14 w-auto max-w-[280px] object-contain" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/overview" className={navClass}>
            Overview
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </div>

        <NavLink
          to="/overview"
          className="rounded-md bg-blue-600 px-5 py-3 text-sm text-white hover:bg-blue-700"
        >
          Find your track →
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar