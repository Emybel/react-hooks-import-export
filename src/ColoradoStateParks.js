import React from "react";
import howManyParks from "./parks/howManyParks";
// import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(RMFunctions.trees);
  RMFunctions.wildlife();
  
  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;