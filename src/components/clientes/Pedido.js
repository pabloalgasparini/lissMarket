import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { PedidoContext } from '../../context/pedidosContext/PedidoContext'
import { pedidosTypes } from '../../context/pedidosContext/pedidosTypes'



function Pedido() {

    const {idpedido} = useParams()
    const [pedido, setPedido] = useState({})

    const {pedidosState, pedidosDispatch} = useContext(PedidoContext)

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

        pedidosDispatch({type: pedidosTypes.addPedido, payload: productoPedido})

       
    }
    
    useEffect(()=>{
        consulta()
        
    },[])
    useEffect(()=>{
          localStorage.setItem("pedidos", JSON.stringify(pedidosState));
      }, [])
      console.log(pedidosState);
  return (
    <div>Pedido</div>
  )
}

export default Pedido;