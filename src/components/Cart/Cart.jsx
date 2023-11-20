import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart,clearCart, total,removeItem} = useCart()

    if (cart.length >0){
        return (
            <div>
                <h1>Carrito de compras</h1>
                <div>
                    {
                        cart.map(prod => {
                            return(
                                <div key={prod.id} className="cartLine">
                                    <img src={prod.imagen} style={{height:'100px'}} alt="" />
                                    <h3 className="line">{prod.name}</h3>
                                    <h3 className="line">{prod.description}</h3>
                                    <h3 className="line">Cantidad: {prod.quantity}</h3>
                                    <h3 className="line">SubTotal: {prod.price*prod.quantity}</h3>
                                    <button className="remove" style={{margin:'20px'}} onClick={() => removeItem(prod.id)}>X</button>                                    
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h2>Total: ${total}</h2>
                </div>
                <div className="cartLine cartBox">
                    <Link to= '/'><button onClick={clearCart} style={{backgroundColor:'orangered'}}>Limpiar Carrito</button></Link>
                    <Link to= '/checkout'><button style={{backgroundColor:'blue'}}>Confirmar Compra</button></Link>
                </div>
            </div>
        )
    } else {
        return <h1>El carrito está vacio</h1>
    }    
}

export default Cart