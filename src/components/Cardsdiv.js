import Card from "./Card";

function Cardsdiv({productData, removeProducts}) {
    return (
      
        <div className=" w-[80%] h-[auto] flex flex-row flex-wrap justify-evenly gap-y-44 pt-36 pb-20 xl:flex-row lg:flex-row lg:items-center md:flex-row md:items-center md:w-[90%] sm:flex-col sm:items-center xs:flex-col xs:justify-around xs:items-center xs:w-[95%] ">
          {productData.map((product) => {
            return <Card  {...product} key={product.id} removeProducts={removeProducts}></Card>;
          })}
        </div>
      
    );
  };


export default Cardsdiv;

