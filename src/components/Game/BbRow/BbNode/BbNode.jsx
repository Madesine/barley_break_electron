import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clickNode } from '../../../../actions/game';
import { findTargetCoordinates } from '../../../../helpers';

import './Bbnode.css'

export default function BbNode({ value, size }) {
    const dispatch = useDispatch();
    const map = useSelector((state) => state.gameState.content.map)

    const onNodeClick = (e) => {
        const targetXY = findTargetCoordinates(map, Number(e.target.innerHTML));
        console.log("TARGET: ", targetXY)
        dispatch(clickNode(targetXY));
    };

    return (
        <div
            onClick={onNodeClick}
            className={value ? "grid__node" : "grid__node null"}
            style={{ height: `${(100 / size) - 2}%` }}>
            {value ? value : null}
        </div>
    );
}
