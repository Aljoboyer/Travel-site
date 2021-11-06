import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Row} from 'react-bootstrap';
import Product from './Product';
const Users = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const DeleteHandle = (id) => {
     const confirms = window.confirm('Are sure ? you want to delete this products');
     if(confirms)
     {
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            {
                const remainproducts = products.filter(product => product._id !== id)
                setProducts(remainproducts)
                alert('User deleted')
            }
        })
     }
    }
    return (
         <div>
            <h1 className="text-center  mb-4 mt-2">All Products Here</h1>
            <h3 className="text-success fw-bold"></h3>
            <Row className="p-4">
                {
                    products.map(product => <Product DeleteHandle={DeleteHandle} key={product._id} product={product}></Product>)
                }
            </Row>
        </div>
    );
};

export default Users;