import { useEffect,useState } from "react";
import { getProductsById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = ()=>{
    const[product,setProduct] = useState(null)
    const[loading,setLoading] = useState(true)

    const {itemId} = useParams()



    useEffect(() => {
        
        setLoading(true)

        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    },[itemId])

    if (loading){
        return <h1>Cargando Producto</h1>
    }

    if (!product){
        return <h1>El producto no existe</h1>
    }

    return (
        <div className="container">
            <h1>Detalles del Producto</h1>
            <div id='detailProduct'>
                <div id='imageDetail'>
                    <img id='imgedit' src={product.imagen} alt={product.name} />
                </div>
                <div id= 'detailDescription'>
                    <div >
                        <p>{product.category}</p>
                        <p id='productName'>{product.name}</p>   
                        <p>{product.description}</p>            
                        <p id='productPrice'>$ {product.price}</p>
                    </div>
                    <div >
                        <ItemCount productPrice={product.price}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ItemDetailContainer;