import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/">
                    <li>Главная</li>
                </Link>
                <Link to="/add-post">
                    <li>Добавить запись</li>
                </Link>
            </ul>
        </nav>
    );
}


export default Nav;