const getDiffDays = (date: Date) => {
  const now = Date.now();
  const diffTime = Math.abs(now - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

const checkIsToday = (date: Date) => {
  const now = new Date();
  const sameYear = now.getFullYear() === date.getFullYear();
  const sameMonth = now.getMonth() === date.getMonth();
  const sameDay = now.getDate() === date.getDate();

  return sameYear && sameMonth && sameDay;
};

const checkIsYesterday = (date: Date) => {
  const now = new Date();
  const sameYear = now.getFullYear() === date.getFullYear();
  const sameMonth = now.getMonth() === date.getMonth();
  const oneDayBefore = now.getDate() === date.getDate() + 1;

  return sameYear && sameMonth && oneDayBefore;
};

const formatDate = (date: Date): string => {
  const isToday = checkIsToday(date);
  const isYesterday = checkIsYesterday(date);

  if (isToday) return `Hoje às ${date.getHours()}:${date.getMinutes()}`;
  if (isYesterday) return `Ontem às ${date.getHours()}:${date.getMinutes()}`;

  return `Há ${getDiffDays(date)} dias`;
};

export { formatDate };
