import { useEffect,useState } from "react";
// import { getProductsById } from "../asyncMock";
import { useParams } from "react-router-dom";

import { getDoc,doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = ()=>{
    const[product,setProduct] = useState(null)
    const[loading,setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {        
        setLoading(true)

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(documentSnapshot =>{
                const fields = documentSnapshot.data()
                const productAdapted = { id: documentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .finally(() => {
                setLoading(false)
            })

        // getProductsById(itemId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() =>{
        //         setLoading(false)
        //     })
    },[itemId])

    if (loading){
        return <h1>Cargando Producto</h1>
    }

    if (!product){
        return <h1>El producto no existe</h1>
    }

    return (
        <ItemDetail{...product}/>
    );
};

export default ItemDetailContainer;