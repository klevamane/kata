let str =
  "1A very powerful person3 in the government might be coming today to see us publicly";

// the flag "g" is used to replace all occurences
str = str.replace(/powerful|publicly/g, (match) => {
  return match.toUpperCase();
});

console.log(str);

str = str.replace(/\d.*\d/, "Converted");

str;
let str2 = "Java323Scr995ip4894545t";
str2 = str2.replace(/\d{3}/g, "-").replace(/5/, "");
str2;
str3 = "Aboy and 6Argons";

str3 = str3.replace(/\dA/i, "sudden** ");
str3;

let str4 = ["welcome", "people", "together"];
str4 = str4.join(", ");
console.log(str4);

const elements = ["Fire", "Air", "Water"];
console.log(elements.join());

function formatDuration(seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];

  if (seconds === 0) return "now";

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds / time[key]);
      res.push((val += val > 1 ? " " + key + "s" : " " + key));
      seconds = seconds % time[key];
    }
  }
  res;

  return res.length > 1
    ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : res[0];
}

console.log(formatDuration(36273));
