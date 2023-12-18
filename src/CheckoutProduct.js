import React from 'react';
import './CheckoutProduct.css';
import { ImBin2 } from "react-icons/im";
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, image, price, description }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
            
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutImage'
                src={image}
                alt="" />
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__title">
                    <div>{title}</div>
                    <ImBin2 className='binImg' onClick={removeFromBasket} />
                </div>
                <div className="checkoutProduct__price">
                    <h2>Rs {price}</h2>
                </div>

                <div className="checkoutProduct__dessc">{description}</div>

            </div>

        </div>
    )
}

export default CheckoutProduct;