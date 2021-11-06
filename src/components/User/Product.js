import React from 'react';
import { Col,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Product = (props) => {
    const {_id,name,price,quantity,brand} = props.product
    return (
            <Col lg={4} md={6} sm={12} className="p-2">
                <h2  className="text-primary">{name}</h2>
                <h4>{price}</h4>
                <h4>{quantity}</h4>
                <h5>{brand}</h5>
                <Button onClick={ () => props.DeleteHandle(_id)} className="btn btn-danger mt-3 fw-bold">X</Button>
                <Link to={`/users/update/${_id}`}><Button className="btn btn-warning ms-3 mt-3 fw-bold">Update Product</Button></Link>
            </Col>
    );
};

export default Product;