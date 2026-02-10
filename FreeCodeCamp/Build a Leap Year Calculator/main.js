const isLeapYear = (n) => {
  if((n % 400 === 0 && n % 4 === 0) || (n % 100 != 0)) {
    return `${n} is a leap year.`
  } else {
    return `${n} is not a leap year.`
  }
}

let year = 2026;
let result = isLeapYear(year);
console.log(result);