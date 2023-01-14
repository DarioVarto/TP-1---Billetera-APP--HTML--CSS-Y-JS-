"use strict"

let montoDisponible=Number(document.getElementById('montoDisponible').value) //Ingresos

let ing=document.getElementById('ing') //Muestra de ingreso no modificable

let misGastos=Number(document.getElementById('misGastos'))//Suma de los gastos realizados

let misMontos=Number(document.getElementById('misMontos'))//Dinero disponible

let btnIngresos=document.getElementById('btnIngresos')//Boton ingresos

let concepto=document.getElementById('concepto')//concepto

let monto=document.getElementById('monto')//monto

let listaGastos=document.getElementById('listaGastos')//ul gastos




const ingreso = () => {

                        let montoDisponible=Number(document.getElementById('montoDisponible').value)
    
                        let ing=document.getElementById('ing') 
   
                         ing.innerHTML=`$${montoDisponible}`
    
                         let misMontos=document.getElementById('misMontos')
   
                         misMontos.innerHTML=`$${montoDisponible}`

}


btnIngresos.addEventListener('click',ingreso)


let btnGastos=document.getElementById('btnGastos')


const ingresoGastos = () => { 

                            let concepto=document.getElementById('concepto').value 

let monto=Number(document.getElementById('monto').value)

let listaGastos=document.getElementById('listaGastos')

listaGastos.innerHTML+= `<li>${concepto} ${monto} <i class="bi bi-trash3-fill" id="eliminarGasto"></i></li>`


}


btnGastos.addEventListener('click',ingresoGastos)

