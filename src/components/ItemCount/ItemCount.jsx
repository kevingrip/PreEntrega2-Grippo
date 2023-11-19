import useCount from "../../Hooks/UseCount"



const itemCount = ({productPrice, onAdd, stock}) =>{
    const { count, decrementar, incrementar} = useCount()

    return(
        <>
            <div className="container">
                <h4>Cantidad: {count}</h4>
                <div id='cantCar'>
                    <button onClick={decrementar}> - </button>
                    <button onClick={incrementar}> + </button>
                </div>                
                <div id='subTotal'>
                {count > 0 &&(
                    <h3>Subtotal: ${count*productPrice}</h3>
                    )}
                </div>  
                <div>
                    <button onClick={()=> stock > 0 && onAdd(count)}>Agregar al carrito</button>
                </div>                              
            </div>
        </>
    )
}

export default itemCount