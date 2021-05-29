const anime = require("animejs");

const isNodeHasChildren = (datum) => {
  return Boolean(datum.children);
};

const customPathFunc = (linkDatum) => {
  const { source, target } = linkDatum;
  return `
        M${source.y + 150 + source.depth * 80},${source.x + 20}
        L${target.y + target.depth * 80},${target.x + 20}
    `;
};

const isFileImage = (type) => {
  return type === "image/jpeg" || type === "image/png" || type === "image/bmp";
};

const draw = (targets, time) => {
  return anime({
    targets,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "cubicBezier(.5, .05, .1, .3)",
    duration: time,
  });
};

const setArrayFromSize = (size, option) => {
  const isWinnable = (array) => {
    let countInversions = 0;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[i]) countInversions++;
      }
    }
    return countInversions % 2 === 0;
  };

  const arrayForRender = (array, n) => {
    const arrayForRender = [];

    let k = 0;
    for (let i = 0; i < n; i++) {
      arrayForRender.push(array.slice(k, k + n));
      k += n;
    }

    return arrayForRender;
  };

  if (option === "Numeric") {
    const rows = Number(size.split("x")[0]);
    const itemDataArray = Array.from(
      { length: Math.pow(rows, 2) - 1 },
      (_, i) => i + 1
    );

    do {
      itemDataArray.shuffle();
    } while (isWinnable(itemDataArray));

    itemDataArray.push(0);

    return arrayForRender(itemDataArray, rows);
  }
  console.log("HERE NULL");
  return null;
};

const findTargetCoordinates = (arr, target) => {
  let x = null;
  let y = null;

  arr.forEach((row, index) => {
    if (row.includes(target)) {
      x = index;
      y = row.indexOf(target);
    }
  });

  return { x, y };
};

// METHODS
// eslint-disable-next-line
Array.prototype.shuffle = function () {
  return this.sort((a, b) => 0.5 - Math.random());
};

const cutImg = (imgPath) => {};

export {
  isNodeHasChildren,
  customPathFunc,
  isFileImage,
  draw,
  setArrayFromSize,
  findTargetCoordinates,
};
