import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {NavLink, Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Buscador from './Buscador';
// import { Session } from '../../context/Session';
// import { ProductosContext } from '../../context/ProductosContext';

function FormProduct() {
    const [mostrar, setMostrar] = useState([])
    const [productos, setProductos]=useState(mostrar)
    const [pedidos, setPedidos]=useState()
    const [pedir,setPedir]=useState()
    
//   const handleInput = ({ target }) => {
      
      
//       setMostrar({
//           ...mostrar,
//           [target.name]: target.value
//         })
//         console.log(target.value)
      
// };

const capturarId=(e) => setPedidos(e.target.value);
//  const handlePedido=(e)=>{
  
//     setPedir(productos.filter((producto)=> producto._id === pedidos )) }
  // console.log(pedidos)}
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
  
    setMostrar(respuesta?.producto ?? [])
    setProductos(mostrar)
   
    
  }
  useEffect(() => {
    consulta()
    
    
    
  }, []);
  
 

  return (
   
    
  <>
  ;
    <Buscador/>
    {/* <Form.Label>Ingrese un producto Deseado</Form.Label>
    <Form.Select onChange={handleInput} aria-label="Default select example">
      <option >seleccione una categoria</option>
      <option value="Bebidas">Bebidas</option>
      <option value="Lacteos">Lacteos</option>
      <option value="Panificado">Panificados</option>
      <option value="Carnicos">Carnicos</option>
      <option value="Pastas">Pastas</option>
    </Form.Select> */}
  
      
        <div className='ms-sm-3 me-sm-4 me-2 py-5 ps-5'>
        <div className='row w-md-75 ms-auto'>
          {mostrar.length > 1&&mostrar?.map((item, index) => (
            
            <div className='col-8 col-md-2 col-lg-3 mb-2' key={item._id}>
              <Card  className='' key={item._id}>
                <Card.Title className='text-center'>Producto</Card.Title>
                <div className='container py-3 px-4'>
                  <Card.Img className='img' variant="top" src={item.imagen} />
                  <Card.Body>
               
                    <Card.Title>{item.nombreProducto}</Card.Title>
                    <Card.Text>
                      {"Marca : " + item.marca}
                     

                    </Card.Text>
                    <Card.Text>
                      
                      {"Categoria : " + item.categoria}

                    </Card.Text>
                    <Card.Text>
                      {"Precio X unidad : " + item.precioUnitario}
                    </Card.Text>
                    <Link to={`/pedido/${item._id}`} variant="primary">Pedir</Link>
                  </Card.Body>
                </div>
              </Card>
            </div>
              ))}
        </div>
      </div>
    

  
    
{/* {

  ( mostrar?.length <= 1 && mostrar)
  ? (
    <p>Loading...</p>
  )
  : (
    mostrar?.map(async(product) => (
      <div 
      key={product._id}
      className="card">
        <div className='card-title'>
          {product.nombreProducto}
        </div>
      </div>
    ))
  )

} */}
  </>
   
  );
  
}

export default FormProduct;