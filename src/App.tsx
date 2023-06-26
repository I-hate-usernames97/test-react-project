/** @format */

import Destination from "./components/Destination";

function App() {
  let items = ["Jon", "Anna", "Alec", "Chris", "Robin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
    return item;
  };

  return (
    <div>
      <Destination />
    </div>
  );
}

export default App;
