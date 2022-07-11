import React from 'react'
import img1 from "./A08I0704.JPG"
import "./About.css"
function About() {
  return (
    <section id="team" class="team section-padding">
            <header class="section-header">
                <h4>Who I Am</h4>
                <h2>Your Crafter</h2>
                <p>I make your gifts look more personalised</p>
            </header>
            <div class="flex-items">
                <div>
                    <img className="imgg"src={img1} alt="Jyotsna Gulati"/>
                    <div class="con">
                      <h4>Jyotsna Gulati</h4>
                      <p>Owner</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About