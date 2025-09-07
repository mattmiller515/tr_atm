import { balanceDB } from "../models/balance";
import { AppError } from "../tools/error";

class BalanceService {
  getUserBalance = ({ userId }: { userId: string }) => {
    const balanceCentsRecord = balanceDB.find(
      (balance) => balance.userId === userId
    );

    return balanceCentsRecord?.balanceCents;
  };

  deposit = ({
    userId,
    amountCents,
  }: {
    userId: string;
    amountCents: number;
  }) => {
    if (amountCents <= 0) {
      throw new AppError(400, "Deposit amount must be greater than 0.");
    }
    let balanceCentsRecord = balanceDB.find(
      (balance) => balance.userId === userId
    );

    if (!balanceCentsRecord) {
      throw new AppError(404, "User balance not found.");
    }

    balanceCentsRecord.balanceCents += amountCents;

    return balanceCentsRecord.balanceCents;
  };

  withdraw = ({
    userId,
    amountCents,
  }: {
    userId: string;
    amountCents: number;
  }) => {
    if (amountCents <= 0) {
      throw new AppError(400, "Withdraw amount must be greater than 0.");
    }

    let balanceCentsRecord = balanceDB.find(
      (balance) => balance.userId === userId
    );

    if (!balanceCentsRecord) {
      throw new AppError(404, "User balance not found.");
    }

    //users balance can not go below 0
    if (balanceCentsRecord.balanceCents - amountCents < 0) {
      throw new AppError(400, "Insufficient funds.");
    }

    balanceCentsRecord.balanceCents -= amountCents;

    return balanceCentsRecord.balanceCents;
  };
}

export const balanceService = new BalanceService();
