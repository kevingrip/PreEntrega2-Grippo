import useCount from "../../Hooks/UseCount"

const itemCount = ({ productPrice, onAdd, stock }) => {
    const { count, decrementar, incrementar } = useCount()

    const agregarAlCarrito = () => {
        if (count > 0 && stock >= count) {
            onAdd(count);
        } else {
            console.log("No hay suficiente stock para agregar al carrito.");
        }
    };

    return (
        <>
            <div className="container">
                {stock > 0 ? 
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
                        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
                        
                    </div>
                </div>   
                : <h4 style={{color:'red'}}>Sin Stock</h4>}                           
            </div>
        </>
    );
}

export default itemCount;