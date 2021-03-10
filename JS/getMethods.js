const options = document.querySelector('#options');
const Users = {
  'Get all Users in the AMTool': 'api/users/all',
  'Get the user details with the current id': 'api/users/2',
  'Get all Active Projects under the Given User': 'api/users/ActiveProject/1',
  'Get all the Delayed Tasks under given User': 'api/users/delayedTask/1',
  'Get List of all Invited Users': 'api/invite/all',
};

const Projects = {
  'Get All Projects ': 'api/projects/getAll',
  'Get All User Projects': 'api/projects/getUserProjects/2',
  'Get Project Details': 'api/projects/getDetail/2',
  'get All Archive Projects for a user': 'api/projects/userArchives/6',
  'get All Archive Projects': 'api/projects/archiveProjects',
};

const ProjectTasks = {
  'Get All Project Tasks': 'api/projectTasks/all',
  'Get List of All Project Specific task sorted According to due date':
    'api/projectTasks/sortByDueDate/2/3',
  'Get List of All Project Specific task in given Date Range':
    'api/projectTasks/byDateRange/2/3',
};
const Designations = {
  'Get All Designation Tasks': 'api/userDesignations/all',
};
const ProductionTeams = {
  'Get All Production Teams': 'api/productionTeams/all',
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
  'Project API',
];
const emp = [
  Users,
  Designations,
  Roles,
  ProductionTeams,
  projectTypes,
  Stages,
  Tasks,
  Projects,
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
