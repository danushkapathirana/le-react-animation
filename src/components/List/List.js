import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./List.css"

const List = () => {
    const [items, setItems] = useState([1, 2, 3])

    const addItemHandler = () => {
        setItems((prevState) => {
            return prevState.concat(prevState.length + 1)
        })
    }

    const removeItemHandler = (selIndex) => {
        setItems((prevState) => {
            return prevState.filter((item, index) => index !== selIndex)
        })
    }
    
    return(
        <div>
            <button className="Button" onClick={addItemHandler}>Add Item</button>
            <p>Click Item to Remove</p>
            <TransitionGroup component="ul" className="List">
                {
                    items.map((item, index) => (
                        <CSSTransition key={index} classNames="fade" timeout={300}>
                            <li className="ListItem" onClick={() => removeItemHandler(index)}>{item}</li>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
}

export default List

/**
 * - <TransitionGroup> used in places where you output lists
 * - so, where you have a dynamic list
 */
