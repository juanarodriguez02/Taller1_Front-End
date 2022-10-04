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
        parseInt(valortri1)

        let valortri2 = document.getElementById("valortri2").value;
        parseInt(valortri2)

        let valortri3 = document.getElementById("valortri3").value;
        parseInt(valortri3)

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

/*================MODAL CUADRADO===============*/

    /*=====MODAL Y FUNCIÓN PERIMETRO=====*/

    const abrircuadradop = document.getElementById('abrircuadradop');
    const modalcuadradop = document.getElementById('modalcuadradop');
    const cerrarcuadradop = document.getElementById('cerrarcuadradop');

    abrircuadradop  .addEventListener('click', () => {
        modalcuadradop.classList.add('show');
    });

    cerrarcuadradop.addEventListener('click', () => {
        modalcuadradop.classList.remove('show');
    });

    function perimetrocuadrado(){
        let ladoscua = document.getElementById("ladoscua").value;
        parseInt(ladoscua)
        
        calculo = ladoscua*4
        alert("El perimetro del cuadrado es "+calculo)
    }

    calcularcuadradop.addEventListener('click',perimetrocuadrado);

    /*=====MODAL Y FUNCIÓN AREA=====*/

    const abrircuadradoa = document.getElementById('abrircuadradoa');
    const modalcuadradoa = document.getElementById('modalcuadradoa');
    const cerrarcuadradoa = document.getElementById('cerrarcuadradoa');

    abrircuadradoa  .addEventListener('click', () => {
        modalcuadradoa.classList.add('show');
    });

    cerrarcuadradoa.addEventListener('click', () => {
        modalcuadradoa.classList.remove('show');
    });

    function areacuadrado(){
        let unlado = document.getElementById("unlado").value;
        parseInt(unlado)
        
        calculo = unlado*unlado
        alert("El area del cuadrado es "+calculo)
    }

    calcularcuadradoa.addEventListener('click',areacuadrado);

/*================MODAL RECTANGULO===============*/

    /*=====MODAL Y FUNCIÓN PERIMETRO=====*/

    const abrirrectangulop = document.getElementById('abrirrectangulop');
    const modalrectangulop = document.getElementById('modalrectangulop');
    const cerrarrectangulop = document.getElementById('cerrarrectangulop');

    abrirrectangulop  .addEventListener('click', () => {
        modalrectangulop.classList.add('show');
    });

    cerrarrectangulop.addEventListener('click', () => {
        modalrectangulop.classList.remove('show');
    });

    function perimetrorectangulo(){
        let baserec = document.getElementById("baserec").value;
        parseInt(baserec)
        
        let alturarec = document.getElementById("alturarec").value;
        parseInt(alturarec)
        
        calculo = (baserec*2)+(alturarec*2)
        alert("El perimetro del rectangulo es "+calculo)
    }

    calcularrectangulop.addEventListener('click',perimetrorectangulo);

    /*=====MODAL Y FUNCIÓN AREA=====*/

    const abrirrectanguloa = document.getElementById('abrirrectanguloa');
    const modalrectanguloa = document.getElementById('modalrectanguloa');
    const cerrarrectanguloa = document.getElementById('cerrarrectanguloa');

    abrirrectanguloa  .addEventListener('click', () => {
        modalrectanguloa.classList.add('show');
    });

    cerrarrectanguloa.addEventListener('click', () => {
        modalrectanguloa.classList.remove('show');
    });

    function arearectangulo(){
        let basereca = document.getElementById("basereca").value;
        parseInt(basereca)
        
        let alturareca = document.getElementById("alturareca").value;
        parseInt(alturareca)
        
        calculo = basereca*alturareca
                
        alert("El area del rectangulo es "+calculo)
    }

    calcularrectanguloa.addEventListener('click',arearectangulo);