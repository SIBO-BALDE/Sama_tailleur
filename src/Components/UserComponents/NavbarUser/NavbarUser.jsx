import React from 'react'
import {Button, Container, Image, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './NavbarUser.css';

export default function NavbarUser() {
  return (
    <div className='navbar_glabal_content'>
         <Navbar expand="lg" className="navbar_body-main" 
          style={{backgroundColor:'#fff', boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px',}}>
          <Container fluid>
           <Navbar.Brand href="/">
            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png'  className='' style={{width: '40px', height: '40px'}}/>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto  my-lg-0 navbarcontent" style={{marginLeft:'350px'}} id='navbarcontent'>
            <a  href='#' style={{textDecoration:'none', color:'black'}} >Accueil</a >
            <a href='#'  id='link_navbar_menu' style={{textDecoration:'none', color:'black',marginLeft:'30px'}} >A propos</a > 
            <a  href='#'  id='link_navbar_menu' style={{textDecoration:'none', color:'black',marginLeft:'30px'}} >Produits</a > 
            <a  href='#'  id='link_navbar_menu' style={{textDecoration:'none', color:'black',marginLeft:'30px'}}  >Contacts</a > 
            {/* <a  to={"/tarif"} id='link_navbar_menu' style={{fontWeight:'500px', color:'#004573' , marginLeft:'30px', borderBottom: linkActive === '/tarif' ? '3px solid #FFB703' : 'none'}}>Tarifs</a > 
            <a  to={"/contact"} id='link_navbar_menu' style={{fontWeight:'500px', color:'#004573' , marginLeft:'30px', borderBottom: linkActive === '/contact' ? '3px solid #FFB703' : 'none'}}>Contact</a >  */}
          </Nav>
           <div id='button-nabar-contentmain-one'>
          <Button  style={{marginRight:'80px', backgroundColor:'#212E53', border:'none'}} id='button-nabar-contentmain-one-2' >
            <a  href='#'  style={{textDecoration:'none', color:'white'}}>Connexion</a >
          </Button>

           </div>
           </Navbar.Collapse>
          </Container>
     </Navbar>
   </div>
  )
}
