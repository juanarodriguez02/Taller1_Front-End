const form = document.getElementById('formulario');

const reglas = {
    usuario: /^[a-zA-Z0-9\_\-]{4,20}$/,
    textos: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    contraseña: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeros: /^\d{7,10}$/
}

form.addEventListener('submit',e =>{
    e.preventDefault();
})

campos.forEach((campo)=>{
    campo.addEventListener('keyup',validarCampos);

    campo.addEventListener('blur',validarCampos);
})

const validarCampos=(e)=>{

    console.log(e.target.name);

    switch(e.target.name){
        case "numdoc":

        break;

        case "nombre":

        break;
    }

}


//MODAL
const abrir = document.getElementById('abrir');
const modal_container = document.getElementById('modal_container');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', () => {
    modal_container.classList.add('show');
});

cerrar.addEventListener('click', () => {
    modal_container.classList.remove('show');
});