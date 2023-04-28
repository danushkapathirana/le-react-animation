import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css"

const Modal = (props) => {
    return(
        <Transition in={props.show} timeout={1000} mountOnEnter unmountOnExit>
            {
                show => {
                    const cssClasses = ["Modal", show === "entering" ? "OpenModal" : show === "exiting" ? "CloseModal" : null]
                    return(
                        <div className={cssClasses.join(" ")}>
                            <h1>A Modal</h1>
                            <button className="Button" onClick={props.closed}>Dismiss</button>
                        </div>
                    )
                }
            }
        </Transition>
    )
}

export default Modal
