import React, { useState } from 'react';
import './BoxCard.css';

export const BoxCard = ({ result, children }) => {
    const [show, setShow] = useState(true);
    return (
        <div className={show ? "": "hidden"}>
            <div className={`box ${result}`}>
                {children}
                <button className='trigger' onClick={() => setShow(!show)}>Hide</button>
            </div>
        </div>
    )
}

