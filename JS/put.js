const putForm = document.getElementById('putForm');
putForm.addEventListener('submit', handlePutFormSubmit);

async function handlePutFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  const url = form.action;

  try {
    const formData = new FormData(form);
    if (formData.ProfilePicturePath) {
      formData.ProfilePicturePath = formData.ProfilePicturePath['name'];
    }

    const responseData = await putFormDataAsJson({ url, formData });
    document.write(JSON.stringify(responseData));
  } catch (error) {
    console.error(error);
  }
}

async function putFormDataAsJson({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  console.log(plainFormData);
  if (plainFormData.ProfilePicturePath) {
    plainFormData.ProfilePicturePath = plainFormData.ProfilePicturePath.name;
  }

  const formDataJsonString = JSON.stringify(plainFormData);

  const fetchOptions = {
    method: 'PUT',

    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    body: formDataJsonString,
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}
