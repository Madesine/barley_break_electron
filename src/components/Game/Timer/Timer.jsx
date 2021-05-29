import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Timer.css';

export default function Timer() {
    const { isPaused, isStarted } = useSelector((state) => state.gameState);

    const [timer, setTimer] = useState(0);

    const timeRef = useRef(null);

    useEffect(() => {
        if (!isStarted) {
            clearInterval(timeRef.current)
            timeRef.current = null;
            setTimer(0);
        }

        if (!isPaused && isStarted) {
            timeRef.current = setInterval(() => setTimer((prev) => prev + 1), 1000);
        } else {
            clearInterval(timeRef.current)
        }

        return () => {
            clearInterval(timeRef.current)
        };
    }, [isPaused, isStarted])


    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
        <div className="timer">{formatTime()}</div>
    );
}
