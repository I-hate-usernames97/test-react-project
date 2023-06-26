/** @format */

interface Props {
  planet: [];
}

function ListPlanet(props: Props) {
  props.planet.map;

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">diameter {props.planet} </li>
        {/* <li className="list-group-item">stars {planet.star}</li>
        <li className="list-group-item">Number of moons {planet.moons}</li>
        <li className="list-group-item">distance {planet.distance}</li> */}
      </ul>
    </div>
  );
}

export default ListPlanet;
