import img from '../CartWidget/carritoCompras.png'

const CartWidget = () => {
    return (
        <div id='posCart'>        
            <button id='contenedorCarrito'>
                <div>
                    <img id='tamañoCarrito' src={img} alt="Carrito"/>
                </div>
                <div id='numCarrito'>
                    <h3>0</h3> 
                </div>
            </button>
        </div>
    )
}

export default CartWidget