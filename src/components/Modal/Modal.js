import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css"

const transitionTimings = {
    enter: 250,
    exit: 1000
}

const Modal = (props) => {
    return(
        // <CSSTransition classNames={{
        //     enter: "",
        //     enterActive: "",
        //     exit: "",
        //     exitActive: "",
        //     appear: "",
        //     appearActive: ""
        // }}>
        <CSSTransition in={props.show} timeout={transitionTimings} mountOnEnter unmountOnExit classNames="fade-slide">
            {
                <div className="Modal">
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
            }
        </CSSTransition>
    )
}

export default Modal

/**
 * - when <CSSTransition> component we do need to add or remove
 *   css classes manually
 * 
 * - sometimes we want to have a couple of predefined css classes for the
 *   different animation states and we want to make sure they get attached
 *   automatically depending on the state of the animation
 */
