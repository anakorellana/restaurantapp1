import React, {useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AppContext from './context';

function Examplepopup({showModal,setShow,parent}) {

const {user} = useContext(AppContext);
console.log(user)
const body = user.registered ? "registered": 'logged in'
  return (
    <>
  

      <Modal show={showModal} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have succesfully {body}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Examplepopup;