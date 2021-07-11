const burger = document.querySelector('.burger');

const handleBurger = () => {
    burger.classList.toggle('burger__active');
};

burger.addEventListener('click', handleBurger);


$(document).ready(function() {
    $('#switch').click(function () {
        $('.bulb').toggleClass('bulb--on');
        $('.star').toggleClass('star--on');
        
    })
});