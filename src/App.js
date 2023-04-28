import React, { useState } from "react";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

import "./App.css"

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const openModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  return(
    <div className="App">
      <h1>React Animations</h1>

      {showModal ? <Modal show={showModal} closed={closeModalHandler} /> : null}
      {showModal ? <Backdrop show={showModal}  /> : null}

      <button className="Button" onClick={openModalHandler}>Open Modal</button>
      <h3>Animating Lists</h3>

      <List />
    </div>
  )
}

export default App

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
