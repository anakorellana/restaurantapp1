

import React from 'react'


function Popuptwo(props) {
  console.log('hello')
  return (props.trigger) ? (
    <div className="popup">
         <div className="popup-inner">
          <h2>
            You have succesfully logged in!
          </h2>
            <button className='close-btn'>close</button>
            {props.children}
        </div>
    </div>
  ) : "";
  
  }

 <style jsx>
        {`
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: 100vh;
    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-inner {

    position: relative;
    padding: 32px;
    width: 100%;
    background-color: green;

}

.popup-inner .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
}


`}
      </style> 


export default Popuptwo;