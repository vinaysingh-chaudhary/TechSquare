import { useState } from "react";

function Card ({id, image,info,price,name, removeProducts}){

    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0,200)}....`

    function readmoreHandler (){
        setReadmore(!readmore);
    }


    return(
        <div className="w-[30%] h-[60vh] bg-[gray] flex flex-col justify-between items-center px-3 rounded-md xl:w-[30%] xl:h-[50vh] lg:w-[30%]  md:w-[45%] sm:w-[70%] xs:w-[95%]">
            <img className="w-[70%] h-[40%] xl:h-[50%] xl:my-[-20%] aspect-square object-cover my-[-15%] rounded-md md:w-[80%]" src={image}/>

<div className="flex flex-col justify-between items-center h-[64%]">
            <h1 className="text-4xl lg:text-2xl md:text-[1.5rem]">{name}</h1>

            <h2>₹{price}</h2>

            <div className="text-center text-white text-md sm:px-2">
                {description}
                <span onClick={readmoreHandler} >
                    {readmore? `   show less` : `Readmore`}
                </span>
            </div>

            <button className=" my-5 min-h-[15%] shadow-lg rounded-md text-white border-none bg-[#e65555] flex items-center justify-center uppercase font-semibold px-8 border hover:bg-black hover:text-white transition duration-500 ease-in-out" onClick={() => removeProducts(id)} >
                Not Interested
            </button>
</div>
        </div>
    )
}
export default Card; 