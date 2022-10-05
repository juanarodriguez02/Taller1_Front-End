/*================VALIDACIONES===================*/

const form= document.getElementById('form'); 
const inputs= document.querySelectorAll('#form input');

const expresiones = {
	documento: /^\d{5,10}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, 
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
	contraseña: /^.{10,25}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
	documento: false,
	nombre: false,
	apellido: false,
	contraseña: false,
	correo: false
}

const validacionform = (e) => {
	switch (e.target.name) {
		case "documento":
			validacioncampo(expresiones.documento, e.target, 'documento');
		break;
		case "nombre":
			validacioncampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validacioncampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "correo":
			validacioncampo(expresiones.correo, e.target, 'correo');
			validarDominio();
		break;
		case "contraseña":
			validacioncampo(expresiones.contraseña, e.target, 'contraseña');
			validarcontraseña2();
		break;
		case "contraseña2":
			validarcontraseña2();
		break;
	}
}

const validacioncampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`campos-${campo}`).classList.remove('camposincorrectos');
		document.getElementById(`campos-${campo}`).classList.add('camposcorrectos');
		document.querySelector(`#campos-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#campos-${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#campos-${campo} .formerrorinput`).classList.remove('formerrorinputactivo');
		campos[campo] = true;
	} else {
		document.getElementById(`campos-${campo}`).classList.add('camposincorrectos');
		document.getElementById(`campos-${campo}`).classList.remove('camposcorrectos');
		document.querySelector(`#campos-${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#campos-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#campos-${campo} .formerrorinput`).classList.add('formerrorinputactivo');
		campos[campo] = false;
	}
}

const validarcontraseña2 = () => {
	const contraseña = document.getElementById('contraseña');
	const contraseña2 = document.getElementById('contraseña2');

	if(contraseña.value !== contraseña2.value){
		document.getElementById(`campos-pass2`).classList.add('camposincorrectos');
		document.getElementById(`campos-pass2`).classList.remove('camposcorrectos');
		document.querySelector(`#campos-pass2 i`).classList.add('fa-times-circle');
		document.querySelector(`#campos-pass2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#campos-pass2 .formerrorinput`).classList.add('formerrorinputactivo');
		campos['contraseña'] = false;
	} else {
		document.getElementById(`campos-pass2`).classList.remove('camposincorrectos');
		document.getElementById(`campos-pass2`).classList.add('camposcorrectos');
		document.querySelector(`#campos-pass2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#campos-pass2 i`).classList.add('fa-check-circle');
		document.querySelector(`#campos-pass2 .formerrorinput`).classList.remove('formerrorinputactivo');
		campos['contraseña'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validacionform);
	input.addEventListener('blur', validacionform);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('abrirform'); //HTML MODAL
	if(campos.nodoc && campos.nombre && campos.apellido && campos.contraseña && campos.correo && terminos.checked ){
		formulario.reset();

		document.getElementById('mensajeok').classList.add('mensajeokactivo');
		setTimeout(() => {
			document.getElementById('mensajeok').classList.remove('mensajeokactivo');
		}, 5000);

		document.querySelectorAll('.camposcorrectos').forEach((icono) => {
			icono.classList.remove('camposcorrectos');
		});
	} else {
		document.getElementById('mensaje').classList.add('mensajeactivo');
	}
});