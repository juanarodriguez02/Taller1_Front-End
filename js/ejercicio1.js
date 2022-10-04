    /*LONGITUD*/

    function longitud() {

        const palabra = document.getElementById('palabra').value;
        
        alert("La longitud de la palabra es "+palabra.length)
    }

    longi.addEventListener('click',longitud);

    /*MAYUSCULAS*/

    function mayusculas(){
    
        const palabra = document.getElementById('palabra').value;
    
        alert("La palabra en mayusculas es "+palabra.toUpperCase())
    }

    mayus.addEventListener('click',mayusculas);

    /*MINUSCULAS*/
  
    function minusculas(){
    
        const palabra = document.getElementById('palabra').value;

        alert("La palabra en minusculas es "+palabra.toLowerCase())
    }

    minus.addEventListener('click',minusculas);

    /*CARACTER*/

    function caracter(){
    
        const palabra = document.getElementById('palabra').value;

        alert("El primer caracter de la palabra es "+palabra.charAt())
    }

    carac.addEventListener('click',caracter);