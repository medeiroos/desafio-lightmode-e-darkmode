function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(DarkModeClass);
    h1.classList.toggle(DarkModeClass);
    body.classList.toggle(DarkModeClass);
    footer.classList.toggle(DarkModeClass);
}

function changeText(){
    const lightMode = "Light mode";
    const darkMode = "Dark Mode";
    
    if (body.classList.contains(DarkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const DarkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);