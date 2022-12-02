import {useReducer, useState} from 'react'
import {Routes ,Route} from 'react-router-dom'
import Lading from './pages/ladingPage/Lading'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Session } from './context/Session';
import LoginCliente from './pages/clientes/LoginCliente'
import HomeClientes from './pages/clientes/HomeClientes';
import Publicaciones from './components/clientes/Publicaciones'
import './App.css'
import Pedido from './components/clientes/Pedido';
import { pedidosReducer } from './context/pedidosContext/pedidosReducer';
import { PedidoContext } from './context/pedidosContext/PedidoContext';
function App() {
  const [session, setSession] = useState(Session);
  
  const getPedidos = ()=> JSON.parse(localStorage.getItem("pedidos")) || []
  
  const [pedidosState, pedidosDispatch] = useReducer(pedidosReducer, [], getPedidos)


  return (
   <>
   <Session.Provider value={[session,setSession]}>
    <PedidoContext.Provider value={{pedidosState, pedidosDispatch}}>
      <Routes>
        <Route path='/' element={<Lading/>} />
        <Route path='/cliente' element={<LoginCliente/>} />
        <Route path='/publicaciones' element={<Publicaciones/>}/>
        <Route path='/homeCliente' element={<HomeClientes/>} />
        <Route path='/pedido/:idpedido' element={<Pedido/>} />
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />


        </Routes>

    </PedidoContext.Provider>


   </Session.Provider>
   
   
   </>
  );
}

export default App;
