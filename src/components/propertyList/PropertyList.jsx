import React from 'react'
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="PListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="PListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
        <div className="pListTitles">
          <h1>Apartment</h1>
          <h2>143 Apartment</h2>
        </div>
      </div>

      <div className="PListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800"
        ></img>
        <div className="pListTitles">
          <h1>House</h1>
          <h2>334 House</h2>
        </div>
      </div>

      <div className="PListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
        <div className="pListTitles">
          <h1>Cabin</h1>
          <h2>45 Cabins</h2>
        </div>
      </div>

      <div className="PListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/5137963/pexels-photo-5137963.jpeg?auto=compress&cs=tinysrgb&w=800"
        ></img>
        <div className="pListTitles">
          <h1>Hostel</h1>
          <h2>20 Hostels</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList