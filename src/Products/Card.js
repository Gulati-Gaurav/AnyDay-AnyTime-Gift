import React from "react";
import { Link} from "react-router-dom";
const card = (props) => {
  const { id,  link ,extra,price,category} = props.info;
  return (
    <>
        <div className="card-container1" key={id}>
          <div className="card1">
            <Link  to={{pathname:"/extra",state:{ex:extra,pr:price,cat:category}}} ><img src={link} alt="images" className="card-media1" /></Link>
            <div>
            {/* <span>&#8377; {price}</span> */}
            <h3>M.R.P. : <del class="mrp-on-card"> &#8377;{price} </del> <span class="to-make-price-big-in-card"> &#8377;{price*0.9} </span></h3>
            </div>
          </div>
          
        </div>
    </>
  );
};

export default card;
