const options = document.querySelector('#options');
const Users = {
  'Get all Users in the AMTool': 'api/Users/all',
  'Get the user details with the current id': 'api/Users/2',
  'Get all Active Projects under the Given User': 'api/Users/ActiveProject/1',
  'Get all the Delayed Tasks under given User': 'api/Users/delayedTask/1',
  'Inactive a user from AMTool': 'api/Users/',
};

const ProjectTasks = {
  'Get All Project Tasks': 'api/projectTasks/all',
  // 'Get project task with id': 'api/projectTasks',
};
const Designations = {
  'Get All Designation Tasks': 'api/userDesignations/all',
  // 'Get Designation by id': 'api/userDesignation/2',
};
const ProductionTeams = {
  'Get All Production Teams': 'api/productionTeams/all',
  // 'Get Production Team by id': 'api/productionTeams/2',
};
const Tasks = {
  'Get All Tasks': 'api/tasks/all',
  //'Get task by id': 'api/tasks/2',
};
const projectTypes = {
  'Get All projectTypes': 'api/types/all',
  //'Get projectTypes by id': 'api/types/2',
};
const Stages = {
  'Get All Stages': 'api/stages/all',
  //'Get Stage with id': 'api/stages/2',
};
const Roles = {
  'Get All Roles': 'api/userRoles/all',
  //'Get Role By Id': 'api/userRoles/2',
};
const title = [
  'Users GET API',
  'Designation API',
  'UserRole API',

  'Production Team API',
  'Project Type API',
  'Project Stages API',
  'Task API',
];
const emp = [
  Users,
  Designations,
  Roles,
  ProductionTeams,
  projectTypes,
  Stages,
  Tasks,
];
const generateDOMList = (emp) => {
  for (const key in emp) {
    const noteEl = document.createElement('LI');
    const textEl = document.createElement('a');
    textEl.setAttribute('target', '_blank');
    textEl.style.textDecoration = 'none';
    textEl.textContent = key;
    textEl.setAttribute('href', 'http://localhost:3000/' + emp[key]);
    noteEl.appendChild(textEl);
    options.appendChild(noteEl);
  }
};
const generateDOMTitle = (title) => {
  let count = 0;
  for (const t of title) {
    const para = document.createElement('p');
    para.innerHTML = t;
    options.appendChild(para);
    generateDOMList(emp[count]);
    count++;
  }
};
generateDOMTitle(title);
