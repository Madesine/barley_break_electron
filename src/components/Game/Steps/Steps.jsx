import React from 'react';
import { useSelector } from 'react-redux';

import './Steps.css';

export default function Steps() {
    const steps = useSelector((state) => state.gameState.step);
    
    return (
        <div className="steps__container">
            Steps: {steps}
        </div>
    );
}
