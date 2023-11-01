import { Link } from "react-router-dom"

const Item = ({ id, name, imagen, price, description }) => {

    return (
        
        <div className="card mb-4" style={{ width: '18rem' }}>
            <div>
                <img className="card-img-top"  src={imagen} alt="Card image cap"/>
            </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h2>${price}</h2>
                    <p className="card-text">{description}</p>
                    <Link to={`/item/${id}`} className='linkStyleCard'>Ver detalle</Link>
                </div>
        </div>

    )
}

export default Item