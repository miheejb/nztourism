import React from "react";
import "./searchItem.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Popup from "../popup/Popup";
import PropertyList from "../propertyList/PropertyList";
import {Routes, Route,useNavigate} from 'react-router-dom';

const SearchItem = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const redirect = ()=> {
    navigate('/hotels/123')
  }

  return (
    <>
      <div className="searchItem" onClick= {redirect} >
        <img
          src="https://images.pexels.com/photos/705773/pexels-photo-705773.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Viesta Apartment</h1>
          <span className="siDistance"> 500m from city center</span>

          <button className="siBreakfastOp" onClick={() => setOpen(true)}>
            Click to see Breakfast option
          </button>
          {open ? (
            <Popup
              text="Our continental breakfast is on special NZD 25 PP"
              closePopup={() => setOpen(false)}
            />
          ) : null}

          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio · 1 bathroom ·21 mx2· king size bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            {" "}
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">$ 123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Nordic Apartment</h1>
          <span className="siDistance"> 1km from city center</span>

          <button className="siBreakfastOp" onClick={() => setOpen(true)}>
            Click to see Breakfast option
          </button>
          {open ? (
            <Popup
              text="Our continental breakfast is on special NZD 25 PP"
              closePopup={() => setOpen(false)}
            />
          ) : null}

          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio · 1 bathroom ·25 mx2· king size bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            {" "}
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.5</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">$ 150</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Arte Apartment </h1>
          <span className="siDistance"> 1.5km from city center</span>

          <button className="siBreakfastOp" onClick={() => setOpen(true)}>
            Click to see Breakfast option
          </button>
          {open ? (
            <Popup
              text="Our continental breakfast is on special NZD 25 PP"
              closePopup={() => setOpen(false)}
            />
          ) : null}

          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio · 1 bathroom ·25 mx2· king size bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            {" "}
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.2</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">$ 150</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://images.pexels.com/photos/705773/pexels-photo-705773.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Viesta Apartment</h1>
          <span className="siDistance"> 500m from city center</span>

          <button className="siBreakfastOp" onClick={() => setOpen(true)}>
            Click to see Breakfast option
          </button>
          {open ? (
            <Popup
              text="Our continental breakfast is on special NZD 25 PP"
              closePopup={() => setOpen(false)}
            />
          ) : null}

          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio · 1 bathroom ·21 mx2· king size bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            {" "}
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">$ 123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://images.pexels.com/photos/705773/pexels-photo-705773.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Viesta Apartment</h1>
          <span className="siDistance"> 500m from city center</span>

          <button className="siBreakfastOp" onClick={() => setOpen(true)}>
            Click to see Breakfast option
          </button>
          
            {/* <Popup
              text="Our continental breakfast is on special NZD 25 PP"
              closePopup={() => setOpen(false)}
            /> */}
          
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio · 1 bathroom ·21 mx2· king size bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            {" "}
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">$ 123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://images.pexels.com/photos/705773/pexels-photo-705773.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Viesta Apartment</h1>
          <span className="siDistance"> 500m from city center</span>

          <button className="siBreakfastOp" onClick={() => setOpen(true)}>
            Click to see Breakfast option
          </button>
          {open ? (
            <Popup
              text="Our continental breakfast is on special NZD 25 PP"
              closePopup={() => setOpen(false)}
            />
          ) : null}

          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio · 1 bathroom ·21 mx2· king size bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            {" "}
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">$ 123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
