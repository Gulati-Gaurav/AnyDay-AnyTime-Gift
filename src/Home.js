import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
function Home() {
  return (
    <div>
    <div class="content">
        <h1>Love The Giver More Than A Gift</h1>
        <p>Look out at our personalised gift items.</p>
        <Link to="/categories" className="btn"><i class="fas fa-chevron-right"></i> &nbsp; Categories</Link>
    </div>
    <div class="home-features-heading">
      <h1>Caractéristiques</h1>
    </div>
    <div class="flex-tests-items">
        <div class="text-box box-one">
            <div class="flex-boxex-test">
                <i class="fa fa-cog fa-4x normal" aria-hidden="true"></i>
                <i class="fa fa-cog fa-3x to-be-hidden-when-large" aria-hidden="true"></i>
                <h3 class="test-name-color">Customisation</h3>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis magnam magni molestiae necessitatibus error suscipit tempora exercitationem beatae</p>   
            </div>
        </div>
        <div class="text-box box-two">
            <div class="flex-boxex-test">
                <i class="fas fa-shipping-fast fa-4x normal"></i>
                <i class="fas fa-shipping-fast fa-3x to-be-hidden-when-large"></i>
                <h3 class="test-name-color">Home Delivery</h3>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis magnam magni molestiae necessitatibus error suscipit tempora exercitationem beatae   </p>
            </div>
        </div>
        <div class="text-box box-three">
            <div class="flex-boxex-test">
                <i class="fas fa-shopping-cart fa-4x normal"></i>
                <i class="fas fa-shopping-cart fa-3x to-be-hidden-when-large"></i>
                <h3 class="test-name-color">Bulk Orders</h3>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis magnam magni molestiae necessitatibus error suscipit tempora exercitationem beatae   </p>   
            </div>
        </div>
    </div>
    <div class="flex-tests-items">
        <div class="text-box box-four">
            <div class="flex-boxex-test">
                <i class="fa fa-user-plus fa-4x normal" aria-hidden="true"></i>
                <i class="fa fa-user-plus fa-3x to-be-hidden-when-large" aria-hidden="true"></i>
                <h3 class="test-name-color">Referral Discount</h3>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis magnam magni molestiae necessitatibus error suscipit tempora exercitationem beatae   </p>   
            </div>
        </div>
        <div class="text-box box-five">
            <div class="flex-boxex-test">
                <i class="fas fa-hand-holding-heart fa-4x normal"></i>
                <i class="fas fa-hand-holding-heart fa-3x to-be-hidden-when-large"></i>
                <h3 class="test-name-color">Personlised Cards</h3>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis magnam magni molestiae necessitatibus error suscipit tempora exercitationem beatae   </p>   
            </div>
        </div>
        <div class="text-box box-six">
            <div class="flex-boxex-test">
                <i class="fa-solid fa-circle-check fa-4x normal"></i>
                <i class="fa-solid fa-circle-check fa-3x to-be-hidden-when-large"></i>
                <h3 class="test-name-color">3 Days Delivery</h3>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis magnam magni molestiae necessitatibus error suscipit tempora exercitationem beatae   </p>   
            </div>
        </div>
    </div>
    {/* <div class="to-add-space">
        <p></p>
    </div> */}
    </div>
  )
}

export default Home