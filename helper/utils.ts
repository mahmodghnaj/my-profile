export const getYearsSinceDate = (date: Date): number => {
  const currentDate = new Date();
  const diffInMs = currentDate.getTime() - date.getTime();
  const diffInYears = diffInMs / (1000 * 3600 * 24 * 365.25);
  return Math.floor(diffInYears);
};
