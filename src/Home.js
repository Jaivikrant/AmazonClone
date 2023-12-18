import React from 'react';
import { useState, useEffect } from 'react';

import "./Home.css";
import Product from './Product';
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await
          fetch("https://fakestoreapi.com/products");
        const result = await
          response.json();
        setData(result);
      }
      catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData();
  }, []);



  return (
    <div className='home'>
      <img className='home__image'
        src="https://wallpaperaccess.com/full/6385960.jpg"
        alt="" />

      <div className="home__row">
       


          {data.map((product) => (
            <Product key={product.id}
              {...product}

            />
          ))}
        </div>
      
    </div>
  )
}

export default Home;