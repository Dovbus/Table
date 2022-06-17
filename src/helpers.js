import format from "date-fns/format";

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return format(date, "dd.MM.yyy");
}
