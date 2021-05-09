const frontPic = document.getElementById("frontPic");
const backPic = document.getElementById("backPic");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const domCount = document.getElementById("count");
const maxPictures = 150;
let count = 1;

//Chequear si hay imagenes siguientes y/o previas y desactivar botón si no hay mas;
const doButtonsWork = (count) => {
    count == 1 ? previous.setAttribute("disabled", "disabled") : previous.removeAttribute("disabled", "disabled");
    count == maxPictures ? next.setAttribute("disabled", "disabled") : next.removeAttribute("disabled", "disabled");
}
doButtonsWork(count);
domCount.textContent = count;

next.addEventListener("click", ()=> {
    count++;
    domCount.textContent = count;
    //Mientras se ejecuta la animación desactivamos botones
    previous.setAttribute("disabled", "disabled");
    next.setAttribute("disabled", "disabled");
    //animación
    backPic.classList.add("change");
    setTimeout(() => {
        backPic.classList.remove("change");
        frontPic.style.setProperty('--front-pic', `url(../assets/img/${count}.png)`);
        count < maxPictures ? backPic.style.setProperty('--back-pic', `url(../assets/img/${count + 1}.png)`) : "";
        doButtonsWork(count);
    }, 800);
});

previous.addEventListener("click", ()=> {
    count--;
    domCount.textContent = count;
    //Mientras se ejecuta la animación desactivamos botones
    previous.setAttribute("disabled", "disabled");
    next.setAttribute("disabled", "disabled");
    //Cambiar la posición de la nueva imagen y la anterior
    frontPic.style.setProperty('--front-pic', `url(../assets/img/${count + 1}.png)`);
    backPic.style.setProperty('--back-pic', `url(../assets/img/${count}.png)`);
    //animacion
    frontPic.classList.add("change__back");

    setTimeout(() => {
        frontPic.classList.remove("change__back");
        frontPic.style.setProperty('--front-pic', `url(../assets/img/${count}.png)`);
        backPic.style.setProperty('--back-pic', `url(../assets/img/${count + 1}.png)`);
        doButtonsWork(count);
    }, 800);
});