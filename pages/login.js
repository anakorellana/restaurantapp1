/* /pages/login.js */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Popuptwo from "../components/popuptwo";
import Examplepopup from "../components/popup";
import { Toast} from 'react-bootstrap';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  Alert,
  
} from "reactstrap";

import { login } from "../components/auth";
import { logout } from "../components/auth";

import AppContext from "../components/context";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <br></br>
              <br></br>
              
              <Label><h1 style={{marginLeft: '1.3em', color: 'black', fontFamily: 'Anton', lineHeight:'.5'}}>Sign In</h1></Label><br></br>
            <Label><h2 style={{marginLeft: '1.5em',color: '#f5bcb1', fontFamily: 'Anton', lineHeight:'.7'}}>to start ordering away!</h2></Label>
              {/* <img src="http://localhost:1337/uploads/5a60a9d26a764e7cba1099d8b157b5e9.png" /> */}
              {/* <img src="http://localhost:1337/uploads/f4680c52028741baae228306d51faf88.png"  /> */}
           
            
            </div>
            <br></br>
            <section className="wrapper">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span>


                      {/* <main> */}
                      
                  
                      <Button type='button' style ={{ float: "right", width: 120, backgroundColor:"#063831"}} 
                      onClick={(e) => {
                       e.preventDefault()
                       setLoading(true)
                        // setButtonPopup(true)
                     
                        login(data.identifier, data.password)
                          .then((res) => {
                           setShow(true)
                            // set authed User in global context to update header/app state
                            appContext.setUser(res.data.user);
                            appContext.setShow(res.data.user);
                            // console.log(res.data.use)
                           
                          })
                          .catch((error) => {
                            //setError(error.response.data);
                            setLoading(false);
                            
                          }); 
                         
                      }}
                     
                    >
                      
                    {loading ? "Loading... " : "Submit" }
                   {/* <Examplepopup showModal={show}></Examplepopup> */}
                  
                    </Button>
                    
                   
                    {/* <Popuptwo trigger={buttonPopup}>
                    
                    </Popuptwo>
                    */}
                  </FormGroup>
  
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`


          *{

            margin : 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

          }

          main {

            padding: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }              



            .img {
            height:100px;

            }
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
          }
          .notification {
            color: #ab003c;
          }
   
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: black;
          }
          
        `}
      </style>
    </Container>
  );
}

export default Login;