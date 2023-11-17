import { Link } from "react-router-dom";
import './Header.scss';

function Header() {
    return(
        <div className="flexnav">
            <img className="logo" src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825731uw3z1.png" alt="" />
            <nav>
                <ul className="flexlist">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pokemon">Pokemons</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;