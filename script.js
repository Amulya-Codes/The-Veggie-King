const hamburger = document.querySelector(".hamburger");

const navList = document.querySelector('.nav__list');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

})

document.querySelectorAll('.nav__list a').forEach(n => n.addEventListener('click', function(){
    hamburger.classList.remove('active');
    navList.classList.remove('active');
}))