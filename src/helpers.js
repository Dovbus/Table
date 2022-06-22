import format from "date-fns/format";

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return format(date, "dd.MM.yyy");
}

export function getRegion(value) {
  if (value < 9) {
    return "Kyivska";
  } else if (value > 8 && value < 18) {
    return "Odeska";
  } else {
    return "Lvivska";
  }
}

export function getYear(value) {
  let year;
  if (
    (value < 3 && value >= 0) ||
    (value < 12 && value >= 9) ||
    (value < 21 && value >= 18)
  ) {
    year = 2017;
  } else if (
    (value < 6 && value >= 3) ||
    (value < 15 && value >= 12) ||
    (value < 24 && value >= 21)
  ) {
    year = 2018;
  } else {
    year = 2019;
  }
  return year;
}

export function getCoords(value) {
  if (
    value == 0 ||
    value == 3 ||
    value == 6 ||
    value == 9 ||
    value == 12 ||
    value == 15 ||
    value == 18 ||
    value == 21 ||
    value == 24
  ) {
    return "XX";
  } else if (
    value == 1 ||
    value == 4 ||
    value == 7 ||
    value == 10 ||
    value == 13 ||
    value == 16 ||
    value == 19 ||
    value == 22 ||
    value == 25
  ) {
    return "YY";
  } else {
    return "ZZ";
  }
}
