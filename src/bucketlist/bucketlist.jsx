import React, { useState } from "react";
import './bucketlist.scss';

const BucketList = React.memo(({ onInteract }) => {


    const [items, setItems] = useState([
        { text: 'Hacer karaoke en un bar de Tokyo', completed: false },
        { text: 'Alimentar a un león', completed: false },
        { text: 'Tirar monedas en la Fontana Di Trevi', completed: false }
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleAddItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, { text: inputValue, completed: false }]);
            setInputValue("");
        }
    };

    const handleDeleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const handleToggleItem = (index) => {
        const newItems = items.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setItems(newItems);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    const handleClick = () => {
        onInteract('bucketlist');
    }

    return (
        <div className="bucket-list" onClick={handleClick} >
            <h1>Bucket List</h1>
            <div className="input-container">
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder=""
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleAddItem}>+</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={item.completed ? "completed" : ""}>
                        <span onClick={() => handleToggleItem(index)}>{item.text}</span>
                        <button onClick={() => handleDeleteItem(index)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default BucketList;
