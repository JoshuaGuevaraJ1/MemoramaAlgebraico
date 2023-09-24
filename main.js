let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let partidasGanadas = 0;


let temporizador = false;
let timer = 60;
let timerInicial = 60;
let tiempoRegresivoId = null;

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

let winAudio = new Audio('./sounds/win.wav');
let loseAudio = new Audio('./sounds/lose.wav');
let clickAudio = new Audio('./sounds/click.wav');
let rightAudio = new Audio('./sounds/right.wav');
let wrongAudio = new Audio('./sounds/wrong.wav');

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
numeros = numeros.sort(()=>{return Math.random()-1});

console.log(numeros);

//Functions
function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
        }
    },1000);
}
function bloquearTarjetas(){
    for (let i = 0; i <= 15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./images1/${numeros[i]}.png" alt="">`;
        tarjetaBloqueada.disabled = true;
        mostrarTiempo.innerHTML = `Se agotó tu tiempo. 😪 <br>Tiempo: ${timer} segundos`;
    }
}

function desbloquearTarjetas(){
    for(let i = 0; i <= 15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = ``;
        tarjetaBloqueada.disabled = false;
    }
}
function estadisticasReiniciadas(){
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos} <br>Partidas ganadas: ${partidasGanadas}`;
}
function reiniciar(){
    temporizador = false;
    movimientos = 0;
    aciertos = 0;
    timer = 60;
    tiempoRegresivoId = null;
    numeros = numeros.sort(()=>{return Math.random()-0.5});
    desbloquearTarjetas();
    estadisticasReiniciadas();
}

//Principal function
function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="./images1/${primerResultado}.png" alt="">`;
        clickAudio.play();
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="./images1/${segundoResultado}.png" alt="">`;
    
        tarjeta2.disabled = true;
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado-8 || primerResultado == segundoResultado+8){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos} <br>Partidas ganadas: ${partidasGanadas}`;
            rightAudio.play();

            if(aciertos == 8){
                partidasGanadas++;
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😌 <br>Partidas ganadas: ${partidasGanadas} 🤩`;
                mostrarTiempo.innerHTML = `Fantástico! Solo te demoraste ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😎`;
                winAudio.play();
            }
        }else{
            wrongAudio.play();
            setTimeout(()=>{
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800)
        }
    }
}



