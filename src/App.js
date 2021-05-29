import { useCallback, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MenuTree from "./components/Menu/MenuTree/MenuTree";
import Game from "./components/Game/Game";

import { ARR_KEY } from "./types";
import { pressKey } from "./actions/game";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.gameState.isPaused);
  const settings = useSelector((state) => state.settingsObject);

  // KEYUP EVENT
  const onKeyUp = useCallback(
    (e) => {
      e.preventDefault();
      const idKey = e.keyCode;
      if (ARR_KEY[idKey]) dispatch(pressKey(idKey, settings));
    },
    [dispatch, settings]
  );
  // ------------

  useEffect(() => {
    if (isPaused) {
      document.removeEventListener("keyup", onKeyUp);
    } else {
      document.addEventListener("keyup", onKeyUp);
    }
  }, [onKeyUp, isPaused]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={MenuTree} />
          <Route exact path={"/game"} component={Game} />
        </Switch>
      </Router>
    </DndProvider>
  );
}

export default App;
