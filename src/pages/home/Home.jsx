import React from "react";
import Featured from "../../components/featured/Featured";
import HomesGuestsLove from "../../components/homesGuestsLove/HomesGuestsLove";
import Header from "../../components/header/Header";
import Navbar  from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";
import "./home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <HomesGuestsLove />
          <MailList/>
          <Footer/>


        </div>
      </div>
    </>
  );
};

export default Home;
