import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="container col-md-7">
            <div className="d-flex row justify-content-around">
                {
                    products.map(prod => {
                        return (
                            <Item key={prod.id} {...prod}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemList