function createDropDown(url, id, name) {
  const createDropdownOptions = (dropdown, options) => {
    const all = document.createElement('option');
    all.value = 'empty';
    all.text = '';

    dropdown.appendChild(all);
    for (const option of options) {
      const optionElement = document.createElement('option');
      optionElement.value = option.ID || option.id;
      optionElement.text = option.Description || option.description;
      dropdown.appendChild(optionElement);
    }
  };
  const createDropdownMenu = (optionsList, name) => {
    const dropdown = document.createElement('select');
    dropdown.name = name;
    dropdown.classList.add('dropdown');
    createDropdownOptions(dropdown, optionsList);
    const label = document.createElement('label');
    label.innerHTML = 'Select ' + name + ': ';
    document
      .querySelector('.' + id)
      .appendChild(label)
      .appendChild(dropdown);
  };
  //   const listElement = document.querySelector('ol');
  //   const container = document.querySelector('.main');

  fetch(url)
    .then((res) => res.json())
    .then((val) => {
      createDropdownMenu(val, name);
    })
    .catch((err) => console.log('Error' + err));
}
