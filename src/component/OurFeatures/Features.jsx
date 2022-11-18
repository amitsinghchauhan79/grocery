import React from "react";
import "./Features.css"

function Features() {
  return (
    <section className="features" id="features">
        <div className="content">
            <h1 className="heading">
                Our <span>Features</span> 
            </h1>
            <div className="box-container">
                <div className="box">
                    <img src="image/feature-img-1.png" alt="img" />
                    <h3>Fresh and Organic</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis maxime? Facere molestias vero sunt.</p>
                    <a href="/">read more</a>

                </div>
                              <div className="box">
                    <img src="image/feature-img-1.png" alt="img" />
                    <h3>Fresh and Organic</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis maxime? Facere molestias vero sunt.</p>
                    <a href="">read more</a>

                </div>
                              <div className="box">
                    <img src="image/feature-img-1.png" alt="img" />
                    <h3>Fresh and Organic</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis maxime? Facere molestias vero sunt.</p>
                    <a href="">read more</a>

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Features
