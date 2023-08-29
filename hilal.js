const form = document.getElementById('form');
const nombre = document.getElementById('name');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message; 
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ''; 
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const nombreValue= nombre.value.trim();
    const lastnameValue= lastname.value.trim();
    const phoneValue= phone.value.trim();
    const emailValue= email.value.trim();
    const textValue= textarea.value.trim();
    
    if(nombreValue == ''){
        setError(nombre, 'El nombre es requerido');
    }else{
        setSuccess(nombre);
    }

    if(lastnameValue == ''){
        setError(lastname, 'El apellido es requerido');
    }else{
        setSuccess(lastname);
    }


    if(emailValue === ''){
        setError(email, 'El email es requerido');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Introduzca un correo electrónico válido');
    }else{
        setSuccess(email);
    }

};


// STICKY NAVBAR

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
