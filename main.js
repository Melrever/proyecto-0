const wrapper = document.querySelector('.wrapper');
const ingresoLink = document.querySelector('.ingreso-link');
const registroLink = document.querySelector('.registro-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconoCerrar = document.querySelector('.icono-cerrar');
registroLink.addEventListener('click',()=> {
    wrapper.classList.add('active')
});

ingresoLink.addEventListener('click',()=> {
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
});

iconoCerrar.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
});