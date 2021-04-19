import React, {useEffect, useState} from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";

const App = () => {
  const [productsState, setProductsState] = useState([]);
  
  useEffect(() => {
  fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((productsArray) => {
              const newProductsState = productsArray.map((product) => {
                const photo = product.image;
                const name = product.title;
                const ad = product.description;
                const cost = product.price;
                return `${photo} 
                 ${name}:    ${ad} - $${cost}`;
              })
              setProductsState(newProductsState);
            })

  //   setTimeout(() => {
  //     setProductsState([
  //       "bike seat",
  //       "bike horn",
  //       "tire patch",
  //       "shimano brakes",
  //       "bike helmet"
  //     ])
  //   }, 2000)
  }, [])

  const hasProducts = productsState.length > 0;
  
  return (
   <div>

    {hasProducts ? <SearchBar products={productsState} /> : "Loading..."}

     <CountButton incrementBy={1} buttonColor={"red"}/>
     <CountButton incrementBy={5} buttonColor={"yellow"}/>
     <CountButton incrementBy={29} buttonColor={"green"}/>

     <Button>Click Here</Button>
     <Button>Daily Specials</Button>
     <Button>Next</Button>
   </div>
  )
}

export default App;
