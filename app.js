

let montoDisponible=document.getElementById('montoDisponible') //Ingresos

let ing=document.getElementById('ing') //Muestra de ingreso no modificable

let misGastos=document.getElementById('misGastos')//Suma de los gastos realizados

let misMontos=document.getElementById('misMontos')//Dinero disponible

let btnIngresos=document.getElementById('btnIngresos')//Boton ingresos

let concepto=document.getElementById('concepto')//concepto

let monto=document.getElementById('monto')//monto

let listaGastos=document.getElementById('listaGastos')//ul gastos

let btnGastosMq=document.getElementById('btnGastosMq')

let btnEliminar = document.getElementsByClassName('eliminar')






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

listaGastos.innerHTML+= `<li id="eg">${concepto} <span id="supGasto">${monto}</span> <Button class="eliminar"><i class="bi bi-trash3-fill " ></i></Button></li> `



gastoActualizado= Number(gastoActualizado)+Number(monto)


misGastos.innerHTML=`$${gastoActualizado}`

montoActualizado=Number(montoActualizado)-Number(monto)

misMontos.innerHTML=`$<span class=misMonts>${montoActualizado}</span>`

if(montoActualizado<0){misMontos.style.color="red"}


return montoActualizado

}


const eliminarLi = () => {console.log('Hola') }

btnGastos.addEventListener('click',ingresoGastos)

btnGastosMq.addEventListener('click',ingresoGastos)//Botón de Media Queries



listaGastos.addEventListener('click',(event)=>{
    
    let eg=document.getElementById('eg')

    let supGasto=Number(document.getElementById('supGasto').value)
    
     eg.remove()

     
   console.log(montoActualizado)

  

   console.log(supGasto)




     //let misMontos=document.getElementById(Number('misMontos'))//Dinero disponible

     //let resultado = misMontos+number

     //console.log(resultado)

    /*  misMontos.innerHTML = `${resultado}` */
     

}


)














