// ---------------------------------- DOM -------------------------------------------------//
const target = document.querySelectorAll("[data-anime]");
const linksNav = document.querySelectorAll(".links-nav");
const title = document.querySelector(".initial-presentation > h2");
const containerInfoLanguage = document.querySelector(".containerinfoLanguage");
const btnInfo = document.querySelectorAll(".btn-info");
const btnClose = document.querySelectorAll(".btn-close");
const btnMenu = document.querySelector(".menu-hamburguer");
const btncloseMenuHamburguer = document.querySelector(".btn-close-menu");
const menu = document.querySelector(".menu");
const menus = document.querySelectorAll(".links-menu");
const txtEmail = document.querySelector(".txt-email");
const btnEmail = document.querySelector(".btn-email");
const containerSkill = document.querySelector(".container-skill");
const containerSkills = document.querySelector(".container-skills");
const containerSkillAll = document.querySelectorAll(".container-skill");
const toRemoveAfterCloneSkills = document.querySelector(
  ".toRemoveAfterCloneSkills"
);

//////////////////////////////// Data //////////////////////////////////

const dataSkills = [
  {
    name: "HTML5",
    src: "img/icons/html.png",
    info: "HTML significa HiperText Markup Language, traduzindo ao português: Linguagem de Marcação de Hipertexto. O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "CSS3",
    src: "img/icons/css.png",
    info: "CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo.",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Javascript",
    src: "img/icons/javascript.png",
    info: "JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Git",
    src: "img/icons/git.png",
    info: "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Node.js",
    src: "img/icons/node.png",
    info: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execuçãode códigos JavaScript fora de um navegador web.",
    progressBarClass: "progress-bar-infinite",
    progressBarText: "Loading",
  },
  {
    name: "Typescript",
    src: "img/icons/typescript.png",
    info: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Python",
    src: "img/icons/python.png",
    info: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.",
    progressBarClass: "progress-bar-infinite",
    progressBarText: "Loading",
  },
  {
    name: "React.js",
    src: "img/icons/react.png",
    info: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Vue.js",
    src: "img/icons/vue.png",
    info: "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
    progressBarClass: "progress-bar-infinite",
    progressBarText: "Loading",
  },
  {
    name: "Vue.js",
    src: "img/icons/vue.png",
    info: "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
    progressBarClass: "progress-bar-infinite",
    progressBarText: "Loading",
  },
];

const dataProjects = [
  {
    name: "Jogo da Memória",
    src: "img/imgs/jogo-da-memoria.png",
    info: "Um simples e divertido jogo da memória criado por mim, usando <span class='span'>HTML5</span>, <span class='span'>CSS3</span> e <span class='span'>Javascript</span> puro.",
    href: "",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Book Finder",
    src: "img/imgs/book-finder.png",
    info: "Um buscado de livros, feito com JavaScript puro, que consome uma API do <span class='span' ><a href='https://books.google.com.br/' target='_blank' >Google Books</a >.</span >",
    href: "https://abrahamlica.github.io/Projeto-book-finder/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  
];

//////////////////////////////// Scroll functions //////////////////////////////////

async function animateScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
}

animateScroll();

linksNav.forEach(function (item) {
  item.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const target = event.target;
  const id = target.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  });

  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

animateScroll();

//////////////////////////////// fill sections on load //////////////////////////////////

function fillSections() {
  //FILL SKILLS SECTION
  for (let i = 0; i < dataSkills.length; i++) {
    //origem da clonagem
    var newSkill = containerSkill.cloneNode(true);
    // destino da clonagem
    var add = containerSkills.append(newSkill);

    containerSkill.style.display = "flex";

    containerSkillAll.forEach((e) => {
      e.children[0].children[0].setAttribute("src", dataSkills[i].src); //muda a imagem da linguagem
      e.children[1].children[0].children[0].children[0].innerHTML =
        dataSkills[i].name; //mudar o nome
      e.children[1].children[0].children[2].children[0].children[0].innerHTML =
        dataSkills[i].name; //mudar o nome
      e.children[1].children[0].children[2].children[1].innerHTML =
        dataSkills[i].info; //mudar a info
      e.children[1].children[1].classList.add(dataSkills[i].progressBarClass); //mudar a classe da bar
      e.children[1].children[1].children[0].innerHTML =
        dataSkills[i].progressBarText; //mudar o texto da bar

      e.children[1].children[0].children[1].setAttribute(
        "data",
        dataSkills[i].name
      ); //insere atributo data
      e.children[1].children[0].children[2].setAttribute(
        "data",
        dataSkills[i].name
      ); //muda a imagem da linguagem
    });
  }

  //FILL PROJECTS SECTION
  for (let i = 0; i < dataSkills.length; i++) {
    //origem da clonagem
    var newSkill = containerSkill.cloneNode(true);
    // destino da clonagem
    var add = containerSkills.append(newSkill);

    containerSkill.style.display = "flex";

    containerSkillAll.forEach((e) => {
      e.children[0].children[0].setAttribute("src", dataSkills[i].src); //muda a imagem da linguagem
      e.children[1].children[0].children[0].children[0].innerHTML =
        dataSkills[i].name; //mudar o nome
      e.children[1].children[0].children[2].children[0].children[0].innerHTML =
        dataSkills[i].name; //mudar o nome
      e.children[1].children[0].children[2].children[1].innerHTML =
        dataSkills[i].info; //mudar a info
      e.children[1].children[1].classList.add(dataSkills[i].progressBarClass); //mudar a classe da bar
      e.children[1].children[1].children[0].innerHTML =
        dataSkills[i].progressBarText; //mudar o texto da bar

      e.children[1].children[0].children[1].setAttribute(
        "data",
        dataSkills[i].name
      ); //insere atributo data
      e.children[1].children[0].children[2].setAttribute(
        "data",
        dataSkills[i].name
      ); //muda a imagem da linguagem
    });
  }

  toRemoveAfterCloneSkills.children[0].style.display = "none";
}

//////////////////////////////// Others //////////////////////////////////

function showEmail() {
  if (txtEmail.classList.contains("slide") == true) {
    txtEmail.classList.remove("slide");
    txtEmail.classList.add("remove-slide");
    setTimeout(() => {
      txtEmail.style.display = "none";
    }, 500);
  } else if (
    txtEmail.classList.contains("slide") == true &&
    txtEmail.classList.contains("remove-slide") == true
  ) {
    txtEmail.classList.remove("slide");
    txtEmail.classList.remove("remove-slide");
  } else if (txtEmail.classList.contains("remove-slide") == true) {
    txtEmail.style.display = "block";
    txtEmail.classList.remove("remove-slide");
    txtEmail.classList.add("slide");
  } else {
    txtEmail.classList.add("slide");
  }
}
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-info")) {
    e.target.parentNode.children[2].style.display = "flex";
  }

  if (e.target.classList.contains("btn-fechar")) {
    e.target.parentNode.parentNode.style.display = "none";
  }
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-hamburguer")) {
    menu.style.opacity = 0;
    menu.style.display = "flex";
    setTimeout(function () {
      menu.style.opacity = 1;
    }, 100);
    document.body.style.overflow = "hidden";
  }

  if (e.target.classList.contains("btn-close-menu")) {
    document.body.style.overflow = "initial";
    setTimeout(function () {
      menu.style.opacity = 0;
      menu.style.display = "none";
    }, 200);
  }
});
window.addEventListener("load", fillSections);
window.addEventListener("scroll", animateScroll);
btnEmail.addEventListener("click", showEmail);
menus.forEach(function (i) {
  i.addEventListener("click", function () {
    menu.style.display = "none";
    document.body.style.overflow = "initial";
  });
});
////////////////////////////////////////////////////////////
