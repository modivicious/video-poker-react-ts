export interface ITableData {
  readonly combination: string;
  readonly coeffs: Array<number>;
  readonly id: number;
}

export const tableData: Array<ITableData> = [
  {
    combination: "Royal Flush",
    coeffs: [250, 500, 750, 1000, 4000],
    id: 8,
  },
  {
    combination: "Straight Flush",
    coeffs: [50, 100, 150, 200, 250],
    id: 7,
  },
  {
    combination: "Four of a kind",
    coeffs: [25, 50, 75, 100, 125],
    id: 6,
  },
  {
    combination: "Full house",
    coeffs: [9, 18, 27, 36, 45],
    id: 5,
  },
  {
    combination: "Flush",
    coeffs: [6, 12, 18, 24, 30],
    id: 4,
  },
  {
    combination: "Straight",
    coeffs: [4, 8, 12, 16, 20],
    id: 3,
  },
  {
    combination: "Three of a kind",
    coeffs: [3, 6, 9, 12, 15],
    id: 2,
  },
  {
    combination: "Two pairs",
    coeffs: [2, 4, 6, 8, 10],
    id: 1,
  },
  {
    combination: "Jacks or better",
    coeffs: [1, 2, 3, 4, 5],
    id: 0,
  },
];
