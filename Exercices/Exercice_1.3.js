/*
Exercise  1.3: Temperature Converter

Create a function convertTemp that takes:

    temp (temperature)
    unit (either "C" for Celsius or "F" for Fahrenheit)

Converts Celsius to Fahrenheit or Fahrenheit to Celsius.
• F = C × 9/5 + 32
• C = (F - 32) × 5/9
*/

const converTemp = (temp, unit) => {
  if (unit === "F") {
    const tempCels = ((temp - 32) * 5) / 9;
    return console.log(`${temp} °F = ${tempCels.toFixed(1)} °C`);
  } else {
    const tempFahr = (temp * 9) / 5 + 32;
    return console.log(`${temp} °C = ${tempFahr.toFixed(1)} °F`);
  }
};
converTemp(45, "F"); // Output '45 °F = 7.2 °C'
converTemp(2, "C"); // Output '2 °C = 35.6 °F'