import React from 'react';
import { NavLink } from 'react-router-dom';

// We're using NavLink instead of the anchor tag ( <a />) so the page will not refresh when a user clicks on any of the links.

const Header = () => {
    return (
        <header>
            <h1>Book Management App</h1>
            <hr />
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Books List
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="active">
                    Add Book
                </NavLink>
            </div>
        </header>
    )
}

export default Header;
