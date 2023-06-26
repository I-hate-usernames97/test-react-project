/** @format */

import ListPlanet from "./ListPlanet";
import React, { useEffect, useState } from "react";

const Destination = () => {
  const [planet, setPlanets] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then((response) => response.json())
      .then((data) => setPlanets(data));
  }, []);

  const handleDestinationClick = () => {
    const randomIndex = Math.floor(Math.random() * planet.length);
    setIndex(randomIndex);
  };

  return (
    <>
      <div onClick={handleDestinationClick}>
        <h3>Planet {planet[index]?.name}</h3>
        <img
          src={planet[index]?.image}
          height="250"
          alt={planet[index]?.name}
        />

        <div>
          <ul className="list-group">
            <li className="list-group-item">
              diameter {planet[index]?.diameter}{" "}
            </li>
            <li className="list-group-item">stars {planet[index]?.star}</li>
            <li className="list-group-item">
              Number of moons {planet[index]?.moons}
            </li>
            <li className="list-group-item">
              distance {planet[index]?.distance}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Destination;
