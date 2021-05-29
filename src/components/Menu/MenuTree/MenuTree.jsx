import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import anime from 'animejs';

import Tree from 'react-d3-tree';
import { Alert } from '@material-ui/lab';
import DnD from './DnD/DnD';

import "./MenuTree.css";

import { customPathFunc } from "../../../helpers";
import { Menu } from "../../../helpers/treeDatum";
import { setFieldSize, setMethodOption } from '../../../actions/menu';
import { setContent } from '../../../actions/game';

export default function MenuTree() {
    const dispatch = useDispatch();
    const isImage = useSelector((state) => state.dropZone.isImage);
    const { fieldSize, methodOptions } = useSelector((state) => state.settingsObject);

    const history = useHistory();

    const onStart = useCallback(() => {
        const treeDisappearing = anime.timeline({
            easing: "cubicBezier(.5, .05, .1, .3)",
            duration: 5000,
        })
        treeDisappearing.add({
            targets: "#treeWrapper",
            translateX: 150,
        });
        treeDisappearing.add({
            targets: "#treeWrapper",
            opacity: [1, 0],
            width: [anime.get(document.getElementById("treeWrapper"), "width"), 0],
        }, 1000);

        dispatch(setContent({ fieldSize, methodOptions }))

        setTimeout(() => history.replace("/game"), 5000);

    }, [history, fieldSize, methodOptions, dispatch])
    const onFieldSize = useCallback((value) => dispatch(setFieldSize(value)), [dispatch])
    const onMethodOptions = useCallback((value) => dispatch(setMethodOption(value)), [dispatch])

    const setTreeNodes = useCallback(({ nodeDatum, toggleNode }) => {
        const x = `${nodeDatum.__rd3t.depth * 80}`;
        const xText = `${Number(x) + 20}`;

        const isNeedToToggle = () => {
            switch (nodeDatum.name) {
                case "Start": return onStart;
                case "3x3": return () => onFieldSize(nodeDatum.name);
                case "4x4": return () => onFieldSize(nodeDatum.name);
                case "Numeric": return () => onMethodOptions(nodeDatum.name);
                default: return toggleNode;
            }
        };

        const isChecked = () => {
            if (nodeDatum.name === fieldSize) return true
            if (nodeDatum.name === methodOptions) return true
            return false
        }

        switch (nodeDatum.name) {
            case "Drag'n'Drop":
                return <DnD x={x} nodeDatum={nodeDatum} isNeedToToggle={isNeedToToggle} />;
            default:
                break;
        }

        return (
            <g onClick={isNeedToToggle()}>
                <rect width="150" height="40" stroke="none" x={x} fill={isChecked() ? "#5a5a5e" : "#2D2D2F"} />
                <text fill="white" stroke="none" x={xText} y="25">
                    {nodeDatum.name}
                </text>
            </g>
        );
    }, [fieldSize, methodOptions, onFieldSize, onMethodOptions, onStart])



    return (
        <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
            {isImage &&
                <Alert severity="error" style={{ position: 'fixed', right: 20, top: 20, opacity: 0.8 }}>
                    Please add a file with supported type.
                </Alert>
            }
            <Tree
                data={Menu}
                renderCustomNodeElement={setTreeNodes}
                pathFunc={customPathFunc}
                rootNodeClassName="menu-node" />
        </div>
    );
}