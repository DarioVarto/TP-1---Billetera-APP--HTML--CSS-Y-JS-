



let btnIngreso=document.getElementById('btnIngresos')//Boton del ingreso fijo

let misGastos=document.getElementById('misGastos')//Muestra de gastos

let ingresosFijo=document.getElementById('ing')//Muestra de ingreso fijo

let disponible=0//Creo variable para actualizar dinero disponible

let gastos=""//Creo variable para actualizar gastos fijos

let listaGastos=document.getElementById('listaGastos')//Ul del HTML

let inputIngreso=Number(document.getElementById('montoDisponible').value)



const montDis = () => {

    
    let inputIngreso=Number(document.getElementById('montoDisponible').value)
    let misMontos=document.getElementById('misMontos') 
    disponible=inputIngreso
    misMontos.innerHTML=`$${disponible}`
    gastos=Number(0)
    misGastos.innerHTML=`$${gastos}`
    ingresosFijo.innerHTML=`$${inputIngreso}`
 }
 

 btnIngreso.addEventListener('click',montDis)



let btnGastos=document.getElementById('btnGastos')//Botón agregar gastos

let btnGastosMq=document.getElementById('btnGastosMq')//Botón agregar gastos Mq


const agregarLi = () => {

let concepto=document.getElementById('concepto').value

let monto=Number(document.getElementById('monto').value)



listaGastos.innerHTML+=`<li class="liGasto">
                        <span class="concepto">${concepto}</span>    
                        <span id="supGasto">${monto}</span>

                        <Button class="eliminar" id="${concepto}">
                        
                            <i class="bi bi-trash3-fill"></i>
                        
                        </Button></li>`
listaGastos.style.animation="aparecer 2s"

disponible=disponible-monto
gastos=Number(gastos)+monto



misMontos.innerHTML=`$${disponible}`

misGastos.innerHTML=`$${gastos}`

if(disponible<0){misMontos.style.color="red"}else{misMontos.style.color="rgb(0, 144, 85)"}






const eliminarLi = (btnEliminar) => {  //Función eliminar li 
  


    let ul = btnEliminar.target.parentNode.parentNode.parentNode  //Paso a la variable ul el elemento <ul> del html
    let li = btnEliminar.target.parentNode.parentNode             //Paso a la variable li el elemento <li> del html 
    let button = btnEliminar.target.parentNode                    // Llego al buton de la etiqueta <li>
    let span = Number(button.previousSibling.previousSibling.innerHTML)  //Accedo al valor del span (monto del gasto agregado en el li) a través de su hermano button
    ul.removeChild(li) 

   
   

    disponible=disponible+span //Actualización de monto disponible luego de eliminar <li>
     
    misMontos.innerHTML=`$${disponible}`
    gastos=gastos-span         //Actualización gasto luego de eliminar <li>
    misGastos.innerHTML=`$${gastos}`
    if(disponible<0){misMontos.style.color="red"}else{misMontos.style.color="rgb(0, 144, 85)"}
  }

 listaGastos.addEventListener('click',(event)=>{         //Traigo el evento hacia la ul
    if(event.target.className== "bi bi-trash3-fill" ){  //Focalizo el click en el i del boton eliminar
        eliminarLi(event)
    }
 })
 

 }
 btnGastos.addEventListener('click',agregarLi)
 btnGastosMq.addEventListener('click',agregarLi)
 
 const dsb = () => {montoDisponible.setAttribute("disabled", true)
 montoDisponible.setAttribute("placeholder", "")
 
 montoDisponible.value=""
 btnIngreso.setAttribute("disabled",true)
}

 btnIngresos.addEventListener('click',dsb)



 