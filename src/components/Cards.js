import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <Link to="/list/call/info">
        <h1 className="landingAction">List Call Info</h1>
      </Link>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              //   src='images/img-9.jpg'
              header="Grocery, Veggies & fruits"
              text="Make 10min to 1 hour delivery possible for your grocery & fresh produce with the help of our dark store network. We enable timely delivery for perishable goods."
              label="Adventure"
              path="/services"
              button="Learn More"
            />
            <CardItem
              //   src='images/img-2.jpg'
              header="E-Commerce"
              text="Manage your inventory & delivery efficiently with our e-commerce fulfillment services. We make your product reach lightning-fast speed in the most efficient way."
              label="Luxury"
              path="/services"
              button="Learn More"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
