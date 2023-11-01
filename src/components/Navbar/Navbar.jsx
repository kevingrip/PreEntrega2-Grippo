import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {


    return (
        <>
            <div id='nav'>
                <div className='widthNav' id='posButtonPrincipal'>
                    <Link to={`/`} className='linkStylePrin'>DISTRIBUIDORA KHG</Link>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg" id="navGround">
                        <div className="container">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={`/category/Gaseosas`} className='linkStyleNav'>Gaseosas</Link>                                    
                                    </li>
                                    <li className="nav-item" id='buttonNav'>
                                        <Link to={`/category/Aguas`} className='linkStyleNav'>Aguas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/category/Aguas Saborizadas`} className='linkStyleNav'>Aguas Saborizadas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/category/Cervezas`} className='linkStyleNav'>Cervezas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/category/Vinos`} className='linkStyleNav'>Vinos</Link>
                                    </li>
                                </ul>                        
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='widthNav' >
                    <CartWidget/>
                </div>
            </div>
        </>

    )
}

export default Navbar;