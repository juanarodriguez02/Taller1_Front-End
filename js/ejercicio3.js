let button = document.getElementById("boton")
    button.onclick = triangulo; 

    function triangulo(evento) {
    
        const valor1 = document.getElementById('valor1');
        parseFloat(valor1);

        const valor2 = document.getElementById('valor2');
        parseFloat(valor2);

        const valor3 = document.getElementById('valor3');
        parseFloat(valor3);

        if(valor1==valor2 && valor2==valor3 && valor1==valor3 && valor1==valor2){
            alert(`Los valores ingresados determinan que el triangulo es equilatero`);
        }else if(valor1==valor2 || valor1==valor3 || valor2==valor3){
            alert(`Los valores ingresados determinan que el triangulo es isosceles`);
        }
        else if(valor1!=valor2 && valor2!=valor3){
            alert(`Los valores ingresados determinan que el triangulo es escaleno`);
        }
    }