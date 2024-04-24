const seededGenerator = (date, hour) => {
  const parsedDate = new Date(date); // Parse the date string into a Date object
  const m = 9;
  const d = parsedDate.getDate(); // Use getDate() method on the parsed date object
  const result = ((d + hour) % m) / 10;

  return result;
};

const fetchAPI = (date) => {
  let result = [];

  result.push("--- Select a Time ---");

  for (let hour = 15; hour <= 23; hour++) {
    if (seededGenerator(date, hour) < 0.5) result.push(hour + ":00");
    if (seededGenerator(date, hour + 7) < 0.5) result.push(hour + ":30");
  }

  return result;
};

const submitAPI = (formData) => true;

const fakeAPI = {
  fetchAPI: fetchAPI,
  submitAPI: submitAPI,
};

export default fakeAPI;
