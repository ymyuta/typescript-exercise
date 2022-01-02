function ask() {
  return prompt('When is your birthday?')
}

class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date = new Date(birthday)
  if (!isValid(date)) {
    return new InvalidDateFormatError('Enter a date in the from YYYY/MM/DD')
  }
  if (date.getTime() > Date.now()) {
    return  new DateIsInTheFutureError('Are you a timelord?')
  }
  return date
}

const isValid = (date: Date) => {
  return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
}

let result = parse(ask())
if (result instanceof InvalidDateFormatError) {
  console.error(result.message)
} else if (result instanceof DateIsInTheFutureError) {
  console.error(result.message)
} else {
  console.info('Date is', result.toISOString())
}