const frontPic = document.getElementById("frontPic");
const backPic = document.getElementById("backPic");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const domCount = document.getElementById("count");
const maxPictures = 150;
let count = 1;

//Inhabilitar los botones de siguiente y previo
const getDisabledButtons = () => {
    previous.setAttribute("disabled", "disabled");
    next.setAttribute("disabled", "disabled");
}
//Chequear si hay imagenes siguientes y/o previas y activar los botones si corresponde:
const getEnabledButtons = (count) => {
    count == 1 ? previous.setAttribute("disabled", "disabled") : previous.removeAttribute("disabled", "disabled");
    count == maxPictures ? next.setAttribute("disabled", "disabled") : next.removeAttribute("disabled", "disabled");
}
getEnabledButtons(count);
domCount.textContent = count;

next.addEventListener("click", ()=> {
    count++;
    domCount.textContent = count;
    getDisabledButtons();
    //animación
    backPic.classList.add("change");
    setTimeout(() => {
        backPic.classList.remove("change");
        frontPic.style.setProperty('--front-pic', `url(../assets/img/${count}.png)`);
        count < maxPictures ? backPic.style.setProperty('--back-pic', `url(../assets/img/${count + 1}.png)`) : "";
        getEnabledButtons(count);
    }, 800);
});

previous.addEventListener("click", ()=> {
    count--;
    domCount.textContent = count;
    getDisabledButtons();
    //Cambiar la posición de la nueva imagen y la anterior
    frontPic.style.setProperty('--front-pic', `url(../assets/img/${count + 1}.png)`);
    backPic.style.setProperty('--back-pic', `url(../assets/img/${count}.png)`);
    //animacion
    frontPic.classList.add("change__back");

    setTimeout(() => {
        frontPic.classList.remove("change__back");
        frontPic.style.setProperty('--front-pic', `url(../assets/img/${count}.png)`);
        backPic.style.setProperty('--back-pic', `url(../assets/img/${count + 1}.png)`);
        getEnabledButtons(count);
    }, 800);
});