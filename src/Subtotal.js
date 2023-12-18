import React from 'react'
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (

        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <div className='total'>
                            Total Products   {basket.length}
                        </div>
                        <div className='total1'>
                            <div className='a'>Total Amount</div> 
                            <div className='b'>{` ${value} `}</div>
                        </div>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs "}
            />

            <button>Made By Jai Vikrant Yadav</button>
        </div>
    )
}

export default Subtotal;