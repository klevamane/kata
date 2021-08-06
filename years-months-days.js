/*

Your task in order to complete this Kata is to write a function which 
formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. 
If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, 
days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. 
In general, a positive integer and one of the valid units of time, separated by a space. 
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, 
which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. 
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. 
So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence,
1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds,
 but 1 minute and 1 second instead. Formally, 
 the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

const formatDuration = (seconds) => {
  let year = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;

  while (seconds >= 31536000) {
    seconds -= 31536000;
    year += 1;
  }

  while (seconds >= 86400) {
    seconds -= 86400;
    days += 1;
  }

  while (seconds >= 3600) {
    seconds -= 3600;
    hours += 1;
  }

  while (seconds >= 60) {
    minutes += 1;
    seconds -= 60;
  }

  let yearText = "year",
    daysText = "day",
    hoursText = "hour";
  let minutesText = "minute",
    secondsText = "second";
  let units = [];
  let values = [];

  yearText, units, (values = setUnitValues(year, yearText, units, values));
  daysText, units, (values = setUnitValues(days, daysText, units, values));
  hoursText, units, (values = setUnitValues(hours, hoursText, units, values));
  minutesText,
    units,
    (values = setUnitValues(minutes, minutesText, units, values));
  secondsText,
    units,
    (values = setUnitValues(seconds, secondsText, units, values));

  let response = "";
  const responseLength = units.length;

  for (i = 0; i < responseLength - 1; i++) {
    if (i > 0) response += ", ";
    response += `${values[i]} ${units[i]}`;
  }

  if (responseLength === 1) {
    response = `${values[0]} ${units[0]}`;
  }
  if (responseLength > 1) {
    response += ` and ${values.pop()} ${units[units.length - 1]}`;
  }

  // it is expected that the length of units = length of values array
  return response;
};

function setUnitValues(value, unitText, unitsList, valuesList) {
  if (value >= 1) {
    unitText += value > 1 ? "s" : "";
    unitsList.push(unitText);
    valuesList.push(value);
  }
  return unitText, unitsList, valuesList;
}

console.log(formatDuration(3662))