var eyeBtnOpen = document.getElementById('eye-btn-open');
var eyeBtnClose = document.getElementById('eye-btn-close');
var password = document.getElementById('password');

eyeBtnOpen.addEventListener('click', function(){
    eyeBtnOpen.classList.add('close-the-btn');
    eyeBtnClose.classList.remove('close-the-btn');
    password.type = 'text';
});

eyeBtnClose.addEventListener('click', function(){
    eyeBtnOpen.classList.remove('close-the-btn');
    eyeBtnClose.classList.add('close-the-btn');
    password.type = 'password';
});