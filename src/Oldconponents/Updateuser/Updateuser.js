import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Updateuser = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({})
    

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);

    const Updateproduct = e => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0)
            {
                alert('Updated Successfully')
                setProduct({})
            }
        })
        e.preventDefault();
    }
    const nameChange = e => {
        const productname = e.target.value
        const updatedname = {name:productname, price:product.prcie, quantity:product.quantity, brand:product.brand};
        setProduct(updatedname)
    }
    const priceChange = e => {
        const productprice = e.target.value;
        const updatedprice = {name:product.name, price:productprice, quantity:product.quantity, brand:product.brand};
        setProduct(updatedprice)
    }
    const quantityChange = e => {
        const productquantity = e.target.value;
        const updatedquantity = {name:product.name, price:product.price, quantity:productquantity, brand:product.brand};
        setProduct(updatedquantity)
    }
    const brandChange = e => {
        const productbrand = e.target.value;
        const updatedbrand = {name:product.name, price:product.price, quantity:product.quantity, brand:productbrand};
        setProduct(updatedbrand)
    }
    return (
        <div className="container">
           <h1 className="text-center">Update Your Product</h1>
           <Row className="justify-content-center">
                <Col lg={6}>
                    <h2  className="text-primary">{product.name}</h2>
                    <h4>{product.price}</h4>
                    <h4>{product.quantity}</h4>
                    <h5>{product.brand}</h5>
                </Col>
           </Row>
           <Row className="justify-content-center">
            <Col lg={8}>
            <h1>Add Product</h1>
            <form onSubmit={Updateproduct}>
                <input type="text" onChange={nameChange} value={product.name} name=""  placeholder="Product Name" />
                <br />
                <br />
                <input type="number" onChange={priceChange}  value={product.price} name="" id="" placeholder="Product Price" />
                <br />
                <br />
                <input type="number" onChange={quantityChange} value={product.quantity} name="" id="" placeholder="Product Quantity" />
                <br />
                <br />
                <input type="text" onChange={brandChange}  value={product.brand} name="" id="" placeholder="Product Brand" />
                <br />
                <br />
                <input type="submit" value="Update Product" />
            </form>
            </Col>
        </Row>
        </div>
    );
};

export default Updateuser;