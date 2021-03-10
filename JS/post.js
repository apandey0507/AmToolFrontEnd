const Form = document.getElementById('userForm');
Form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  const url = form.action;

  try {
    const formData = new FormData(form);

    if (formData.ProfilePicturePath) {
      formData.ProfilePicturePath = formData.ProfilePicturePath['name'];
    }

    const responseData = await postFormDataAsJson({ url, formData });
    document.write(JSON.stringify(responseData));
    if (formData.cnfPwd) {
      window.location =
        'http://127.0.0.1:5500/HTML/userForm.html?email=' + formData.Email;
    }
    alert('Your form has been submitted');
    location.reload();
  } catch (error) {
    console.error(error);
  }
}

async function postFormDataAsJson({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  console.log(plainFormData);
  if (plainFormData.ProfilePicturePath) {
    plainFormData.ProfilePicturePath = plainFormData.ProfilePicturePath.name;
    console.log(plainFormData);
  }

  const formDataJsonString = JSON.stringify(plainFormData);

  const fetchOptions = {
    method: 'POST',

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
