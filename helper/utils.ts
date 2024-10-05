export const getYearsSinceDate = (
  startDate: Date,
  endDate: Date = new Date()
): number => {
  const diffInMs = endDate.getTime() - startDate.getTime();
  const diffInYears = diffInMs / (1000 * 3600 * 24 * 365.25);
  return Math.floor(diffInYears);
};
