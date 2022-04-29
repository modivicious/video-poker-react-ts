const getPoint = (point: number = 0): string => {
  switch (point) {
    case 10:
      return "="; // 10 in card chars font (1-stroke symbol)
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    case 14:
      return "A";
    default:
      return point.toString();
  }
};

export default getPoint;
