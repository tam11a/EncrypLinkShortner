const handleEvent = (event) => {
  let data = {};
  Array.from(new FormData(event.target).entries()).forEach((e) => {
    data[e[0]] = e[1];
  });
  return data;
};

const handleSubmit = (event) => {
  event.preventDefault();
  return handleEvent(event);
};

export default handleSubmit;
