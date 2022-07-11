import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeSectionstyle.css"

function HomeSection3() {
    

    return (
        <div>
            <header id="cat-main-header">
                <div class="cat-container">
                    <h1><i class="fa-solid fa-gift"></i><span class="to-make-coral"> Categories</span></h1>
                    <h3>Some Gifts Need No Reason. <span class="to-make-coral"> Do They? </span></h3>
                </div>
            </header>

            <section id="timeline">
                <ul>
                    <li className='show'>
                        <div class="provide-more-padding">
                            <Link to="/categories"><h3><i class="fas fa-chevron-right"></i> <span class="to-make-coral"> Gift For Your Lover </span></h3></Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                libero provident!</p>
                        </div>
                    </li>
                    <li className='show'>
                        <div class="provide-more-padding">
                        <Link to="/categories"><h3>
                                <i class="fas fa-chevron-right"></i> <span class="to-make-coral"> Gift For A Baby </span>
                            </h3></Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                libero provident!
                            </p>
                        </div>
                    </li>
                    <li className='show'>
                        <div class="provide-more-padding">
                        <Link to="/categories"><h3><i class="fas fa-chevron-right"></i> <span class="to-make-coral"> Photo Albums </span> </h3></Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                libero provident!
                            </p>
                        </div>
                    </li>
                    <li className='show'>
                        <div class="provide-more-padding">
                        <Link to="/categories"><h3><i class="fas fa-chevron-right"></i> <span class="to-make-coral"> Ring Palettes </span> </h3></Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                libero provident!
                            </p>
                        </div>
                    </li>
                    <li className='show'>
                        <div class="provide-more-padding">
                        <Link to="/categories"><h3><i class="fas fa-chevron-right"></i> <span class="to-make-coral"> Birthday Gift </span> </h3></Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                libero provident!
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default HomeSection3
