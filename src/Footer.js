import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer class="footer bg-dark">
        <div class="foot-big-items">
            <div class="foot-items">
                <ul class="to-be-erased">
                    {/* <li>Home</li>
                    <li>Categories</li>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Feedback</li> */}
                    <li><Link to="/"> Home </Link> </li>
                    <li><Link to="/categories" >Categories</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/test">Testimonials</Link></li>
                    <li><Link to="/feed">Feedback</Link></li>
                    <div class="to-line-foot"></div>
                </ul>
                <ul>
                    <li><Link to="/categories" >Valentine's Day Gifts</Link></li>
                    <li><Link to="/categories" >Newborn Baby Gifts</Link></li>
                    <li><Link to="/categories" >Ring Palettes</Link></li>
                    <li><Link to="/categories" >Birthday Gifts</Link></li>
                    <li><Link to="/categories" >Photo Albums</Link></li>
                    <div class="to-line-foot"></div>
                </ul>
                <ul >
                    <li>Meet Us On &nbsp;<i class="far fa-hand-point-down"></i></li>
                    <li><a href="https://www.youtube.com/channel/UCaYY5M9fXVusnOMqr5ghQTA">YouTube</a></li>
                    <li><a href="https://instagram.com/anydayanytypegifts?igshid=YmMyMTA2M2Y=">Instagram</a></li>
                    <li><a href="https://wa.me/919650525999">WhatsApp</a></li>
                    <li><a href="mailto:gauravg9643@gmail.com">Gmail</a></li>
                    <div class="to-line-foot"></div>
                </ul>
            </div>
            <h1> <Link to="/"><span class="foot-heading">AnyDay AnyTime</span> Gifts</Link>  </h1>
        </div>
    <div class="lower-footer">
        <div class="social">
            <a href="https://instagram.com/anydayanytypegifts?igshid=YmMyMTA2M2Y="><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://wa.me/919650525999"><i class="fab fa-whatsapp fa-2x"></i></a>
            <a href="https://www.youtube.com/channel/UCaYY5M9fXVusnOMqr5ghQTA"><i class="fab fa-youtube fa-2x"></i></a>
            <a href="mailto:gauravg9643@gmail.com"><i class="fa fa-envelope fa-2x"></i></a>
        </div>
        <p>Copyright &copy; 2022 - Anyday Anytime Gifts </p>
    </div>
</footer>
    )
}

export default Footer