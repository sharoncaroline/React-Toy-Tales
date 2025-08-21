import React, { useEffect, useState } from "react";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((r) => r.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <ToyForm setToys={setToys} />
      <ToyContainer toys={toys} setToys={setToys} />
    </div>
  );
}

export default App;