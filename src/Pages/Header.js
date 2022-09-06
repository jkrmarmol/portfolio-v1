import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/" className="logo">
                    <img src="assets/kmlogo_wobg.png" alt="kumatech developers" />
                </NavLink>
                <ul id="menu-list">
                    <li>
                        <NavLink to="/">
                            <p><span className="header-fword">H</span>ome</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">
                            <p><span className="header-fword">S</span>ervices</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills">
                            <p><span className="header-fword">S</span>kills</p>
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://m.me/jkrmarmol" target="_blank">
                            <p><span className="header-fword">C</span>ontacts</p>
                        </a>
                    </li>
                    <li className="nav-resume">
                        <a href="#">
                            <p className="resume">Resume</p>
                        </a>
                    </li>
                </ul>
                <i className='bx bx-menu-alt-right' id="menu-logo"></i>
            </nav>
        </header>
    );
}

export default Header;