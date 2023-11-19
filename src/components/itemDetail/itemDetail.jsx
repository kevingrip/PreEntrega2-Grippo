
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, imagen, name, category, price,description,stock }) => {
  
    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        const productToAdd = {
            id, name, price, quantity
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
                        <ItemCount productPrice={price} stock={stock} onAdd={handleOnAdd}/>
                    </div>
                </section>
            </div>
        </article>
      )
    }
    
    export default ItemDetail