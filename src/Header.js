import LOGO from './LOGO.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navBar">
                <div className="logo">
                    <Link to="/"><img src={LOGO} alt="logo" /> </Link>
                </div>
                <ul>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/about">ABOUT ME
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/FAQ">FAQ</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/highlight">PAST HIGHLIGHTS</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/pricing">SERVICES</Link>
                    </li>

                </ul>
            </nav>
        </header >

    )
}

export default Header