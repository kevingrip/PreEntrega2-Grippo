import useCount from "../../Hooks/useCount"
import { useState } from "react";
import { Link } from "react-router-dom";

const itemCount = ({ productPrice, onAdd, stock }) => {
    const { count, decrementar, incrementar } = useCount()

    const [outStock, setOutStock] = useState(false)

    const agregarAlCarrito = () => {
        if (count > 0 && stock >= count) {
            onAdd(count);
        } else {
            setOutStock(true)
            console.log("No hay suficiente stock para agregar al carrito.");
        }
    };

    if (stock ==0){
        return (
            <div> 
                <h4 style={{color:'red'}}>Sin Stock</h4>  
                <Link to={`/`}><button> Volver al inicio </button></Link>
            </div>)
            }

        return (
        <>
            <div className="container">
                <div>
                    <h4>Cantidad: {count}</h4>
                    <div id='cantCar'>
                        <button onClick={decrementar}> - </button>
                        <button onClick={incrementar}> + </button>
                    </div>                
                    <div id='subTotal'>
                        {count > 0 && (
                            <h3>Subtotal: ${count * productPrice}</h3>
                        )}
                    </div>  
                    <div>
                        {outStock ? <h3 style={{color: 'red',height:'60px' }}>No hay suficiente stock</h3>:''}
                        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
                    </div>
                </div>      
            </div>
        </>
    )};
    

export default itemCount;