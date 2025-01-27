var eyeBtnOpen = document.getElementById('eye-btn-open');
var eyeBtnClose = document.getElementById('eye-btn-close');
var password = document.getElementById('password');
var loginBtn = document.getElementById('login-btn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var email = document.getElementById('email');
var emailValidMessage = document.getElementById('email-valid-message');

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

loginBtn.addEventListener('click', function(e){
    var emailInput = document.getElementById('email').value;
    e.preventDefault();
    if(emailPattern.test(emailInput)){
        email.classList.remove('error-email');
        emailValidMessage.innerText = "";
        emailValidMessage.classList.remove('invalid');
        emailValidMessage.classList.add('valid');
    }else{
        email.classList.add('error-email');
        emailValidMessage.innerText = "This email is not correct! example: yourname@gmail.com";
        emailValidMessage.classList.remove('valid');
        emailValidMessage.classList.add('invalid');
    }
});