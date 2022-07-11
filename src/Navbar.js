import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import imglogo from "./lomgo.png"
function Navbar() {
  return (
    <>
    <div class="navbargg top" id="navbar">
        <h1 class="logo">
        <Link class=" nav-heading-main"to="/"><img className="lomgo" alt="xyz" src={imglogo}/> &nbsp; &nbsp; <span class="foot-heading"> Anyday Anytime</span> Gifts</Link>
        </h1>
        {/* <i class="fa-solid fa-gift"></i> */}
        <nav class="navbar-list">
            <ul>
              <li><Link to="/"> Home </Link> </li>
              <li><Link to="/categories" >Categories</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/test">Testimonials</Link></li>
              <li><Link to="/feed">Feedback</Link></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar