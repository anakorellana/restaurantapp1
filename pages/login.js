/* /pages/login.js */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
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

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
}

  from "firebase/auth";


import { login } from "../components/auth";
// import { signInWithGoogle , auth} from "../components/auth";
import { logout } from "../components/auth";

import AppContext from "../components/context";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
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

  // Your web app's Firebase configuration, get it from your firebase project settings page on the General tab.
  const firebaseConfig = {
    apiKey: "AIzaSyAOGzVUELTZkxhXzYQVg3vWfAw0R8puEoM",
    authDomain: "restaurantapp-2b109.firebaseapp.com",
    databaseURL: "https://restaurantapp-2b109-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-2b109",
    storageBucket: "restaurantapp-2b109.appspot.com",
    messagingSenderId: "1064373628249",
    appId: "1:1064373628249:web:993b657186def6b5bab048"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // TODO: initialize provider for google auth
  const provider = new GoogleAuthProvider();

  console.log("app initialized...");

  // get elements

  // const loggedInStatus = document.getElementById("loggedInStatus");
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
       
        setLoading(true)
        router.push('/')
        console.log(result);
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL;

        console.log(result.user)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        // localStorage.setItem('profilePic', profilePic)

        setShow(true)
        // set authed User in global context to update header/app state
        appContext.setUser(result.user);
        appContext.setShow(result.user);
   

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <br></br>
              <br></br>

              <Label><h1 style={{ marginLeft: '1.3em', color: 'black', fontFamily: 'Anton', lineHeight: '.5' }}>Sign In</h1></Label><br></br>
              <Label><h2 style={{ marginLeft: '1.5em', color: '#f5bcb1', fontFamily: 'Anton', lineHeight: '.7' }}>to start ordering away!</h2></Label>
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


                    <Button type='button' style={{ float: "right", width: 120, backgroundColor: "#063831" }}
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

                      {loading ? "Loading... " : "Submit"}
                      {/* <Examplepopup showModal={show}></Examplepopup> */}

                    </Button>
                    <br></br>
                    <br></br>



                    {/* <Popuptwo trigger={buttonPopup}>
                    
                    </Popuptwo>
                    */}
                  </FormGroup>

                </fieldset>
              </Form>
              <button type="button" className="login-with-google-btn" onClick={signInWithGoogle}>
                {loading ? "Loading... " : "Sign in with Google"}
              </button>

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
          .login-with-google-btn {
            transition: background-color .3s, box-shadow .3s;
              
            padding: 12px 16px 12px 42px;
            border: none;
            border-radius: 3px;
            box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
            color: #757575;
            font-size: 14px;
            font-weight: 500;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
            
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
            background-color: white;
            background-repeat: no-repeat;
            background-position: 12px 11px;
          }
          
        `}

      </style>
      {/* <h1>{localStorage.getItem("name")}</h1>
              <h1>{localStorage.getItem("email")}</h1>
              <h1>{localStorage.getItem("profilePic")}</h1> */}
    </Container>
  );
}

export default Login;