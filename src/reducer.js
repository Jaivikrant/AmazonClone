export const initialState={
    basket:[],
    user:null,
};

export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item)=> item.price + amount, 0);


function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            //logic for adding the items to the basket
            case 'REMOVE_FROM_BASKET':
            //logic for removing from basket

            let newBasket = [...state.basket];
            const index =state.basket.findIndex((basketItem)=> basketItem.id ===action.id)

            if(index>=0){
                // if item exist in basket remove the item
                newBasket.splice(index, 1);
            }
            else{
                console.warn(
                    `can't remove the product (id: ${action.id}) as its not available`
                )
            };
            return {
                ...state,
                basket: newBasket,
            }
            default:
                return state;
    }
}
export default reducer;