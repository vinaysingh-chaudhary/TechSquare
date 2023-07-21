import React, { useState } from "react";
import data from './data'
import Cardsdiv from "./components/Cardsdiv";

const App = () =>{

  const [productData, setProductData] = useState(data);

  function removeProducts(id){
    const newProductData = productData.filter(product=> product.id !== id);
    setProductData(newProductData);
  };


  if (productData.length === 0) {
    return (
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl">No item left</h1>

        <button className="my-5 min-h-[7%] min-w-[15%] shadow-lg rounded-md text-white border-none bg-[#e65555] flex items-center justify-center uppercase font-semibold px-8 border hover:bg-black hover:text-white transition duration-500 ease-in-out" onClick={() => setProductData(data)}>
          refresh
        </button>

      </div>
    );
  };

  return (
      <div className="w-[100vw] flex justify-center items-center">
        <Cardsdiv productData={productData} removeProducts={removeProducts}></Cardsdiv>
      </div> 

  );
};

export default App;
