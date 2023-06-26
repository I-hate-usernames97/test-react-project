/** @format */

import ListPlanet from "./ListPlanet";
import React, { useEffect, useState } from "react";

const Destination = () => {
  const [planets, setPlanets] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then((response) => response.json())
      .then((data) => setPlanets(data));
  }, []);

  const handleDestinationClick = () => {
    const randomIndex = Math.floor(Math.random() * planets.length);
    setIndex(randomIndex);
  };

  return (
    <>
      <div onClick={handleDestinationClick}>
        <h3>Planet {planets[index]?.name}</h3>
        <img
          src={planets[index]?.image}
          height="250"
          alt={planets[index]?.name}
        />
        <ListPlanet planets={planets[index]} />
      </div>
    </>
  );
};

export default Destination;
