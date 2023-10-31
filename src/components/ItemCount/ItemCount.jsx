import useCount from "../Hooks/UseCount"



const itemCount = ({productPrice}) =>{
    const { count, decrementar, incrementar} = useCount()

    return(
        <>
            <div className="container">
                <h4>Cantidad: {count}</h4>
                <div id='cantCar'>
                    <button onClick={decrementar}> -1 </button>
                    <button onClick={incrementar}> +1 </button>
                </div>                
                <div id='subTotal'>
                {count > 0 &&(
                    <h3>Subtotal: ${count*productPrice}</h3>
                    )}
                </div>                                
            </div>
        </>
    )
}

export default itemCount