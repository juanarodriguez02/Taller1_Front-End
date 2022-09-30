/*================MODAL CIRCULO===============*/

    /*=====MODAL Y FUNCIÓN PERIMETRO=====*/

    const abrircirculo = document.getElementById('abrircirculo');
    const modalcirculo = document.getElementById('modalcirculo');
    const cerrarcirculo = document.getElementById('cerrarcirculo');

    abrircirculo.addEventListener('click', () => {
        modalcirculo.classList.add('show');
    });

    cerrarcirculo.addEventListener('click', () => {
        modalcirculo.classList.remove('show');
    });

    function perimetrocirculo(){
        let radiocp = document.getElementById('radiocp').value;
        parseInt(radiocp)

        var calculocirp = 2*3.14*radiocp
        alert("El perimetro del circulo es " +calculocirp)
    }

    calcularcirculop.addEventListener('click',perimetrocirculo);

    /*=====MODAL Y FUNCIÓN AREA=====*/

    const abriracirculo = document.getElementById('abriracirculo');
    const modalcirculoa = document.getElementById('modalcirculoa');
    const cerrarcirculoa = document.getElementById('cerrarcirculoa');

    abriracirculo  .addEventListener('click', () => {
        modalcirculoa.classList.add('show');
    });

    cerrarcirculoa.addEventListener('click', () => {
        modalcirculoa.classList.remove('show');
    });

    function areacirculo(){
        let radioca = document.getElementById('radioca').value;
        parseInt(radioca)

        calculoap =(radioca*radioca)*3.14
        alert("El area del circulo es " +calculoap)
    }

    calcularcirculoa.addEventListener('click',areacirculo);

/*================MODAL TRIANGULO===============*/

    /*=====MODAL Y FUNCIÓN PERIMETRO=====*/

    const abrirtriangulop = document.getElementById('abrirtriangulop');
    const modaltriangulop = document.getElementById('modaltriangulop');
    const cerrartriangulop = document.getElementById('cerrartriangulop');

    abrirtriangulop.addEventListener('click', () => {
        modaltriangulop.classList.add('show');
    });

    cerrartriangulop.addEventListener('click', () => {
        modaltriangulop.classList.remove('show');
    });

    function perimetrotriangulo(){
        let valortri1 = document.getElementById("valortri1").value;
        valortri1 = parseInt(valortri1)

        let valortri2 = document.getElementById("valortri2").value;
        valortri2 = parseInt(valortri2)

        let valortri3 = document.getElementById("valortri3").value;
        valortri3 = parseInt(valortri3)

        calculo = valortri1+valortri2+valortri3
        alert("El perimetro del triangulo es "+calculo)
    }

    calculartriangulop.addEventListener('click',perimetrotriangulo);

    /*=====MODAL Y FUNCIÓN AREA=====*/

    const abrirtrianguloa = document.getElementById('abrirtrianguloa');
    const modaltrianguloa = document.getElementById('modaltrianguloa');
    const cerrartrianguloa = document.getElementById('cerrartrianguloa');

    abrirtrianguloa  .addEventListener('click', () => {
        modaltrianguloa.classList.add('show');
    });

    cerrartrianguloa.addEventListener('click', () => {
        modaltrianguloa.classList.remove('show');
    });

    function areatriangulo(){
        let basetri = document.getElementById("basetri").value;
        parseInt(basetri)

        let alturatri = document.getElementById("alturatri").value;
        parseInt(alturatri)
    
        calculo = (basetri*alturatri)/2
        alert("El area del triangulo es "+calculo)
    }

    calculartrianguloa.addEventListener('click',areatriangulo);