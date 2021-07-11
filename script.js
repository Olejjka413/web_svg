const burger = document.querySelector('.burger');
const lightOn = document.getElementById('.switch');
const bulb = document.getElementById('.light');

const handleBurger = () => {
    burger.classList.toggle('burger__active');
};

const handleLightOn = () => {
    bulb.classList.toggle('light--on');
    lightOn.classList.toggle('switch--on');
};

burger.addEventListener('click', handleBurger);
lightOn.addEventListener('click', handleLightOn);