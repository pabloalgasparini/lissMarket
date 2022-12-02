import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { PedidoContext } from '../../context/pedidosContext/PedidoContext'
import { pedidosTypes } from '../../context/pedidosContext/pedidosTypes'



function Pedido() {
    const [mensaje,setMensaje]=useState('')
    const {idpedido} = useParams()
    const [pedido, setPedido] = useState({})

    const {pedidosState, pedidosDispatch} = useContext(PedidoContext)
    const [state,setState] = useContext({state})
    const consulta = async () => {
 
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
    
        const peticion = await fetch(`http://localhost:3000/productos`, requestOptions)
        const respuesta = await peticion.json()

        const productoPedido = respuesta.producto.filter(producto=> producto._id === idpedido)

        console.log(productoPedido[0]);

        localStorage.setItem("pedidos", JSON.stringify([...pedidosState, productoPedido[0]]))
        pedidosDispatch({type: pedidosTypes.addPedido, payload: productoPedido[0]}) 

       setPedido(productoPedido[0]);
       console.log(state.usuario)
    }
    
    useEffect(()=>{
        consulta()
        
    },[])
    
      // console.log(pedidosState);
  return (
    
// <div>Pedido</div>

    <div className="col-md-12">
   <form action="https://formsubmit.co/pabloalgasparini@gmail.com" method="POST">
     <input type="text" name="name" placeholder={pedido.nombreProducto}/>
     <input type="email" name="email"placeholder='pabloalgasparini@gmail.com'/>
     <button type="submit">Send</button>
    </form>

    </div>

 

  )
}

export default Pedido;