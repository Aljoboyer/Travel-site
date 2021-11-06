import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <header>
            <Link className="ms-4 fs-1 fw-bold" to="/">Home</Link>
            <Link className="ms-4 fs-1 fw-bold" to="/adduser">Add Product</Link>
            <Link className="ms-4 fs-1 fw-bold" to="/user">All Products</Link>
            </header>
        </div>
    );
};

export default Header;