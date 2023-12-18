import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout(){
    const [{basket}] = useStateValue();
  return (
    <div className="checkout">
      {basket?.length===0 ?(
        <div><h2 className='height'>Your Cart is Empty</h2>
        </div>
      ) : (
        
        <div>
        {/* To list out all the checkout products */}
        {basket.map(item=>(
          
          <CheckoutProduct
             id= {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
            description = {item.description}
            />
          
        ))}
        </div>

      )}
     
          <div className="checkout__right">
            <Subtotal/>
          </div>
        
    
    </div>
    
  )
}

export default Checkout