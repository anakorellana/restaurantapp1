/* /components/Layout.js */

import React, { useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { logout } from "./auth";
import { Container, Nav, NavItem } from "reactstrap";
import Examplepopup from "./popUp";
import AppContext from "./context";



const Layout = (props) => {
const title = "Welcome to Restaurant App";
const {user} = useContext(AppContext);
const[show, setShow] = useState(true)

// const {user} = AppContext.isAuthenticated;

  
return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"/>

          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Cormorant+Garamond&family=Lato&family=Lora&family=Magra:wght@700&family=Proza+Libre&display=swap" rel="stylesheet">
          
          </link>
        
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }

            h2 {
              font-family: 'Anton', sans-serif;

            }
          `}
        </style>
        <Nav className="navbar navbar-dark" style={{backgroundColor: '#063831'}}>
          <NavItem>
          <Link href="/">
            <a className="nav=link">
            <img
              src="http://localhost:1337/uploads/81395ff46c634f38ba327e8372215ce4.png"
              width="120"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </a>
          </Link>
          </NavItem>
          <NavItem className="ml-auto">
            
            {user? (
               <Link href="#">
              <a className="nav-link" style={{ fontFamily: 'Work Sans'}}>Hi {user.username}!</a>
              </Link>
            ) : (
              <Link href="/register">
                <a className="nav-link" style={{ fontFamily: 'Work Sans'}}> Register</a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            { user ? (
              <Link href="/">
                <a
                  className="nav-link" style={{ fontFamily: 'Work Sans'}}
                  onClick={() => {
                    logout();
                    // setUser(null);
                  }}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link" style={{ fontFamily: 'Work Sans'}}>Sign in</a>
              </Link>
            )}
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
      {user && <Examplepopup showModal={show} setShow={setShow}/>}
    </div>
  );
};

export default Layout;