import { homepage } from './home';
import { menuPage } from './menu';
import { aboutpage } from './about';
import { contactpage } from './contact';

const header = function(){
    const body = document.querySelector('body')
    const navbarDiv = document.createElement('div')
    navbarDiv.classList.add('navbar')
    body.prepend(navbarDiv)

        const navtopDiv = document.createElement('div')
        navtopDiv.classList.add('navtop')
        navbarDiv.appendChild(navtopDiv)

        const navbarImg = document.createElement('img')
        navbarImg.src = 'https://via.placeholder.com/50'
        navtopDiv.appendChild(navbarImg)

        const naviButtonsDiv = document.createElement('div')
        naviButtonsDiv.classList.add('navi-buttons')
        navtopDiv.appendChild(naviButtonsDiv)

        //should make a button factory
            const homeButton = document.createElement('button')
            homeButton.id = 'home'
            homeButton.innerText = 'Home'
            naviButtonsDiv.appendChild(homeButton)

            const menuButton = document.createElement('button')
            menuButton.id = 'menu'
            menuButton.innerText = 'Menu'
            naviButtonsDiv.appendChild(menuButton)

            const aboutButton = document.createElement('button')
            aboutButton.id = 'about'
            aboutButton.innerText = 'About'
            naviButtonsDiv.appendChild(aboutButton)

            const contactButton = document.createElement('button')
            contactButton.id = 'contact'
            contactButton.innerText = 'Contact'
            naviButtonsDiv.appendChild(contactButton)

        const navbtmDiv = document.createElement('div')
        navbtmDiv.classList.add('navbtm')
        navbtmDiv.innerHTML = `
            <h1>Restaurant Title</h1>`
        navbarDiv.appendChild(navbtmDiv)
}


const removeAllChildNodes = function() {
    const contentDiv = document.querySelector('#content')
    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild)
    }
}
const navEvents = function() {
    const naviButtons =  document.querySelector('.navi-buttons')
    naviButtons.addEventListener('click', e => {
        console.log(e)
        if(e.target.id === 'home'){
            removeAllChildNodes()
            homepage()
        }
        if(e.target.id === 'menu'){
            removeAllChildNodes()
            menuPage()
        }
        if(e.target.id === 'about'){
            removeAllChildNodes()
            aboutpage()
        }
        if(e.target.id === 'contact'){
            removeAllChildNodes()
            contactpage()
        }
    })
}

const init = function() {
    header()
    homepage()
    navEvents()
}    

init()