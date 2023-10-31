import React from 'react'
import { getProducts, getProductosByCategory } from "../asyncMock";
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ( {greeting} ) => {
    const [products, setProducts] = useState([])

    const {id} = useParams();

    useEffect(() =>{
        const productos = id ? getProductosByCategory : getProducts;
        productos(id)
            .then(result => {
                setProducts(result)
            })
    },[id])
        
    return (
        <>
            <h1>
                {id ? id : greeting}             
            </h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;