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

// Самооценка проекта

console.log(`Score: 150

  Верстка валидная +10
  
  Вёрстка семантическая +20
  В коде страницы присутствуют семантические теги HTML5: article, footer, header, main, nav, section, используются заголовки h1-h4. Заголовок h1 может быть только один.
  
  Для оформления СV используются css-стили +10
  
  Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
  
  Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
  
  Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным +10
  
  На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
  
  Контакты для связи и перечень навыков оформлены в виде списка ul > li +10
  
  CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
  
  CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10
  
  CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
  
  CV выполнено на английском языке +10
  
  Выполнены требования к Pull Request: +10
  
  Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10`);