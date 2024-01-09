export function convertDateFormat(dateString) {
  const dateObject = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dateObject.toLocaleString("en-US", options);
}
