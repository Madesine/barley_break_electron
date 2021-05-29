import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { pauseMode, setContent } from '../../../actions/game';

import './TopBar.css';

export default function TopBar() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { fieldSize, methodOptions } = useSelector((state) => state.settingsObject);
    const isPaused = useSelector((state) => state.gameState.isPaused)

    const onReload = useCallback(() => {
        dispatch(setContent({ fieldSize, methodOptions }))
    }, [dispatch, fieldSize, methodOptions])
    const onPauseMode = useCallback(() => dispatch(pauseMode(!isPaused)), [dispatch, isPaused])
    return (
        <div className="bar__container">
            <button onClick={() => history.replace("/")} className="back">
                <svg
                    width="20"
                    height="20"
                    x="0px" y="0px"
                    viewBox="0 0 219.151 219.151"
                >
                    <g>
                        <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576
                            C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575
		                    C0.002,169.995,49.157,219.151,109.576,219.151z 
                            M109.576,15c52.148,0,94.573,42.426,94.574,94.575
		                    c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577
                            C15.003,57.427,57.428,15,109.576,15z"
                        />
                        <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0
                            c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008
		                    c4.142-0.001,7.499-3.358,7.499-7.502
                            c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825
		                    c2.929-2.929,2.929-7.679,0-10.607
                            c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628
		                    c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"/>
                    </g></svg>
            </button>

            <button onClick={onPauseMode}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 511.448 511.448"
                >
                    <path d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z" /><path d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z" /><path d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z" />
                </svg>
            </button>

            <button onClick={onReload}>
                <svg
                    width="20"
                    height="20"
                    x="0px" y="0px"
                    viewBox="0 0 512 512"
                >
                    <g>
                        <g>
                            <path d="M446.709,166.059c-4.698-7.51-14.73-9.243-21.724-4.043l-48.677,36.519c-6.094,4.585-7.793,13.023-3.926,19.6
			                            C384.73,239.156,391,261.656,391,285.02C391,359.464,330.443,422,256,422s-135-62.536-135-136.98
			                            c0-69.375,52.588-126.68,120-134.165v44.165c0,12.434,14.266,19.357,23.994,11.997l120-90c8.006-5.989,7.994-18.014,0-23.994
			                            l-120-90C255.231-4.37,241,2.626,241,15.02v45.498C123.9,68.267,31,166.001,31,285.02C31,409.093,131.928,512,256,512
			                            s225-102.907,225-226.98C481,243.038,469.135,201.905,446.709,166.059z"/>
                        </g>
                    </g>
                </svg>
            </button>
        </div >
    );
}