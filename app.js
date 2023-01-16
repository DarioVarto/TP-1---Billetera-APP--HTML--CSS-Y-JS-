"use strict"

let montoDisponible=document.getElementById('montoDisponible') //Ingresos

let ing=document.getElementById('ing') //Muestra de ingreso no modificable

let misGastos=document.getElementById('misGastos')//Suma de los gastos realizados

let misMontos=document.getElementById('misMontos')//Dinero disponible

let btnIngresos=document.getElementById('btnIngresos')//Boton ingresos

let concepto=document.getElementById('concepto')//concepto

let monto=document.getElementById('monto')//monto

let listaGastos=document.getElementById('listaGastos')//ul gastos

let btnGastosMq=document.getElementById('btnGastosMq')

let gastoActualizado=0

let montoActualizado=0



const ingreso = () => {

                        let montoDisponible=Number(document.getElementById('montoDisponible').value)
    
                        let ing=document.getElementById('ing') 
   
                         ing.innerHTML=`$${montoDisponible}`
    
                         let misMontos=document.getElementById('misMontos')
   
                         misMontos.innerHTML=`$${montoDisponible}`
                    
                         misGastos.innerHTML='$'+Number(0)

                         montoActualizado=Number(montoDisponible)
                         
                         
                        return montoActualizado
                         
                        

}

//Función para anular nueva vuelta de ingresos

const dsb = () => {montoDisponible.setAttribute("disabled", true)
montoDisponible.setAttribute("placeholder", "")

montoDisponible.value=""}



btnIngresos.addEventListener('click',ingreso)

btnIngresos.addEventListener('click',dsb)

/* btnIngresos.addEventListener('click',dsb) */



let btnGastos=document.getElementById('btnGastos')


const ingresoGastos = () => { 

let concepto=document.getElementById('concepto').value 

let monto=Number(document.getElementById('monto').value)

let listaGastos=document.getElementById('listaGastos')

listaGastos.innerHTML+= `<li>${concepto} ${monto} <i class="bi bi-trash3-fill" id="eliminarGasto"></i></li>`



gastoActualizado= Number(gastoActualizado)+Number(monto)


misGastos.innerHTML=`$${gastoActualizado}`

montoActualizado=Number(montoActualizado)-Number(monto)

misMontos.innerHTML=montoActualizado


}


btnGastos.addEventListener('click',ingresoGastos)

btnGastosMq.addEventListener('click',ingresoGastos)//Botón de Media Queries
