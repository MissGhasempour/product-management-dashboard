import { useEffect } from "react";

export default function ProductsList({ product }) {
  useEffect(() => {}, []);
  //console.log(product);
  return (
    <div className="m-4">
      {/* <img src="#" alt="product" /> */}
      <h1 className="font-bold">{product?.name} </h1>
      <p>cost: 2 $</p>
      <p>3 counts / sold out</p>
      <p className="text-amber-300 font-bold text-2xl">* * * * * </p>
    </div>
  );
}
