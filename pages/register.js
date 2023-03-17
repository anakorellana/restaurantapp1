/* /pages/register.js */

import React, { useState, useContext } from "react";
import Popup from 'reactjs-popup';
// import Popuptwo from "../components/popuptwo";
import { Toast} from 'react-bootstrap';
import 'reactjs-popup/dist/index.css';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  
  
} from "reactstrap";
import { registerUser } from "../components/auth";
import Examplepopup from "../components/popUp";
import AppContext from "../components/context";

const Register = () => {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);
  const appContext = useContext(AppContext);

  const {user} = useContext(AppContext);
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header" style={{backgroundColor:'white'}}>
              <br></br>
              <br></br>
            <Label><h1 style={{marginLeft: '1.3em', color: 'black', fontFamily: 'Anton', lineHeight:'.5'}}>Sign up to order</h1></Label>
            <Label><h2 style={{marginLeft: '1.5em',color: '#f5bcb1', fontFamily: 'Anton', lineHeight:'.7'}}> from your favorite spots.</h2></Label>
           
              {/* <img src="http://localhost:1337/uploads/5a60a9d26a764e7cba1099d8b157b5e9.png" /> */}
            </div>
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
                    <Label style={{ fontFamily: 'Work Sans'}}>Username:</Label>
                    <Input
                      disabled={loading}
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      value={data.username}
                      type="text"
                      name="username"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label style={{ fontFamily: 'Work Sans'}}>Email:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      value={data.email}
                      type="email"
                      name="email"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label style={{ fontFamily: 'Work Sans'}}>Password:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      value={data.password}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <span>
                      <a href="">
                        <small style={{ fontFamily: 'Work Sans', color: 'black'}}>Forgot Password?</small>
                      </a>
                    </span>
                    <Button
                      style={{ float: "right", width: 120, backgroundColor:"#063831"}}
                      // color="primary"
                      disabled={loading}
                      onClick={() => {
                        setLoading(true);
                        registerUser(data.username, data.email, data.password)
                          .then((res) => {
                            // set authed user in global context object
                            appContext.setUser({...res.data.user, registered:true});
                            setLoading(false);
                            console.log(`registered user: ${JSON.stringify(res.data)}`)
                            setShow(true);

                          })
                          .catch((error) => {
                            console.log(`error in register: ${error}`)
                            //setError(error.response.data);
                            setLoading(false);
                          });
                      }}
                    >
                    
                      {loading ? "Loading.." : "Submit" }
                     
       
                    </Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      
      
      
      <style jsx>
        {`
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
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>

     
    </Container>
  );
};
export default Register;
