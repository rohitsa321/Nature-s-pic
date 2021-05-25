import React, { useEffect, useState } from 'react'
import './App.css';
import Pic from './Pic';
import axios from 'axios';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const clientID="CaV13F50ZYPLS2iNJF1uelTqhcpPJSd6ey57TMFUNLg";

function App() {
   const count=20;
   const url="https://api.unsplash.com/photos/random/?count=" +count+"&client_id="+clientID+"&query=nature";
   const [photos,setPhotos]=useState(null);

  useEffect(() => {
      axios.get(url)
      .then((res)=>{
        setPhotos(res.data);
      }).catch((err)=>console.log(err));
  }, [])

  return (
    <div className="app">
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand >
              Nature
           </Navbar.Brand>
        </Navbar>
      
       
       <Container className="home">
          {
          photos?photos.map((photo)=>
          <Col xs={8} xl={4} sm={7} lg={4} md={6}>
            <Pic key={photo.id} url={photo.urls.regular}/>
          </Col>
          ):null
          }

       </Container>

    </div>
  );
}

export default App;
