import React, { Component, useState } from 'react'
import Updateuser from '../Updateuser/Updateuser';

import './Home.css';
import Pdf from 'react-to-pdf';
import { Col, Row } from 'react-bootstrap';

const ref = React.createRef();

const Home = () => {
   
    return (
      <div className="container-fluid">
        <div  className="container Post" ref={ref}>
            <Row>
              <Col lg={12}>
              <h1>This is Home</h1>
            <Updateuser></Updateuser>
            <h3>Another Lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, non.</p>
              </Col>
            </Row>
        </div>
        <Pdf targetRef={ref} filename="post.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
        </Pdf>
      </div>
    )
  }

export default Home;