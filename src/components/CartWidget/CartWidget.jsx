import img from '../CartWidget/carritoCompras.png'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <div id='posCart'>        
            <button id='contenedorCarrito'>
                <div>
                    <img id='tamañoCarrito' src={img} alt="Carrito"/>
                </div>
                <div id='numCarrito'>
                    <h3>{totalQuantity}</h3> 
                </div>
            </button>
        </div>
    )
}

export default CartWidget