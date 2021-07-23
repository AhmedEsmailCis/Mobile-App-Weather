export const calcTime = (unixTimestamp) => {
  const a = new Date(unixTimestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[a.getMonth()];
  const date = a.getDate();
  const time = `${date} ${month}`;
  return time;
};
export const getWeatherIconUrl = (icon) => {
  const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return url;
};
export const calcHour = (unixTimestamp) => {
  const a = new Date(unixTimestamp * 1000);
  let hour = a.getHours();
  const unit = hour >= 12 ? "pm" : "Am";
  if (hour > 12) hour -= 12;
  if (hour == 0) hour = 12;
  const time = `${hour} ${unit}`;
  return time;
};
export const calcTime2 = (unixTimestamp) => {
  const a = new Date(unixTimestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = `${date} ${month} ${year} ${hour < 10 ? "0" : ""}${hour}:${
    min < 10 ? "0" : ""
  }${min}:${sec < 10 ? "0" : ""}${sec}`;
  return time;
};
export const calcSunRiseSet = (unixTimestamp) => {
  const a = new Date(unixTimestamp * 1000);
  let hour = a.getHours();
  const unit = hour >= 12 ? "pm" : "Am";
  if (hour > 12) {
    hour -= 12;
  }
  if (hour === 0) {
    hour = 12;
  }
  const min = a.getMinutes();
  const time = `${(hour < 10 ? "0" : "") + hour}:${min < 10 ? "0" : ""}${min} ${unit}`;
  return time;
};
