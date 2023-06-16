import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://bookmestatic.net.nz/bookme-product-images/products/6146/6146_image1_GLFM_Auckland_lg.jpg"
        ></img>

        <div className="featuredTitles">
          <h1>Auckland</h1>
          <h2> 123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://www.polynesianspa.co.nz/wp-content/uploads/fly-images/1797/119686Waiotapu-Thermal-Reserve-Rotorua-Bob-McCree-v2-1200x1200.jpg"
        ></img>
        <div className="featuredTitles">
          <h1>Rotorua</h1>
          <h2> 123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Wellington_city_with_Cable_Car.jpg"
        ></img>
        <div className="featuredTitles">
          <h1>Wellington</h1>
          <h2> 123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
