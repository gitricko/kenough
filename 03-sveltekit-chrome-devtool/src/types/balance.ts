type BalanceAmount = {
    amount: number;
    currency: string;
};

export type Balance = {
    month: string;
    balance: BalanceAmount;
};