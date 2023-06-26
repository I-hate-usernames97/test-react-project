/** @format */

import Destination from "./components/Destination";

function App() {
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
