import React from 'react'
import { getProducts, getProductosByCategory } from "../asyncMock";
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ( {greeting} ) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams();

    useEffect(() =>{
        const productos = categoryId ? getProductosByCategory : getProducts;
        productos(categoryId)
            .then(result => {
                setProducts(result)
            })
    },[categoryId])
        
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