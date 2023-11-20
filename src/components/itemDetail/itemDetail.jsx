import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, imagen, name, category, price,description,stock }) => {
  
    const { addItem,isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        const productToAdd = {
            id, name, price, quantity, description, imagen
        }

        addItem(productToAdd)
    }

    return (
        <article className="container">
            <h1>Detalles del Producto</h1>
            <div id='itemDetail'>
                <picture id='imageDetail'>
                    <img id='imgedit' src={imagen} alt={name} />
                </picture>
                <section id= 'detailDescription'>
                    <div >
                        <p>{category}</p>
                        <p id='productName'>{name}</p>   
                        <p>{description}</p>            
                        <p id='productPrice'>$ {price}</p>
                    </div>
                    <div >
                        { isInCart(id) ? (<Link to='/cart'><button>Finalizar Compra</button></Link>)
                        : (<ItemCount productPrice={price} stock={stock} onAdd={handleOnAdd}/>)}                                                
                    </div>
                </section>
            </div>
        </article>
        
      )
    }
    
    export default ItemDetail