import { combineReducers } from "redux";
import { dropZone } from "./dnd";
import { settingsObject } from "./menu";
import { gameState } from "./game";
import { screen } from "./screen";

export default combineReducers({ dropZone, settingsObject, gameState, screen });
