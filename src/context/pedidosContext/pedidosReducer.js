import { pedidosTypes } from "./pedidosTypes";

export const pedidosReducer = (pedidosState, action)=>{

    const {payload} = action;
    switch (action.type) {
        
        case pedidosTypes.addPedido:
            return {
                ...pedidosState.pedidos,
                payload
            }

    
        default:
            break;
    }
}