import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Electronics from './Electronics'
import Jwellery from './Jwellery'
import MenCloths from './MenCloths'
import WomenCloths from './WomenCloths'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
                <div className="logo">
                <Brand />
                </div>
                <div className="nav-elements">
                <ul>
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/jwellery">Jwellery</NavLink>
                    </li>
                    <li>
                    <NavLink to="/electronics">Electronics</NavLink>
                    </li>
                    <li>
                    <NavLink to="/mcloths">Men Cloths</NavLink>
                    </li>
                    <li>
                    <NavLink to="/fcloths">Women Cloths</NavLink>
                    </li>
                </ul>
                </div>

                <Routes>
                    <Route path = "/" element = {<Home></Home>}></Route>
                    <Route path = "/jwellery" element = {<Jwellery></Jwellery>}></Route>
                    
                    <Route path = "/electronics" element = {<Electronics></Electronics>}></Route>

                    <Route path = "/mcloths" element = {<MenCloths></MenCloths>}></Route>
                    <Route path = "/fcloths" element = {<WomenCloths></WomenCloths>}></Route>
                    
                    
                </Routes>
      </div>
    </nav>
  )
}

export default Navbar