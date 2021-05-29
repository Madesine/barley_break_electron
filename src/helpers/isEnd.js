const isEnd = (arr) => {
  const winMap = [
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 0],
  ];
  return JSON.stringify(winMap) === JSON.stringify(arr);
};

export { isEnd };
