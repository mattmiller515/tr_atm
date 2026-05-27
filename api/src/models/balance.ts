type Balance = {
  userId: string;
  balanceCents: number;
};

export const startingBalances: readonly Balance[] = [
  { userId: "1234", balanceCents: 1000 },
  { userId: "5678", balanceCents: 5321 },
  { userId: "9101", balanceCents: 0 },
  { userId: "1121", balanceCents: 999999 },
  { userId: "3141", balanceCents: 1 },
];

export const balanceDB: Balance[] = startingBalances.map((balance) => ({
  ...balance,
}));
