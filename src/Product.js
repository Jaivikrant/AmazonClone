import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';


function Product({id,title,image,price,rating,description}) {
  const [{basket}, dispatch] = useStateValue();


  const addToBasket=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: Math.round((price*50).toFixed(2)),
        description: description,
      },
    });
  };
  
  return <div className="product">

<img src={image} 
  alt="" />
  <div className='product__title'>
  <p>{title}</p>
  <p className='product__price'>
  <strong>Rs: </strong>
  <strong>{Math.round((price*50).toFixed(2))}.00</strong>
  <p className='product__desc'>{description.slice(0,100)}</p>
  </p>
 
  </div>
  
  <button onClick={addToBasket}>Add to Basket</button>
  
  </div>
}

export default Product;