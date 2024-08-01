import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { navBarItems } from "../../constants";
import { Link, useLocation } from "react-router-dom";

import "./index.css";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar-container">
            <img className="logo" src="./dhoniLogo.png" alt="Logo" />
            <ul>
                {navBarItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            className={`react-link ${location.pathname === item.route ? 'active' : ''}`}
                            to={item.route}
                        >
                            {item.value}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="social-icons">
                <RxInstagramLogo className="icon" />
                <FaLinkedinIn className="icon" />
            </div>
        </div>
    );
};

export default Navbar;
