import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} setToys={setToys} />
      ))}
    </div>
  );
}

export default ToyContainer;