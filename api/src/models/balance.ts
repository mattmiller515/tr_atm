type Balance = {
  userId: string;
  balanceCents: number;
};

const balance1 = { userId: "1234", balanceCents: 1000 };
const balance2 = { userId: "5678", balanceCents: 5321 };
const balance3 = { userId: "9101", balanceCents: 0 };
const balance4 = { userId: "1121", balanceCents: 999999 };
const balance5 = { userId: "3141", balanceCents: 1 };

export const balanceDB: Balance[] = [
  balance1,
  balance2,
  balance3,
  balance4,
  balance5,
];
