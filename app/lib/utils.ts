export const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
}

export const monthsWord = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const daysInMonths = {
  'January': 31,
  'February': 28,
  'March': 31,
  'April': 30,
  'May': 31,
  'June': 30,
  'July': 31,
  'August': 31,
  'September': 30,
  'October': 31,
  'November': 30,
  'December': 31,
}

export function getFormattedDate(dateObj: any) {
  const year = dateObj.getFullYear() // 2019
  const date = dateObj.getDate()

  const monthIndex = dateObj.getMonth()
  const monthName = monthsWord[monthIndex] // January

  const dayIndex = dateObj.getDay()
  const dayName = days[dayIndex] // Thu

  return `${dayName}, ${date} ${monthName} ${year}` // Thu, 23 January 2019
}

export function getDaysInThisMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}
