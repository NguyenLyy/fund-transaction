import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <>
        <div className="header-container">
          <div className="zone1">
    
                   <h1>Transaction Always Reliable With <span>CLink</span></h1>
                  
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam dolore maiores molestiae, obcaecati.</p>
                   <div className="btn-zone">
                   <Link to="/Transaction" className="btn1"> Get Started </Link>
                    
                   </div>
               </div> 
               </div>
        </>
    )
}

export default Home
