import React from 'react'

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from '../../services/firebase/firestore/products';
import { useAsync } from '../../Hooks/useAsinc';

const ItemListContainer = ( {greeting} ) => {
    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    if(products.length == 0) {
        return <h1>No existen productos para esta categoria</h1>
    }
        
    return (
        <>
            <h1>
                {categoryId ? categoryId : greeting}             
            </h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;