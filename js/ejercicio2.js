let button = document.getElementById("boton");
    button.onclick = temperaturas;

    function temperaturas(){    

        let grados = document.getElementById("grados").value
        grados = parseInt(grados)

        let opcion1 = document.getElementById("opcion1").value
        opcion1 = parseInt(opcion1)
        
        let opcion2 = document.getElementById("opcion2").value
        opcion2 = parseInt(opcion2)
        
        let respuesta

        if (opcion1==1 && opcion2==2) {
            respuesta = ((grados-32)/1.8).toFixed(2)
            alert (respuesta)
        }
        else if (opcion1==1 && opcion2==3){
            respuesta = ((grados-32)* 5/9 + 273.15).toFixed(2)
            alert (respuesta)
        }
        else if(opcion1==2 && opcion2==1){
            respuesta = ((grados * 9/5)+32).toFixed(2)
            alert (respuesta)
        }
        else if(opcion1==2 && opcion2==3){
            respuesta = (grados + 273.15).toFixed(2)
            alert (respuesta)
        }
        else if(opcion1==3 && opcion2==1){
            respuesta = (( grados - 273.15) * 9/5 + 32).toFixed(2)
            alert (respuesta)
        }
        else if(opcion1==3 && opcion2==2){
            respuesta = (grados - 273.15).toFixed(2)
            alert (respuesta)
        }
    }