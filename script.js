const target = document.querySelectorAll("[data-anime]");
const linksNav = document.querySelectorAll(".links-nav")
const titulo = document.querySelector(".apresentacao-inicial > h2")
const containerInfoLanguage = document.querySelector(".containerinfoLanguage")
const botaoInfo = document.querySelectorAll(".btn-info")
const containerHtml = document.querySelector("#containerHtml")
const containerCss = document.querySelector("#containerCss")
const containerJavascript = document.querySelector("#containerJavascript")
const containerGit = document.querySelector("#containerGit")
const containerNode = document.querySelector("#containerNode")
const containerTypescript = document.querySelector("#containerTypescript")
const containerPython = document.querySelector("#containerPython")
const containerReact = document.querySelector("#containerReact")
const containerVue = document.querySelector("#containerVue")
const containerBootstrap = document.querySelector("#containerBootstrap")
const btnFechar = document.querySelectorAll(".btn-fechar")
const btnMenu = document.querySelector(".menu-hamburguer")
const btnFechaMenu = document.querySelector(".btn-fechar-menu")
const menu = document.querySelector(".menu")
const menus = document.querySelectorAll(".links-menu")
const txtEmail = document.querySelector(".txt-email")
const btnEmail = document.querySelector(".btn-email")


async function animarScroll() {

  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
  target.forEach(function(element) {
    if (windowTop > element.offsetTop) {
      element.classList.add('animate')
    } else {
      element.classList.remove('animate')
    }
  })
}


animarScroll()

/////////////////////////////////////////////////////////////////////////////

linksNav.forEach(function(item) {
  item.addEventListener('click', scrollSuave)
})

function scrollSuave(event) {
  event.preventDefault()
  const target = event.target
  const id = target.getAttribute('href')
  const to = document.querySelector(id).offsetTop

  window.scroll({
    top: to,
    behavior: 'smooth'
  })

  window.scroll({
    top: to,
    behavior: 'smooth'
  })
}

animarScroll()
//////////////////////////////////////////////////////////////////

botaoInfo.forEach(function(item) {
  item.addEventListener('click', function(e) {
    let target = e.target.getAttribute('data-language')

    if (target == 'html') {
      containerHtml.style.opacity = 0
      containerHtml.style.display = 'flex'
      setTimeout(function(){
        containerHtml.style.opacity = 1
      }, 100)
    }

    if (target == 'css') {
      containerCss.style.opacity = 0
      containerCss.style.display = 'flex'
      setTimeout(function(){
        containerCss.style.opacity = 1
      }, 100)
    }

    if (target == 'javascript') {
      containerJavascript.style.opacity = 0
      containerJavascript.style.display = 'flex'
      setTimeout(function(){
        containerJavascript.style.opacity = 1
      }, 100)
    }

    if (target == 'git') {
      containerGit.style.opacity = 0
      containerGit.style.display = 'flex'
      setTimeout(function(){
        containerGit.style.opacity = 1
      }, 100)
    }

    if (target == 'node') {
      containerNode.style.opacity = 0
      containerNode.style.display = 'flex'
      setTimeout(function(){
        containerNode.style.opacity = 1
      }, 100)
    }

    if (target == 'typescript') {
      containerTypescript.style.opacity = 0
      containerTypescript.style.display = 'flex'
      setTimeout(function(){
        containerTypescript.style.opacity = 1
      }, 100)
    }

    if (target == 'python') {
      containerPython.style.opacity = 0
      containerPython.style.display = 'flex'
      setTimeout(function(){
        containerPython.style.opacity = 1
      }, 100)
    }

    if (target == 'react') {
      containerReact.style.opacity = 0
      containerReact.style.display = 'flex'
      setTimeout(function(){
        containerReact.style.opacity = 1
      }, 100)
    }

    if (target == 'vue') {
      containerVue.style.opacity = 0
      containerVue.style.display = 'flex'
      setTimeout(function(){
        containerVue.style.opacity = 1
      }, 100)
    }

    if (target == 'bootstrap') {
      containerBootstrap.style.opacity = 0
      containerBootstrap.style.display = 'flex'
      setTimeout(function(){
        containerBootstrap.style.opacity = 1
      }, 100)
    }
  })
})

btnFechar.forEach(function(i) {
  i.addEventListener('click', function(e){
    let target = e.target.getAttribute('data-btn')

    if (target == 'html') {
      containerHtml.style.opacity = 0
      setTimeout(function(){
        containerHtml.style.display = 'none'
      }, 400)
    }

    if (target == 'css') {
      containerCss.style.opacity = 0
      setTimeout(function(){
        containerCss.style.display = 'none'
      }, 400)
    }

    if (target == 'javascript') {
      containerJavascript.style.opacity = 0
      setTimeout(function(){
        containerJavascript.style.display = 'none'
      }, 400)
    }

    if (target == 'git') {
      containerGit.style.opacity = 0
      setTimeout(function(){
        containerGit.style.display = 'none'
      }, 400)
    }

    if (target == 'node') {
      containerNode.style.opacity = 0
      setTimeout(function(){
        containerNode.style.display = 'none'
      }, 400)
    }

    if (target == 'typescript') {
      containerTypescript.style.opacity = 0
      setTimeout(function(){
        containerTypescript.style.display = 'none'
      }, 400)
    }

    if (target == 'python') {
      containerPython.style.opacity = 0
      setTimeout(function(){
        containerPython.style.display = 'none'
      }, 400)
    }

    if (target == 'react') {
      containerReact.style.opacity = 0
      setTimeout(function(){
        containerReact.style.display = 'none'
      }, 400)
    }

    if (target == 'vue') {
      containerVue.style.opacity = 0
      setTimeout(function(){
        containerVue.style.display = 'none'
      }, 400)
    }

    if (target == 'bootstrap') {
      containerBootstrap.style.opacity = 0
      setTimeout(function(){
        containerBootstrap.style.display = 'none'
      }, 400)
    }


  })
})

function abreMenu() {
  menu.style.opacity = 0
  menu.style.display = 'flex'
  document.body.style.overflow = 'hidden'
      setTimeout(function(){
        menu.style.opacity = 1
      }, 100)
  
}

function fechaMenu() {
  menu.style.opacity = 0
  setTimeout(function(){
    menu.style.display = 'none'
  }, 400)
  document.body.style.overflow = 'initial'
}

menus.forEach(function(i) {
  i.addEventListener('click', function(t) {
    console.log(t.target)
    menu.style.display = 'none'
    document.body.style.overflow = 'initial'
  })
})

function mostraEmail() {
 if (txtEmail.classList.contains('desliza') == true) {
    txtEmail.classList.remove('desliza')
    txtEmail.classList.add('remove-desliza')
    setTimeout(() => {
      txtEmail.style.display = 'none'
    }, 500);
   } else if (txtEmail.classList.contains('desliza') == true && txtEmail.classList.contains('remove-desliza') == true) {
    txtEmail.classList.remove('desliza')
    txtEmail.classList.remove('remove-desliza')
 } else if (txtEmail.classList.contains('remove-desliza') == true) {
  txtEmail.style.display = 'block'
    txtEmail.classList.remove('remove-desliza')
    txtEmail.classList.add('desliza')
 } else {
  txtEmail.classList.add('desliza')
 }
}

////////////////////////////////////////////////////////////
window.addEventListener('scroll', animarScroll)
btnMenu.addEventListener('click', abreMenu)
btnFechaMenu.addEventListener('click', fechaMenu)
btnEmail.addEventListener('click', mostraEmail)
