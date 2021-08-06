/*

Write a function, which takes a non-negative integer (seconds) as input and 
returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

if the maximum range cannot exceed 99 tha is it cannot go
beyound 4 days 3 hours
You can find some examples in the test fixtures.
*/

  

  
function formatDuration (sec) {
  // get hours
  let hours = (sec / (60 * 60))
  hours
  let mins = (hours % 1) * 60
  mins
  let secss = (mins % 1) * 60
  secss
  let seconds = Math.round((mins % 1) * 60)
  seconds

  hours = Math.floor(hours)
  hours
  mins = Math.floor(mins)
  
  let hoursText;
  let minsText;
  let secondsTex;
  let response = ''
  if(hours>=1) {
    hoursText = hours > 1 ? 'hours':'hour'
    response = `${hours} ${hoursText}`
  }

  if(mins >=1) {
    minsText = mins > 1 ? "minutes" : "minute"
   
    if(hours) {
       response += ` and ${mins} ${minsText}`
    } else {
       response += `${mins} ${minsText}`
    }
  }
  
  if (seconds>=1) {
    secondsTex = seconds > 1 ? "seconds" : "second"
    if(hours && mins) {
      response = `${hours} ${hoursText}, ${mins} ${minsText} and ${seconds} ${secondsTex}`
    }
    else if (hours || mins) {
      response += ` and ${seconds} ${secondsTex}`
    } 
    
    else {
      response += `${seconds} ${secondsTex}`
    }
  }
  return response;
  
}
console.log(formatDuration(3601))
console.log(formatDuration(62))
