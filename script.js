let salarioBruto = document.getElementById('salarioBruto');
let btnCalcular = document.getElementById('btnCalcular');
let montoNeto = document.getElementById('montoNeto');
let porcentaje = document.getElementById('porcentaje');
let porcent=0;

btnCalcular.addEventListener("click", function(){
    let salarioBrutoNum = Number(salarioBruto.value);
    let nuevoSalario=0;

    if(salarioBrutoNum<=0){
        nuevoSalario=0;
        porcent=0;
        salarioBruto.value=0;
        montoNeto.textContent = nuevoSalario;
        porcentaje.textContent = porcent;
        return
    }

    if(salarioBrutoNum>=30000){
        nuevoSalario= salarioBrutoNum-(salarioBrutoNum*0.2);
        porcent= 20;
        porcentaje.style.color="red";
    }else{
        nuevoSalario= salarioBrutoNum-(salarioBrutoNum*0.15);
        porcent= 15;
        porcentaje.style.color="green";
    }

    porcentaje.style.fontSize="18";
    porcentaje.style.fontWeight="600";

    montoNeto.textContent = nuevoSalario;
    porcentaje.textContent = porcent;
});