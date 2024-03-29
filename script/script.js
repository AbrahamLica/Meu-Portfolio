// ---------------------------------- DOM -------------------------------------------------//
//DOM General
const target = document.querySelectorAll("[data-anime]");

//DOM Header
const linksNav = document.querySelectorAll(".links-nav");
const menu = document.querySelector(".menu");
const menus = document.querySelectorAll(".links-menu");
const btnMenu = document.querySelector(".menu-hamburguer");
const btncloseMenuHamburguer = document.querySelector(".btn-close-menu");

//DOM Home
const txtEmail = document.querySelector(".txt-email");
const btnEmail = document.querySelector(".btn-email");
const title = document.querySelector(".initial-presentation > h2");

//DOM Skills
const containerInfoLanguage = document.querySelector(".containerinfoLanguage");
const containerSkill = document.querySelector(".container-skill");
const containerSkills = document.querySelector(".container-skills");
const containerSkillAll = document.querySelectorAll(".container-skill");
const toRemoveAfterCloneSkills = document.querySelector(
  ".toRemoveAfterCloneSkills"
);
const btnInfo = document.querySelectorAll(".btn-info");
const btnClose = document.querySelectorAll(".btn-close");

//DOM projects
const toRemoveAfterCloneProject = document.querySelector(
  ".toRemoveAfterCloneProjects"
);
const project = document.querySelector(".project");
const projectsAll = document.querySelectorAll(".project");
const containerProjects = document.querySelector(".container-projects");

//////////////////////////////// Data //////////////////////////////////

const dataSkills = [
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
    name: "Typescript",
    src: "img/icons/typescript.png",
    info: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
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
    name: "Node.js",
    src: "img/icons/node.png",
    info: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execuçãode códigos JavaScript fora de um navegador web.",
    progressBarClass: "progress-bar-infinite",
    progressBarText: "Loading",
  },
  {
    name: "Python",
    src: "img/icons/python.png",
    info: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.",
    progressBarClass: "progress-bar-infinite",
    progressBarText: "Loading",
  },
  {
    name: "HTML5",
    src: "img/icons/html.png",
    info: "HTML significa HiperText Markup Language, traduzindo ao português: Linguagem de Marcação de Hipertexto. O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
];

const dataProjects = [
  {
    name: "Formulário Simples",
    src: "img/imgs/formulario.png",
    info: "Um <span class='span'>Formulário</span>, simples, porém com funcionalidades essenciais.",
    href: "https://abrahamlica.github.io/Projeto-formulario-simples/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Meu primeiro jogo",
    src: "img/imgs/myFirstGame.png",
    info: "Um <span class='span'>jogo</span>simples que criei utilizando Canvas.",
    href: "https://abrahamlica.github.io/myFirstGame/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Jogo da Memória",
    src: "img/imgs/jogo-da-memoria.png",
    info: "Um simples e divertido jogo da memória criado por mim, usando <span class='span'>HTML5</span>, <span class='span'>CSS3</span> e <span class='span'>Javascript</span> puro.",
    href: "https://abrahamlica.github.io/Jogo-da-Memoria/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Book Finder",
    src: "img/imgs/book-finder.png",
    info: "Um buscador de livros, feito com JavaScript puro, que consome uma API do <span class='span' ><a href='https://books.google.com.br/' target='_blank' >Google Books</a >.</span >",
    href: "https://abrahamlica.github.io/Projeto-book-finder/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Nerd Shop",
    src: "img/imgs/nerdshop.png",
    info: "Um <span class='span'>Ecommerce</span> totalmente front-end, com as opções de compra, adicionar ao carrinho, entre outros.",
    href: "https://nerd-shop.vercel.app/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Sistema Cadastro de pessoas",
    src: "img/imgs/crud.png",
    info: "Um <span class='span'>CRUD</span> simples porém eficaz, criado usando React.js",
    href: "https://sistema-cadastro-de-pessoas.vercel.app/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Smart Wallet",
    src: "img/imgs/smartwallet.png",
    info: "Um <span class='span'>Sistema de Finanças</span> com várias funcionalidades, visando o controle das suas finanças mensais e anuais.",
    href: "https://smart-wallet-eight.vercel.app/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Movies Library",
    src: "img/imgs/movieslibrary.png",
    info: "<span class='span'>Base da dados de filmes</span> que utiliza a API do TMDB.",
    href: "https://movies-database-tan.vercel.app/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Marvel Database",
    src: "img/imgs/marveldatabase.png",
    info: "<span class='span'>Base da dados da Marvel</span> que utiliza a API do Marvel.",
    href: "https://movies-database-tan.vercel.app/",
    progressBarClass: "progress-bar-100",
    progressBarText: "100%",
  },
  {
    name: "Meme Generator",
    src: "img/imgs/meme-generator.png",
    info: "Um <span class='span'>Gerador de memes</span>, feito na sua maior parte com JavaScript puro. Utilizei também a lib Konva.js(Lib de Canvas), para possibilitar a edição e manipulação das imagens. A página também consome uma API do <span class='span' ><a href='https://imgflip.com/api' target='_blank' >imgflip</a >.</span > para buscar as imagens dos memes.",
    href: "https://abrahamlica.github.io/memeGenerator/",
    progressBarClass: "progress-bar-infinite",
    progressBarText: "60%",
  },
];

//////////////////////////////// fill sections on load //////////////////////////////////

function fillSections() {
  //FILL SKILLS SECTION
  for (let i = 0; i < dataSkills.length; i++) {
    //origem da clonagem
    var newSkill = containerSkill.cloneNode(true);
    // destino da clonagem
    var add = containerSkills.append(newSkill);

    containerSkill.style.display = "flex";
    containerSkills.children[0].style.display = "flex";

    containerSkills.children[0].children[0].children[0].setAttribute(
      "src",
      dataSkills[i].src
    ); //muda a imagem da linguagem
    containerSkills.children[0].children[1].children[0].children[0].children[0].innerHTML =
      dataSkills[i].name; //mudar o nome
    containerSkills.children[0].children[1].children[0].children[2].children[0].children[0].innerHTML =
      dataSkills[i].name; //mudar o nome
    containerSkills.children[0].children[1].children[0].children[2].children[1].innerHTML =
      dataSkills[i].info; //mudar a info
    containerSkills.children[0].children[1].children[1].classList.add(
      dataSkills[i].progressBarClass
    ); //mudar a classe da bar
    containerSkills.children[0].children[1].children[1].classList.remove(
      "progress-bar-infinite"
    );
    containerSkills.children[0].children[1].children[1].children[0].innerHTML =
      dataSkills[i].progressBarText; //mudar o texto da bar
    containerSkills.children[0].children[1].children[0].children[1].setAttribute(
      "data",
      dataSkills[i].name
    ); //insere atributo data
    containerSkills.children[0].children[1].children[0].children[2].setAttribute(
      "data",
      dataSkills[i].name
    ); //muda a imagem da linguagem

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
  for (let i = 0; i < dataProjects.length; i++) {
    //origem da clonagem
    var newProject = project.cloneNode(true);
    // destino da clonagem
    var add = containerProjects.append(newProject);

    project.style.display = "flex";

    containerProjects.children[0].style.display = "flex";

    containerProjects.children[0].children[0].setAttribute(
      "href",
      dataProjects[i].href
    );
    containerProjects.children[0].children[0].children[0].setAttribute(
      "href",
      dataProjects[i].href
    );

    containerProjects.children[0].children[0].children[0].setAttribute(
      "src",
      dataProjects[i].src
    ); //muda src

    containerProjects.children[0].children[1].classList.add(
      dataProjects[i].progressBarClass
    ); //muda class progressbar

    containerProjects.children[0].children[1].children[0].innerHTML =
      dataProjects[i].progressBarText; //muda porcentagem progressbar
    containerProjects.children[0].children[2].setAttribute(
      "href",
      dataProjects[i].href
    ); //muda href
    containerProjects.children[0].children[2].innerHTML = dataProjects[i].name; //muda nome do projeto
    containerProjects.children[0].children[3].children[0].innerHTML =
      dataProjects[i].info; //muda descrição

    projectsAll.forEach((e) => {
      e.children[0].setAttribute("href", dataProjects[i].href); //muda href
      e.children[0].children[0].setAttribute("src", dataProjects[i].src); //muda src
      e.children[1].classList.add(dataProjects[i].progressBarClass); //muda class progressbar
      e.children[1].children[0].innerHTML = dataProjects[i].progressBarText; //muda porcentagem progressbar
      e.children[2].setAttribute("href", dataProjects[i].href); //muda href
      e.children[2].innerHTML = dataProjects[i].name; //muda nome do projeto
      e.children[3].children[0].innerHTML = dataProjects[i].info; //muda descrição
    });
  }
  toRemoveAfterCloneProject.children[0].style.display = "none";
  toRemoveAfterCloneSkills.children[0].style.display = "none";
}

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
