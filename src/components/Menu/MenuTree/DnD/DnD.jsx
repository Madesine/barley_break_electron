import React, { useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';

import { isFileImage } from '../../../../helpers';
import { noValidFileUpload } from '../../../../actions/dnd';
import { setMethodOption } from '../../../../actions/menu';

const DnD = ({ x, nodeDatum, isNeedToToggle }) => {
    const dispatch = useDispatch();
    const isImage = useSelector((state) => state.dropZone.isImage);

    useEffect(() => {
        setTimeout(() => {
            dispatch(noValidFileUpload(false))
        }, 5000);
    }, [isImage, dispatch])

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: NativeTypes.FILE,
        drop(item) {
            if (isFileImage(item.files[0].type)) {
                dispatch(setMethodOption(item.files[0].path))
                console.log(window.ipcRenderer)
                // Async send to ipcMain image path
                window.ipcRenderer.send("get-image", item.files[0].path);
                window.ipcRenderer.once("getImgPieces", (e, arr) => console.log(arr));
            }
            else {
                dispatch(noValidFileUpload(true))
            };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver({ shallow: true }),
            canDrop: monitor.canDrop(),

        })
    }), [])

    let showDropZone = false;

    if (isOver && canDrop) {
        showDropZone = true;
    }

    return (
        <g
            onClick={isNeedToToggle()}
            ref={drop}
        >
            <rect
                width={showDropZone ? "170" : "140"}
                height={showDropZone ? "180" : "160"}
                stroke="none"
                x={x}
                fill="#2D2D2F"
                rx="15"
                ry="15"
                fillOpacity="0.5"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="-53 1 511 511.99906"
                width={showDropZone ? "130" : "100"}
                height={showDropZone ? "150" : "120"}
                opacity={showDropZone ? 0.2 : 1}
                x={`${nodeDatum.__rd3t.depth * 80 + 20}`}
                y="20"
            >
                <g id="surface1">
                    <path
                        d="M 276.410156 3.957031 C 274.0625 1.484375 270.84375 0 267.507812 0 L 67.777344 0 C 30.921875 0 0.5 30.300781 0.5 67.152344 L 0.5 444.84375 C 0.5 481.699219 30.921875 512 67.777344 512 L 338.863281 512 C 375.71875 512 406.140625 481.699219 406.140625 444.84375 L 406.140625 144.941406 C 406.140625 141.726562 404.65625 138.636719 402.554688 136.285156 Z M 279.996094 43.65625 L 364.464844 132.328125 L 309.554688 132.328125 C 293.230469 132.328125 279.996094 119.21875 279.996094 102.894531 Z M 338.863281 487.265625 L 67.777344 487.265625 C 44.652344 487.265625 25.234375 468.097656 25.234375 444.84375 L 25.234375 67.152344 C 25.234375 44.027344 44.527344 24.734375 67.777344 24.734375 L 255.261719 24.734375 L 255.261719 102.894531 C 255.261719 132.945312 279.503906 157.0625 309.554688 157.0625 L 381.40625 157.0625 L 381.40625 444.84375 C 381.40625 468.097656 362.113281 487.265625 338.863281 487.265625 Z M 338.863281 487.265625 "
                        style={{
                            stroke: "none",
                            fillRule: "nonzero",
                            fill: "#EFECDD",
                            fillOpacity: 1,
                        }}
                    />
                    <path
                        d="M 305.101562 401.933594 L 101.539062 401.933594 C 94.738281 401.933594 89.171875 407.496094 89.171875 414.300781 C 89.171875 421.101562 94.738281 426.667969 101.539062 426.667969 L 305.226562 426.667969 C 312.027344 426.667969 317.59375 421.101562 317.59375 414.300781 C 317.59375 407.496094 312.027344 401.933594 305.101562 401.933594 Z M 305.101562 401.933594 "
                        style={{
                            stroke: "none",
                            fillRule: "nonzero",
                            fill: "#EFECDD",
                            fillOpacity: 1,
                        }}
                    />
                    <path
                        d="M 140 268.863281 L 190.953125 214.074219 L 190.953125 349.125 C 190.953125 355.925781 196.519531 361.492188 203.320312 361.492188 C 210.125 361.492188 215.6875 355.925781 215.6875 349.125 L 215.6875 214.074219 L 266.640625 268.863281 C 269.113281 271.457031 272.332031 272.820312 275.667969 272.820312 C 278.636719 272.820312 281.730469 271.707031 284.078125 269.480469 C 289.027344 264.78125 289.398438 256.988281 284.699219 252.042969 L 212.226562 174.253906 C 209.875 171.78125 206.660156 170.296875 203.199219 170.296875 C 199.734375 170.296875 196.519531 171.78125 194.171875 174.253906 L 121.699219 252.042969 C 117 256.988281 117.371094 264.902344 122.316406 269.480469 C 127.511719 274.179688 135.300781 273.808594 140 268.863281 Z M 140 268.863281 "
                        style={{
                            stroke: "none",
                            fillRule: "nonzero",
                            fill: "#EFECDD",
                            fillOpacity: 1,
                        }}
                    />
                </g>
            </svg>
            {showDropZone &&
                <text
                    width="140"
                    height="40" x={Number(x) + 10}
                    y="100"
                    fill="white"
                    stroke="none"
                    fontSize="24">
                    Drop Me Here
                </text>
            }
            <rect
                width={showDropZone ? "170" : "140"}
                height={showDropZone ? "180" : "160"}
                stroke="none"
                x={x}
                fill="#2D2D2F"
                rx="15"
                ry="15"
                fillOpacity="0"
            />

            {/* Tip */}

            <path d="M -190 250 C -250 250 150 -50 -200 100 C 300 150 50 0 200 50" x={x}></path>
            <path d="M 200 50 L 180 30 M 200 50 L 170 60 L 180 30 Z "></path>

            <text fill="white" stroke="none" x={Number(x) - 340} y={100}>Drop file here and upload it.</text>
            <text fill="white" stroke="none" x={Number(x) - 340} y={130} fontSize="1.2em">Supported formats: .jpeg, .png, .bmp</text>

        </g >
    )
}

export default DnD
