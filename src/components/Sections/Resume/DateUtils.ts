export const calculatePeriod = (startDate: string, endDate: string = 'Present'): string => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  let totalMonths = years * 12 + months;
  if (end.getDate() < start.getDate()) {
    totalMonths--;
  }

  const finalYears = Math.floor(totalMonths / 12);
  const finalMonths = totalMonths % 12;

  if (finalYears === 0) {
    return `${finalMonths} month${finalMonths !== 1 ? 's' : ''}`;
  } else if (finalMonths === 0) {
    return `${finalYears} year${finalYears !== 1 ? 's' : ''}`;
  }
  return `${finalYears} year${finalYears !== 1 ? 's' : ''} ${finalMonths} month${finalMonths !== 1 ? 's' : ''}`;
};

export const extractDates = (dateRange: string): [string, string] => {
  const [startDate, endDate] = dateRange.split(' - ');
  return [startDate, endDate || 'Present'];
};

export const extractDatesFromString = (dateString: string): [string, string] => {
  const [startMonth, startYear, endMonth, endYear] =
    dateString
      .match(
        /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})(?:\s*-\s*(?:(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})|Present))?/,
      )
      ?.slice(1) ?? [];

  const monthToNumber: {[key: string]: string} = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12',
  };

  const startDate = `${startYear}-${monthToNumber[startMonth]}-01`;
  const endDate = endMonth
    ? `${endYear}-${monthToNumber[endMonth]}-${new Date(
        Number(endYear),
        monthToNumber[endMonth] as unknown as number,
        0,
      ).getDate()}`
    : 'Present';

  return [startDate, endDate];
};

export const createTimelineSubtitle = (date: string) => () => {
  const [startDate, endDate] = extractDatesFromString(date);
  return calculatePeriod(startDate, endDate);
};
