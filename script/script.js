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
const containerSkill = document.querySelector('.container-skill')
const containerSkills = document.querySelector('.container-skills')
const toRemoveAfterClone = document.querySelector('.toRemoveAfterClone')

//////////////////////////////// Data //////////////////////////////////

const dataSkills = [
  {
    name: "HTML5",
    src: "img/icons/html.png",
    info: "HTML significa HiperText Markup Language, traduzindo ao português: Linguagem de Marcação de Hipertexto. O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.",
    progressBarClass: 'progress-bar-100',
    progressBarText: '100%'
  },
  {
    name: "CSS3",
    src: "img/icons/css.png",
    info: "CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo.",
    progressBarClass: 'progress-bar-100',
    progressBarText: '100%'
  },
  {
    name: "Javascript",
    src: "img/icons/javascript.png",
    info: "JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.",
    progressBarClass: 'progress-bar-100',
    progressBarText: '100%'
  },
  {
    name: "Git",
    src: "img/icons/git.png",
    info: "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
    progressBarClass: 'progress-bar-100',
    progressBarText: '100%'
  },
  {
    name: "Node.js",
    src: "img/icons/node.png",
    info: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execuçãode códigos JavaScript fora de um navegador web.",
    progressBarClass: 'progress-bar-infinite',
    progressBarText: 'Loading'
  },
  {
    name: "Typescript",
    src: "img/icons/typescript.png",
    info: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    progressBarClass: 'progress-bar-100',
    progressBarText: '100%'
  },
  {
    name: "Python",
    src: "img/icons/python.png",
    info: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.",
    progressBarClass: 'progress-bar-infinite',
    progressBarText: 'Loading'
  },
  {
    name: "React.js",
    src: "img/icons/react.png",
    info: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.",
    progressBarClass: 'progress-bar-100',
    progressBarText: '100%'
  },
  {
    name: "Vue.js",
    src: "img/icons/vue.png",
    info: "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
    progressBarClass: 'progress-bar-infinite',
    progressBarText: 'Loading'
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

  let containerSkillAll = document.querySelectorAll('.container-skill')
  
  for (let i = 0; i < dataSkills.length; i++) {
    //origem da clonagem
    var newSkill = containerSkill.cloneNode(true);
    // destino da clonagem
    var add = containerSkills.append(newSkill);

    containerSkill.style.display = "flex"
    

    containerSkillAll.forEach((e)=> {
      e.children[0].children[0].setAttribute('src', dataSkills[i].src)
      e.children[1].children[0].children[0].children[0].innerHTML = dataSkills[i].name
      e.children[1].children[0].children[2].children[0].children[0].innerHTML = dataSkills[i].name
      e.children[1].children[0].children[2].children[1].innerHTML = dataSkills[i].info

      e.children[1].children[1].classList.add = dataSkills[i].progressBarClass  //mudar a classe da bar
      e.children[1].children[1].children[0].innerHTML = dataSkills[i].progressBarText  //mudar o texto da bar
    })
  }

  toRemoveAfterClone.children[0].style.display = 'none'
 
}

//////////////////////////////// Others //////////////////////////////////

btnInfo.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let target = e.target.getAttribute("data-language");

    if (target == "html") {
      containerHtml.style.opacity = 0;
      containerHtml.style.display = "flex";
      setTimeout(function () {
        containerHtml.style.opacity = 1;
      }, 100);
    }

    if (target == "css") {
      containerCss.style.opacity = 0;
      containerCss.style.display = "flex";
      setTimeout(function () {
        containerCss.style.opacity = 1;
      }, 100);
    }

    if (target == "javascript") {
      containerJavascript.style.opacity = 0;
      containerJavascript.style.display = "flex";
      setTimeout(function () {
        containerJavascript.style.opacity = 1;
      }, 100);
    }

    if (target == "git") {
      containerGit.style.opacity = 0;
      containerGit.style.display = "flex";
      setTimeout(function () {
        containerGit.style.opacity = 1;
      }, 100);
    }

    if (target == "node") {
      containerNode.style.opacity = 0;
      containerNode.style.display = "flex";
      setTimeout(function () {
        containerNode.style.opacity = 1;
      }, 100);
    }

    if (target == "typescript") {
      containerTypescript.style.opacity = 0;
      containerTypescript.style.display = "flex";
      setTimeout(function () {
        containerTypescript.style.opacity = 1;
      }, 100);
    }

    if (target == "python") {
      containerPython.style.opacity = 0;
      containerPython.style.display = "flex";
      setTimeout(function () {
        containerPython.style.opacity = 1;
      }, 100);
    }

    if (target == "react") {
      containerReact.style.opacity = 0;
      containerReact.style.display = "flex";
      setTimeout(function () {
        containerReact.style.opacity = 1;
      }, 100);
    }

    if (target == "vue") {
      containerVue.style.opacity = 0;
      containerVue.style.display = "flex";
      setTimeout(function () {
        containerVue.style.opacity = 1;
      }, 100);
    }

    if (target == "bootstrap") {
      containerBootstrap.style.opacity = 0;
      containerBootstrap.style.display = "flex";
      setTimeout(function () {
        containerBootstrap.style.opacity = 1;
      }, 100);
    }
  });
});

btnClose.forEach(function (i) {
  i.addEventListener("click", function (e) {
    let target = e.target.getAttribute("data-btn");

    if (target == "html") {
      containerHtml.style.opacity = 0;
      setTimeout(function () {
        containerHtml.style.display = "none";
      }, 400);
    }

    if (target == "css") {
      containerCss.style.opacity = 0;
      setTimeout(function () {
        containerCss.style.display = "none";
      }, 400);
    }

    if (target == "javascript") {
      containerJavascript.style.opacity = 0;
      setTimeout(function () {
        containerJavascript.style.display = "none";
      }, 400);
    }

    if (target == "git") {
      containerGit.style.opacity = 0;
      setTimeout(function () {
        containerGit.style.display = "none";
      }, 400);
    }

    if (target == "node") {
      containerNode.style.opacity = 0;
      setTimeout(function () {
        containerNode.style.display = "none";
      }, 400);
    }

    if (target == "typescript") {
      containerTypescript.style.opacity = 0;
      setTimeout(function () {
        containerTypescript.style.display = "none";
      }, 400);
    }

    if (target == "python") {
      containerPython.style.opacity = 0;
      setTimeout(function () {
        containerPython.style.display = "none";
      }, 400);
    }

    if (target == "react") {
      containerReact.style.opacity = 0;
      setTimeout(function () {
        containerReact.style.display = "none";
      }, 400);
    }

    if (target == "vue") {
      containerVue.style.opacity = 0;
      setTimeout(function () {
        containerVue.style.display = "none";
      }, 400);
    }

    if (target == "bootstrap") {
      containerBootstrap.style.opacity = 0;
      setTimeout(function () {
        containerBootstrap.style.display = "none";
      }, 400);
    }
  });
});

menus.forEach(function (i) {
  i.addEventListener("click", function () {
    menu.style.display = "none";
    document.body.style.overflow = "initial";
  });
});

function openMenuHamburguer() {
  menu.style.opacity = 0;
  menu.style.display = "flex";
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    menu.style.opacity = 1;
  }, 100);
}

function closeMenuHamburguer() {
  menu.style.opacity = 0;
  setTimeout(function () {
    menu.style.display = "none";
  }, 400);
  document.body.style.overflow = "initial";
}

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

////////////////////////////////////////////////////////////

window.addEventListener('load', fillSections)
window.addEventListener("scroll", animateScroll);
btnMenu.addEventListener("click", openMenuHamburguer);
btncloseMenuHamburguer.addEventListener("click", closeMenuHamburguer);
btnEmail.addEventListener("click", showEmail);
