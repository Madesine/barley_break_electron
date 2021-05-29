import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import BbRow from "./BbRow/BbRow";
import TopBar from "./TopBar/TopBar";
import Timer from "./Timer/Timer";
import Steps from "./Steps/Steps";

import { pauseMode, setContent } from "../../actions/game";

import "./Game.css";

export default function Game() {
	const dispatch = useDispatch();
	const { content, isPaused, isEnd } = useSelector((state) => state.gameState);
	const { fieldSize, methodOptions } = useSelector(
		(state) => state.settingsObject
	);
	const map = useCallback(() => content.map, [content]);

	const unPause = useCallback(
		() => dispatch(pauseMode(!isPaused)),
		[dispatch, isPaused]
	);

	const onWin = useCallback(
		() => dispatch(setContent({ fieldSize, methodOptions })),
		[dispatch, fieldSize, methodOptions]
	);

	useEffect(() => {
		if (isEnd)
			setTimeout(
				() => dispatch(setContent({ fieldSize, methodOptions })),
				5500
			);
	}, [dispatch, isEnd, fieldSize, methodOptions]);

	let key = 100;
	return (
		<div className="game">
			{isPaused && (
				<div onClick={unPause} className="pause">
					<p>PAUSE MODE</p>
				</div>
			)}
			{isEnd && (
				<div className="win" onClick={onWin}>
					<p>Congratulations !!!</p>
				</div>
			)}
			<TopBar />
			<Timer />
			<Grid container spacing={1} className="grid__container">
				{map().map((row) => {
					return <BbRow key={key++} row={row} />;
				})}
			</Grid>
			<Steps />
		</div>
	);
}
