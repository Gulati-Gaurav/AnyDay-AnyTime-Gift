import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Extra.css"
import data from "./utils";

function Extra() {
    useEffect(() => {
        
        const panels = document.querySelectorAll('.card-panel')
        
        
        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active')
            })
        }
        removeActiveClasses();
        const d=document.getElementById("img-card-sec").firstChild;
        d.classList.add('active');

    }, []);
    function remclass()
    {
        const panels = document.querySelectorAll('.card-panel');
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
        
    }
    const onclick=(e)=>{
        remclass();
        console.log(e);
        e.target.classList.add('active');
        console.log(e);
    }
    const location = useLocation();
    console.log(location.state);
    const ex = location.state.ex;
    const cat=location.state.cat;
    const newdata=data.filter((e)=>e.category===cat);
    console.log(newdata);
    return (
        <>
            <div class="card-whole-section">
      <div class="card-section-img">
        <div class="card-container" id="img-card-sec">
            {
                ex.map((e)=>{
                    return(
                        <div className='card-panel active' style={{backgroundImage:`url(${e})`}} onClick={onclick}></div>
                    )
                })
            }
          
        </div>
        <div class="card-info-content">
          <h1>Beautiful Photo Album - 12 pages</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam maxime quis soluta illum vel placeat ipsa vitae animi sunt architecto!</p>
          <h3>M.R.P. : <del> &#8377;{location.state.pr} </del> <span class="to-make-price-big"> &#8377;{location.state.pr*(0.9)} </span> <span class="to-make-red-attention small-text-discount">(-10%)</span></h3>
          <p class="to-make-red-attention">Limited Stocks Hurry !!</p>
          <button><h4>Add To Cart</h4></button>
        </div>
      </div>
      <div class="checkout-more-stuff">
        <h2>Checkout More Photo Albums</h2>
        <div class="photos-row" >
          {
            newdata.map((e)=>{
              return (<div class="two-items-per-row">
                <div class="checkout-more-stuff-content">
                  <Link to="/categories">
              <img class="checkout-image" src={e.link} alt="ix"/>
              </Link>
              <p>Beautiful Photo Album - 12 pages</p>
            </div>
              </div>)
            })
          }
        </div>
      </div>
    </div>
        </>

    )
}

export default Extra