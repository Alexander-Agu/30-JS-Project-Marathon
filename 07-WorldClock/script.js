//constant variables
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const counter = document.getElementById("counter");
const date = document.getElementById("date");
const time = document.getElementById("time");

//number format suffixes
const ranges = [
  { divider: 1e18, suffix: "E" },
  { divider: 1e15, suffix: "P" },
  { divider: 1e12, suffix: "T" },
  { divider: 1e9, suffix: "B" },
  { divider: 1e6, suffix: "M" },
];

//months
const monthsArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

//functions to show the current date and time
//time formatting into string
function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours >= 12 ? "pm" : "am"}`;
}

//date formatting into string
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return ` ${day} ${monthsArray[month]} ${year}`;
}

function showToday() {
  const now = new Date(Date.now());
  date.innerText = formatDate(now);
  time.innerText = formatTime(now);
}

//function to format numbers and add suffixes if number is too large
function formatNumber(number) {
  let numberFormatter = new Intl.NumberFormat("en-ZA");
  for (let i = 0; i < ranges.length; i++) {
    if (number >= ranges[i].divider) {
      return (
        numberFormatter
          .format(number / ranges[i].divider)
          .toString()
          .replace(".", ",") + ranges[i].suffix
      );
    }
  }
  return numberFormatter.format(number).toString();
}

//updating the world clock every second
function updateClock() {
  years.innerText = formatNumber(new Date(Date.now()).getFullYear());
  months.innerText = formatNumber(new Date(Date.now()).getFullYear() * 12);
  days.innerText = formatNumber(new Date(Date.now()).getFullYear() * 365);
  hours.innerText = formatNumber(
    new Date(Date.now()).getFullYear() * (24 * 365)
  );
  minutes.innerText = formatNumber(
    new Date(Date.now()).getFullYear() * (60 * 24 * 365)
  );
  seconds.innerText = formatNumber(
    new Date(Date.now()).getFullYear() * (60 * 60 * 24 * 365)
  );
  counter.innerText = new Date(Date.now()).getSeconds();
}

showToday();
setInterval(() => updateClock(), 1000);
setInterval(() => showToday(), 1000);
