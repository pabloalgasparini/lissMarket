import { pedidosTypes } from "./pedidosTypes";

export const pedidosReducer = (pedidosState, action)=>{

    switch (action.type) {  
        
        case pedidosTypes.addPedido:
            return [...pedidosState
                , action.payload];

    
        default:
            break;
    }
}