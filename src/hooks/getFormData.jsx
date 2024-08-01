export const getFormData = (form) => {
  // console.log("form: ", form);
  const formData = new FormData(form);
  // console.log("formData: ", formData);
  const data = Object.fromEntries(formData);
  // console.log("data: ", data);
  // const serverUrl = import.meta.env.VITE_SERVER_URL;
  const values = [...formData.values()];
  // console.log("values: ", values);
  const isEmpty = values.includes("");
  // console.log("isEmpty: ", isEmpty);

  return { isEmpty, data };
};
