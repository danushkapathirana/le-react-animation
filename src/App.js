import React, { useState } from "react";
import { Transition } from "react-transition-group";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

import "./App.css"

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [showBlock, setShowBlock] = useState(false)

  const openModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  return(
    <div className="App">
      <h1>React Animations</h1>

      <button className="Button" onClick={() => {setShowBlock((prevState) => !prevState)}}>Toggle</button>
      <br />

      <Transition in={showBlock} timeout={1000} mountOnEnter unmountOnExit>
        {
          showBlock => (
            <div style={{
              width: "100px",
              height: "100px",
              backgroundColor: "red",
              margin: "auto",
              opacity: showBlock === "exiting" ? 0 : 1,
              transition: "opacity 1s ease-out"
            }}></div>
          )
        }
      </Transition>

      {showModal ? <Modal show={showModal} closed={closeModalHandler} /> : null}
      {showModal ? <Backdrop show={showModal}  /> : null}

      <button className="Button" onClick={openModalHandler}>Open Modal</button>
      <h3>Animating Lists</h3>

      <List />
    </div>
  )
}

export default App

// libraries
// npm i react-transition-group

/**
 * - limitations of css animations with React -
 * 
 * - in the developer tools modal and backdrop are always visible
 * - because its visibility control over the css classes, it's not affected to the DOM tree
 * 
 * - therefore, we have to use conditional rendering
 * - when use conditional rendering close animation does not work
 * - because App.js does not wait to re-render this JSX until finish the animation
 */
