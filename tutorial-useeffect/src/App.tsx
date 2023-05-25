/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { findPoduct } from "./data";

function App() {

  console.log("PASSOU NO APP")

  // // FORMA ERRADA
  // let productId = 1;
  // let prod = findPoduct(productId);

  // FORMA CORRETA
  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log("PASSOU no useeffect")
    setProd(findPoduct(productId));
  }, [productId]);

  function handleClick() {
    console.log("passou no handleClick");
    setProductId(2);
  }

  return (
    <>
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handleClick}>Mudar para produto 2</button>
    </>
  )
}

export default App
