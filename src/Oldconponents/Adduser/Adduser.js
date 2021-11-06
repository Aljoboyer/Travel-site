import React, { useEffect, useRef, useState } from 'react';
import {Row} from 'react-bootstrap';
const Adduser = () => {
    const [products, setProducts] = useState({})
    const [success, setSuccess] = useState('')
    const nameref = useRef();
    const priceref = useRef();
    const quantityref = useRef();
    const brandref = useRef();

    const Addpoducts = e => {
        const productname = nameref.current.value;
        const price  = priceref.current.value;
        const quantity = quantityref.current.value;
        const brand = brandref.current.value;

        const newproduct = {name:productname, price:price, quantity:quantity,brand:brand}
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newproduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
            {
                setSuccess('Product Added Successfully');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className="container-fluid d-flex justify-content-center">
           <Row>
           <Row className="mb-4  mt-3">
           <h1 className="text-center mb-4 text-success fw-bold fs-5">{success}</h1>
           </Row>
        <Row className="">
            <div className="div">
            <h1>Add Product</h1>
            <form onSubmit={Addpoducts}>
                <input type="text" ref={nameref} name=""  placeholder="Product Name" />
                <br />
                <br />
                <input type="number" ref={priceref}  name="" id="" placeholder="Product Price" />
                <br />
                <br />
                <input type="number" ref={quantityref}  name="" id="" placeholder="Product Quantity" />
                <br />
                <br />
                <input type="text" ref={brandref}  name="" id="" placeholder="Product Brand" />
                <br />
                <br />
                <input type="submit" value="Add Product" />
            </form>
            </div>
        </Row>
           </Row>
        </div>
    );
};

export default Adduser;