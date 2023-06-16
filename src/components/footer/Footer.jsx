import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListCategory">Search category</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Aiports</li>
          <li className="fListItem">Hotels</li>
        </ul>

        <ul className="fList">
          <li className="fListCategory">Privacy</li>
          <li className="fListItem">cookies</li>
          <li className="fListItem">privacy policy</li>
          <li className="fListItem">privacy setting</li>
        </ul>

        <ul className="fList">
          <li className="fListCategory">Other sites</li>
          <li className="fListItem">newzealand.com</li>
          <li className="fListItem">Business Events</li>
          <li className="fListItem">Travel Trade</li>
          <li className="fListItem">Qualmark</li>
          <li className="fListItem">careers</li>
        </ul>

        <ul className="fList">
          <li className="fListCategory">Resources</li>
          <li className="fListItem">Tourism Business</li>
          <li className="fListItem">Database</li>
          <li className="fListItem">Visual Library</li>
          <li className="fListItem">Media Coverage</li>
          <li className="fListItem">International Media</li>
        </ul>
      </div>

      <div className="fText">Copyright © 2022 Tourism New Zealand</div>
    </div>
  );
}

export default Footer