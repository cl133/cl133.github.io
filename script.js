let dato = document.getElementById("peso");
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
let enter = document.getElementById ('peso');

enter.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        CALCULAR.click();
    }
});
CALCULAR.addEventListener("click", eventoboton);
function eventoboton (){
    let peso = dato.valueAsNumber;
    let volumen;
    if (peso <=30 ){
        volumen=holliday(peso);
    } else if(peso>30){
        volumen= (superficie (peso));
    }
    
}

CALCULAR.addEventListener("click", () =>{
    const DATO = document.getElementById("peso").valueAsNumber;
   if (DATO>0){
    if (DATO<=30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = "El volumen por hora es " +flujo + ' cc/hr';
        MAN.innerHTML = "Mantenimiento es " + 'm+m/2 ' + mantenimiento + ' cc/hr';

        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
    
    else if (DATO>30){
        ERROR.style.display = 'block';
        let aux= superficie(DATO);
        let resul1=aux*1500;
        let resul2=aux*2000;
        FLU.innerHTML = resul1;
        MAN.innerHTML = resul2;
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    } 
   }
   else{
    ERROR.style.display = 'block';
    FLU.style.display = 'none';
        MAN.style.display = 'none';
   }
       
   
      
    
});




function holliday (peso){
    let resultado;
    if (peso <= 10){
        resultado = peso*100;
    } else if (peso > 10 && peso <= 20 ) {
        let a=10*100; //para los primeros 10 kilos que el paciente ya tiene por entrar en este rango
        /*resto el peso ingresado con 10, para conocer el excedente y agregar los 50cc por cada kilo */
        let a1=(peso-10)*50; 
        resultado= a+a1;
    } else if(peso > 20 && peso <= 30 ) {
        /*al ingresar a este rango ya doy por hecho que existen los primeros 20 kilos
         por ende ya defino que tengo los primeros 1500cc*/
        let b = 1500;
        let b1= (peso-20)*20;
        resultado = b+b1;
    }
    return resultado;
}

function superficie (peso){
    let resultado;
    resultado= ((peso*4)+7) / (peso + 90);
    return resultado;
}

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}
