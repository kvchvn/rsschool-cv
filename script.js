let aboutMeLink = document.getElementById('about_me_link');
let educationLink = document.getElementById('education_link');
let skillsLink = document.getElementById('skills_link');
let codeExampleLink = document.getElementById('code_example_link');
let projectsLink = document.getElementById('projects_link');
let contactsLink = document.getElementById('contacts_link');

let aboutMe = document.getElementById('about_me');
let education = document.getElementById('education');
let skillsSoft = document.getElementById('skills_soft');
let skillsHard = document.getElementById('skills_hard');
let codeExample = document.getElementById('code_example');
let projects = document.getElementById('projects');
let contacts = document.getElementById('contacts');


aboutMeLink.addEventListener('click', () => {
  colorChanger(aboutMe);
});

educationLink.addEventListener('click', () => {
  colorChanger(education);
});

skillsLink.addEventListener('click', () => {
  colorChanger(skillsSoft);
  colorChanger(skillsHard)
});

codeExampleLink.addEventListener('click', () => {
  colorChanger(codeExample);
});

projectsLink.addEventListener('click', () => {
  colorChanger(projects);
});

contactsLink.addEventListener('click', () => {
  colorChanger(contacts);
});

function colorChanger(section) {
  section.querySelector('h3').style.backgroundColor = 'rgb(227, 117, 57)';
  setTimeout(() => section.querySelector('h3').style.backgroundColor = '', 2000);
}

