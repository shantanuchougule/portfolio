import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Ensure the CSS file is imported
import logo from '../assets/icons/9.png';

function CustomNavbar() {
    return (
        <header className="bg-cyan-300 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Shantanu Logo" className="logo" />
                <Link  className="navbar-name" to="/" style={{ textDecoration: 'none'}}>
                    SHANTANU
                </Link>
            </div>
            <nav className="space-x-4">
                <Link className="" to="/">HOME</Link>
                <Link className="" to="/about">ABOUT</Link>
                <Link className="" to="/education">EDUCATION</Link>
                <Link className="" to="/projects">PROJECTS</Link>
                <Link className="" to="/contact">CONTACT</Link>
            </nav>
        </header>
    );
}

export default CustomNavbar;
