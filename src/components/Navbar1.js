import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Navbar1() {

    const navLinks=[
        {
            text:"Home",
            link:"/"
        },
        {
            text:"About Us",
            link:"/about-us"
        },
        {
            text:"Services",
            link:"/services"
        },
        {
            text:"Technology",
            link:"/technology"
        },
        {
            text:"Careers",
            link:"/careers"
        },
        {
            text:"Blogs",
            link:"/blogs"
        },
        {
            text:"Our Works",
            link:"/our-works"
        },
        {
            text:"Contact Us",
            link:"/contact-us"
        }
    ]
  return (
    <>
       <div>
       <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className="nav">
              
            </Navbar.Brand>
            <Nav className="me-auto navi">
              {navLinks.map((nav) => {

                return (
                  <Nav.Link className="navi" href={nav.link}>
                    {nav.text}
                  </Nav.Link>
                );
              })}
            </Nav>
            </Container>
            </Navbar>
       </div>
    </>
    
  )
}

export default Navbar1
