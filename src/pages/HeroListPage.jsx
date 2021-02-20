import React from "react";
import HeroList from "../components/HeroList";
import "bootstrap/dist/css/bootstrap.min.css";

import { heroes } from "../data";

const HeroListPage = () => {
  return (
    <div>
      <div className="row">
        {heroes.map((heroCard, index) => {
          return (
            <div
              className="col-xs-6 col-sm-6 col-md-4 col-lg-3 pb-3"
              key={index}
            >
              <HeroList card={heroCard} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroListPage;
