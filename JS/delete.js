async function del(url) {
  const fetchOptions = {
    method: 'DELETE',

    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

document.getElementById('delUserRole').addEventListener('click', () => {
  del('http://localhost:3000/api/userRoles/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
document.getElementById('delTypes').addEventListener('click', () => {
  del('http://localhost:3000/api/types/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
document.getElementById('delProductionTeams').addEventListener('click', () => {
  del('http://localhost:3000/api/productionTeams/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
document.getElementById('delTasks').addEventListener('click', () => {
  del('http://localhost:3000/api/tasks/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
document.getElementById('delDesignations').addEventListener('click', () => {
  del('http://localhost:3000/api/Designations/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
document.getElementById('delUserStages').addEventListener('click', () => {
  del('http://localhost:3000/api/stages/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
document.getElementById('delUser').addEventListener('click', () => {
  del('http://localhost:3000/api/users/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
document.getElementById('delProject').addEventListener('click', () => {
  del('http://localhost:3000/api/userRoles/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
document.getElementById('delProjectTasks').addEventListener('click', () => {
  del('http://localhost:3000/api/projectTasks/remove/1').then((res) => {
    document.write(JSON.stringify(res));
  });
});
