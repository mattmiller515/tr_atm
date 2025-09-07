export const formatCentsAsDollarString = (cents: number): string => {
  const dollars = cents / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatDollarsStringToCents = (amountDollars: string): number => {
  // Remove anything that isn't a digit or a dot
  const formattedCentsString = amountDollars.replace(/[^0-9.]/g, "");

  const dollars = parseFloat(formattedCentsString);

  //convert to cents
  return Math.round(dollars * 100);
};
