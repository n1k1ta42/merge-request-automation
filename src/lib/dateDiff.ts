export function dateDifferenceReadable(date1: string, date2?: string): string {
  const msInSecond = 1000
  const msInMinute = msInSecond * 60
  const msInHour = msInMinute * 60
  const msInDay = msInHour * 24
  const msInMonth = msInDay * 30
  const msInYear = msInDay * 365

  const d1 = new Date(date1)
  const d2 = date2 ? new Date(date2) : new Date() // Используем текущую дату, если date2 не предоставлена
  let delta = Math.abs(d2.getTime() - d1.getTime())

  const years = Math.floor(delta / msInYear)
  delta -= years * msInYear

  const months = Math.floor(delta / msInMonth)
  delta -= months * msInMonth

  const days = Math.floor(delta / msInDay)
  delta -= days * msInDay

  const hours = Math.floor(delta / msInHour)
  delta -= hours * msInHour

  const minutes = Math.floor(delta / msInMinute)
  delta -= minutes * msInMinute

  const seconds = Math.floor(delta / msInSecond)

  let result = ''
  if (years > 0) result += `${years} ${years === 1 ? 'год' : 'лет'} `
  if (months > 0)
    result += `${months} ${months === 1 ? 'месяц' : months > 1 && months < 5 ? 'месяца' : 'месяцев'} `
  if (days > 0)
    result += `${days} ${days === 1 ? 'день' : days > 1 && days < 5 ? 'дня' : 'дней'} `
  if (hours > 0)
    result += `${hours} ${hours === 1 ? 'час' : hours > 1 && hours < 5 ? 'часа' : 'часов'} `
  if (minutes > 0)
    result += `${minutes} ${minutes === 1 ? 'минута' : minutes > 1 && minutes < 5 ? 'минуты' : 'минут'} `
  if (seconds > 0)
    result += `${seconds} ${seconds === 1 ? 'секунда' : seconds > 1 && seconds < 5 ? 'секунды' : 'секунд'} `

  return result.trim()
}

// Пример использования:
console.log(dateDifferenceReadable('2024-03-01')) // Разница между 1 марта 2024 и текущей датой
