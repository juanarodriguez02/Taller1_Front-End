/*LONGITUD*/

let button = document.getElementById("longi");
    button.onclick = longitud;

    function longitud(evento) {
        
        palabralongi=prompt("Ingrese una palabra")

        alert("La longitud de la palabra es "+palabralongi.length)
    }

/*MAYUSCULAS

let button = document.getElementById("mayus"); 
    button.onclick = mayusculas;

    function mayusculas(evento){
    
        palabramayus=prompt("Ingrese una palabra")
    
        alert("La palabra en mayusculas es "+palabramayus.toUpperCase())
    }

/*MINUSCULAS

let button = document.getElementById("minus"); 
    button.onclick = minusculas;
    
    function minusculas(evento){
    
    palabraminus=prompt("Ingrese una palabra")

    alert("La palabra en minusculas es "+palabraminus.toLowerCase())
}

/*CARACTER

let button = document.getElementById("caracter"); 
    button.onclick = caracter;
    
    function caracter(evento){
    
    palabracarac=prompt("Ingrese una palabra")

    alert("El primer caracter de la palabra es "+palabracarac.charAt())
}*/