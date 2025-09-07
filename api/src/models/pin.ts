type PIN = {
  userId: string;
  pin: string;
};

const pin1 = { userId: "1234", pin: "1111" };
const pin2 = { userId: "5678", pin: "2222" };
const pin3 = { userId: "9101", pin: "3333" };
const pin4 = { userId: "1121", pin: "4444" };
const pin5 = { userId: "3141", pin: "5555" };

export const pinDB: PIN[] = [pin1, pin2, pin3, pin4, pin5];
