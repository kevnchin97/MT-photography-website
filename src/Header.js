import LOGO from './LOGO.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src={LOGO} alt="logo" /> </Link>
            </div>
            <nav className="navBar">
                <ul>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/about">ABOUT ME
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/clients">CLIENTS/BRANDS</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/highlights">PAST HIGHLIGHTS</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/pricing">PRICING PLANS</Link>
                    </li>

                </ul>
            </nav>
        </header >

    )
}

export default Header