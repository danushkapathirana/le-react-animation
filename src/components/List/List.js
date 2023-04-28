import React, { useState } from "react";

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
            <ul className="List">
                {
                    items.map((item, index) => (
                        <li className="ListItem" onClick={() => removeItemHandler(index)} key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
