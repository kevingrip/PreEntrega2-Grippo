import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

import ContactForm from "./Form"

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                    address: userData.address

                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(),'in',ids))
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
    
                if(outOfStock.length === 0) {
                    const ordersRef = collection(db, 'orders')
    
                    const { id } = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setLoading(false)
                    setOrderId(id)                    
                }
            })
        } catch (error) {
            console.error('Hubo un error generando la orden')
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId) {
        return (
            <div className="checkOk">
                <h1>Felicitaciones!</h1>
                <h2>Su compra se procesó correctamente</h2>
                <h3>El Id de su orden es: {orderId}</h3>
            </div>
        )
    }

    if (cart.length==0){
        return <h1>Debe agregar productos al carrito</h1>
    }


    return (
        <>
            <h1>Checkout</h1>
            <h2>Ingrese sus datos</h2>
            <ContactForm onCreate={createOrder}/>
        </>
    )
}

export default Checkout