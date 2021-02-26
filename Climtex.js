var imagenes = new Array(
    'img/1.jpg',
    //'img/2.jpg',
    'img/3.jpg',
    `img/4.jpg`,
);
function rotarImagenes(){
var index = Math.floor((Math.random()*imagenes.length));
document.getElementById("imagen").src=imagenes [index];
}

onload=function(){
    rotarImagenes();
    setInterval(rotarImagenes,3000);
}
//ANIMACIONES JS
let nosotros = document.querySelector(`.nosotros`);
let ContMarcas = document.querySelector(`.contenedor-marcas-principal`);
window.addEventListener(`scroll`, (e)=>{
  animarFunct(divOcult1,`animacion-transform`, 400 );
  animarFunct(divOcult2,`animacion-transform`, 400 );
  animarFunct(divOcult3,`animacion-transform`, 400 );
  animarFunct(nosotros,`animacion-transform`, 400 );
  animarFunct(ContMarcas,`animacion-transform`, 500 );
})
function animarFunct(animar,animacion, number){
      let srl = document.documentElement.scrollTop;
      let altura = animar.offsetTop;
            if(altura -number < srl){
                  animar.classList.add(animacion);
           }
}
// FUNCIONALIDADES DE LOS BOTONES
var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var buttonTree = document.getElementById("button3");
var mostrar = document.getElementById("servicios");
var mostrarTwo = document.getElementById("contactos");
var mostrarTree = document.getElementById("trabajos");
const botonVolver = document.getElementById("volver");
const botonTrabajos = document.getElementById("volver3");

var divOcult1 = document.getElementById("ocultar1");
var divOcult2 = document.getElementById("ocultar2");
var divOcult3 = document.getElementById("ocultar3");
let arrayOcult = [divOcult1,divOcult2,divOcult3];
let arraySeccionPrincipal = [mostrar,mostrarTwo,mostrarTree];

buttonOne.addEventListener(`click`, (e)=>{
  MostrarSecciones(arrayOcult, mostrar );
});
buttonTree.addEventListener(`click`, (e)=>{
  MostrarSecciones(arrayOcult, mostrarTree );
});

function MostrarSecciones(arrayOcult, SeccionMostrar){
  for( let arraysOcult of arrayOcult){
    arraysOcult.style.display = "none";
    SeccionMostrar.style.display="block";
    window-scrollTo(SeccionMostrar);
  }
 }

botonVolver.addEventListener(`click`, (e)=>{
  volverSeccionPrincipal(arrayOcult, arraySeccionPrincipal[0]);
});
botonTrabajos.addEventListener(`click`,(e)=>{
  volverSeccionPrincipal(arrayOcult, arraySeccionPrincipal[2]);
});

function volverSeccionPrincipal(arrayOcult, arraySeccionPrincipal ){
  for(let arraysOcult of arrayOcult){
    arraysOcult.style.display="inline-block";
  }
    arraySeccionPrincipal.style.display=`none`;
  }
let buttonRes = document.getElementById(`menu-res`);
buttonRes.addEventListener(`click`, mostrarRess);
let testResponsive = false;
let responsiveA = document.querySelector(`.nav-responsive`);
function mostrarRess(){ 
     if(testResponsive == false){
      responsiveA.classList.add(`nostrar-res`);
      testResponsive = true;
} else if(testResponsive == true){
      responsiveA.classList.remove(`nostrar-res`);
      testResponsive = false;
 }
}