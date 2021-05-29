const nextStepMap = (arrayMap, action) => {
  let xNull = arrayMap.xNull,
    yNull = arrayMap.yNull,
    map = arrayMap.map;

  if (action.payload === 37 && yNull !== 3) {
    // UP
    console.log("UP");
    map[yNull][xNull] = map[++yNull][xNull];
  } else if (action.payload === 39 && yNull !== 0) {
    // DOWN
    console.log("DOWN");
    map[yNull][xNull] = map[--yNull][xNull];
  } else if (action.payload === 38 && xNull !== 3) {
    // LEFT
    console.log("LEFT");
    map[yNull][xNull] = map[yNull][++xNull];
  } else if (action.payload === 40 && xNull !== 0) {
    // RIGHT
    console.log("RIGHT");
    map[yNull][xNull] = map[yNull][--xNull];
  }
  map[yNull][xNull] = 0;

  return { map, xNull, yNull };
};

const nextStepMapClick = (arrayMap, action) => {
  let xNull = arrayMap.xNull,
    yNull = arrayMap.yNull,
    map = arrayMap.map;

  let { x, y } = action.payload;

  if (yNull !== 0 && x === xNull && ++y === yNull) {
    // UP
    map[xNull][yNull] = map[xNull][--yNull];
    --y;
  } else if (yNull !== 3 && x === xNull && --y === yNull) {
    // DOWN
    map[xNull][yNull] = map[xNull][++yNull];
    ++y;
  } else if (xNull !== 0 && ++x === xNull && y === yNull) {
    // LEFT
    map[xNull][yNull] = map[--xNull][yNull];
    --x;
  } else if (xNull !== 3 && --x === xNull && y === yNull) {
    // RIGHT
    map[xNull][yNull] = map[++xNull][yNull];
    ++x;
  }
  map[xNull][yNull] = 0;

  return { map, xNull, yNull };
};

export { nextStepMap, nextStepMapClick };
