

let montoDisponible=document.getElementById('montoDisponible') //Ingresos

let ing=document.getElementById('ing') //Muestra de ingreso no modificable

let misGastos=document.getElementById('misGastos')//Suma de los gastos realizados

let misMontos=document.getElementById('misMontos')//Dinero disponible

let btnIngresos=document.getElementById('btnIngresos')//Boton ingresos

let concepto=document.getElementById('concepto')//concepto

let monto=Number(document.getElementById('monto').value)//monto

let listaGastos=document.getElementById('listaGastos')//ul gastos

let btnGastosMq=document.getElementById('btnGastosMq')

let btnEliminar = document.getElementsByClassName('eliminar')

let array = []




let gastoActualizado=0

let montoActualizado=0

                                                        //Función ingreso

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

                                                    //Agregar gastos



let btnGastos=document.getElementById('btnGastos')



    


    
   /*  montoActualizado=montoActualizado+valor
    montoActualizado.innerHTML=montoActualizado */


    
            
    
    
    
    
    

  /*   montoActualizado=Number(montoActualizado)+Number(monto)
    
   

    misMontos.innerHTML=montoActualizado

   gastoActualizado= Number(gastoActualizado)-Number(monto) 
   
   gastoActualizado.innerHTML=gastoActualizado */

    
        




   


const ingresoGastos = () => { 

let concepto=document.getElementById('concepto').value 

let monto=Number(document.getElementById('monto').value)

let listaGastos=document.getElementById('listaGastos')

listaGastos.innerHTML+= `<li id="eg">${concepto} <span id="supGasto">${monto}</span> <Button id="eliminar"><i class="bi bi-trash3-fill " ></i></Button></li> `


let eliminar=document.getElementById("eliminar")



}

eliminar.addEventListener('click',eliminarLi)

const eliminarLi = () => {

    let valorEliminar = document.getElementById('supGasto')
   
    let valor = Number(valorEliminar.innerHTML)
   
    let eg=document.getElementById('eg')
   
   eg.remove()}
   

/* if(true){



gastoActualizado= Number(gastoActualizado)+Number(monto)

misGastos.innerHTML=`$${gastoActualizado}`

montoActualizado=Number(montoActualizado)-Number(monto)


misMontos.innerHTML=`$<span class=misMonts>${montoActualizado}</span>`

if(montoActualizado<0){misMontos.style.color="red"}
} */

/* listaGastos.addEventListener('click',eliminarLi) */








btnGastos.addEventListener('click',ingresoGastos)

btnGastosMq.addEventListener('click',ingresoGastos)//Botón de Media Queries





   /*  if(true){
        
    
        resultado=montoActualizado+valor
    
        resultado2=gastoActualizado-valor
        misMontos.innerHTML=`$${resultado}`
    
        misGastos.innerHTML=`$${resultado2}`
    } */












/* const actualizar = (parametro) => { 
{
    montoActualizado=Number(montoActualizado)+Number(monto)

misMontos.innerHTML=`$<span class=misMonts>${montoActualizado}</span>`
}
}
   */

    
/*     listaGastos.addEventListener('click',actualizar) */


 

   /*  let supGasto=document.getElementsByClassName(Number('supGasto').value) */

   




     //let misMontos=document.getElementById(Number('misMontos'))//Dinero disponible

     //let resultado = misMontos+number

     //console.log(resultado)

    /*  misMontos.innerHTML = `${resultado}` */
     

/* }


) */

/* if(listaGastos.addEventListener('click',eliminarLi)){

    montoActualizado=Number(montoActualizado)+Number(monto)

misMontos.innerHTML=`$<span class=misMonts>${montoActualizado}</span>`} */













