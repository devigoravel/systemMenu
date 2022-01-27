const gettingColortext = document.querySelector('#colorText')

function changeColortext () {
    document.documentElement.style.setProperty('--color-menu-text', gettingColortext.value)
}

const gettingColorbg = document.querySelector('#colorBg')

function changeColorbg () {
    document.documentElement.style.setProperty('--color-menu-bg', gettingColorbg.value)
}

const gettingColorhover = document.querySelector('#colorHover')

function changeColorhover () {
    document.documentElement.style.setProperty('--color-menu-hover', gettingColorhover.value)
}

const gettingTextlogo = document.querySelector('#textLogo')

function changeTextlogo () {
    let textlogo = document.querySelector('.logo a')
    textlogo.innerHTML = gettingTextlogo.value
}