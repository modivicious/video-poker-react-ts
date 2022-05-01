const getCountOfDuplicates = (cards) => {
  const count = cards.reduce((acc, item) => {
    acc[item.point] = acc[item.point] ? acc[item.point] + 1 : 1;
    return acc;
  }, {});
  return count;
};

export default getCountOfDuplicates;
