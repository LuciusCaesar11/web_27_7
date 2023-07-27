const wrapper=document.querySelector('.wrapper_login')
const loginLink=document.querySelector('.login-link')
const registerLink=document.querySelector('.register-link')

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.menu');
    var pseudo = document.querySelector('.quick_choices');
    var icon_menu = document.querySelector('.menu i');

    menu.addEventListener('click', function () {
        if (pseudo.style.display === 'none') {
            pseudo.style.display = 'block';
            icon_menu.classList.remove('fa-bars');
            icon_menu.classList.add('fa-x');
        } else {
            pseudo.style.display = 'none';
            icon_menu.classList.remove('fa-x');
            icon_menu.classList.add('fa-bars');
        }
    });
});