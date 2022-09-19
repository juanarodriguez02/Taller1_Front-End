let button = document.getElementById("boton")
    button.onclick = instructores;
    
    function instructores(evento) {

        const nombres = document.getElementById('nombre').value;
        parseInt(nombres);

        const apellidos = document.getElementById('apellido').value;
        parseInt(apellidos);

        const actividades = document.getElementById('acti').value;
        parseInt(actividades);

        if(nombres== 1 && apellidos==1 && actividades==1){
            alert("Las elecciones son correctas")
        }else if(nombres== 2 && apellidos==2 && actividades==2){
            alert("Las elecciones son correctas")
        }else if(nombres== 3 && apellidos==3 && actividades==3){
            alert("Las elecciones son correctas")
        }else if(nombres== 4 && apellidos==4 && actividades==4){
            alert("Las elecciones son correctas")
        }else if(nombres== 5 && apellidos==5 && actividades==5){
            alert("Las elecciones son correctas")
        }else if(nombres== 6 && apellidos==6 && actividades==6){
            alert("Las elecciones son correctas")
        }else if(nombres== 7 && apellidos==7 && actividades==7){
            alert("Las elecciones son correctas")
        }else{
            alert("Las elecciones son incorrectas")
        }
    }