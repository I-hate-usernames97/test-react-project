/** @format */

function ListPlanet({ planets }) {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">diameter {planets.diameter}</li>
        <li className="list-group-item">stars {planets.star}</li>
        <li className="list-group-item">Number of moons {planets.moons}</li>
        <li className="list-group-item">distance {planets.distance}</li>
      </ul>
    </div>
  );
}

export default ListPlanet;
