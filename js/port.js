// here we will write code for hamburger

burger = document.querySelector('.burger')
churu = document.querySelector('.churu')
left = document.querySelector('.left')
right = document.querySelector('.right')


burger.addEventListener('click', () => {
    left.classList.toggle('visible');
    right.classList.toggle('visible');
    churu.classList.toggle('h-collapse');

})