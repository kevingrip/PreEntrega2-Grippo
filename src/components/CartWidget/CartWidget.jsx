import img from '../CartWidget/carritoCompras.png'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <div id='posCart'>        
            <Link to= {`/cart`}><button id='contenedorCarrito'>
                
                <div>
                    <img id='tamañoCarrito' src={img} alt="Carrito"/>
                </div>
                <div id='numCarrito'>
                    <h3>{totalQuantity}</h3> 
                </div>
            </button></Link>
        </div>
    )
}

export default CartWidget