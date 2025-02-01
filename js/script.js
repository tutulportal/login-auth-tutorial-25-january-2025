var eyeBtnOpen = document.getElementById('eye-btn-open');
var eyeBtnOpen2 = document.getElementById('eye-btn-open2');
var eyeBtnClose = document.getElementById('eye-btn-close');
var eyeBtnClose2 = document.getElementById('eye-btn-close2');
var password = document.getElementById('password');
var password2 = document.getElementById('confirm-password');
var loginBtn = document.getElementById('login-btn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var email = document.getElementById('email');
var fullName = document.getElementById('full-name');
var emailValidMessage = document.getElementById('email-valid-message');
var fullnameValidMessage = document.getElementById('full-name-valid-message');

eyeBtnOpen.addEventListener('click', function(){
    eyeBtnOpen.classList.add('close-the-btn');
    eyeBtnClose.classList.remove('close-the-btn');
    password.type = 'text';
});

eyeBtnOpen2.addEventListener('click', function(){
    eyeBtnOpen2.classList.add('close-the-btn');
    eyeBtnClose2.classList.remove('close-the-btn');
    password2.type = 'text';
});

eyeBtnClose.addEventListener('click', function(){
    eyeBtnOpen.classList.remove('close-the-btn');
    eyeBtnClose.classList.add('close-the-btn');
    password.type = 'password';
});

eyeBtnClose2.addEventListener('click', function(){
    eyeBtnOpen2.classList.remove('close-the-btn');
    eyeBtnClose2.classList.add('close-the-btn');
    password2.type = 'password';
});

loginBtn.addEventListener('click', function(e){
    var emailInput = document.getElementById('email').value;
    var fullNameInput = document.getElementById('full-name');
    e.preventDefault();

    // email condition part
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

    // full name condition part
    if(fullNameInput.value == ""){
        fullName.classList.add('error-full-name');
        fullnameValidMessage.innerText = "Please Enter your full name. ex: Jhon Doe";
        fullnameValidMessage.classList.remove('valid');
        fullnameValidMessage.classList.add('invalid');
    }else{
        fullName.classList.remove('error-full-name');
        fullnameValidMessage.classList.add('valid');
        fullnameValidMessage.classList.remove('invalid');
    }

    // password check
    var newPassword = document.getElementById('password');
    var newPasswordBox = document.getElementById('password-box');
    if(newPassword.value == ""){
        newPasswordBox.classList.add('invalid');
    }

});