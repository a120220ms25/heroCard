import React, { useState } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import { heroes } from "./data";

import HeroListPage from "./pages/HeroListPage";
import HeroProfilePage from "./pages/HeroProfilePage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeroListPage />
        <Switch>
          {heroes.map((hero, index) => {
            return (
              <Route key={index} path={`/heroes/${hero.id}`}>
                <HeroProfilePage
                  name={hero.name}
                  key={hero.id}
                  remainPoints={hero.remainPoints}
                  abilities={hero.abilities}
                />
              </Route>
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
