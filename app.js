
let numeroSecreto=0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto){
  let elementoHTML = document.querySelector (elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById ('reiniciar').removeAttribute ('disabled')
  } else {
    // el usuario no acerto
      if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ('p','El número secreto es menor')
      }else{
        asignarTextoElemento ('p','El número secreto es mayor')
      }
      intentos++;
      limpiarCaja ();
    }
    return;
}

function limpiarCaja (){
  let valorCaja = document.querySelector ('#valorUsuario').value = '';
  }
function generarNumeroSecreto (){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log (numeroGenerado);
  console.log (listaNumerosSecretos);
  //Si ya sorteamos los numeros salimos
  if (listaNumerosSecretos.length == numeroMaximo) {
   asignarTextoElemento ('p','ya se sortearon todos los números posibles') 
  } else {
  //Si el número generado esta incluido en la listo hacemos una condicion si no otra
  if (listaNumerosSecretos.includes(numeroGenerado)){
      return generarNumeroSecreto ();
  } else  {
      listaNumerosSecretos.push (numeroGenerado);
      return numeroGenerado;
      }
    }
  }


function condicionesIniciales (){
  asignarTextoElemento('h1','Juego del número secreto!');
  asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto ();
  intentos = 1;
}

function reiniciarJuego () {
  //Limpiar caja
  limpiarCaja ();
  //Indicar mensaje de inicio
  //Generar el numero aleatorio
  //Reiniciar el numero de intentos
  condicionesIniciales ();
  //Deshabilitar boton juevo nuevo
  document.querySelector ('#reiniciar').setAttribute ('disabled','true');
}

condicionesIniciales ();
