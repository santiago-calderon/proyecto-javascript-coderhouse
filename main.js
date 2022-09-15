class propiedad{
    constructor(id,zona,tipo,ambientes,metroscuadrados,condicion,disponibilidad){
        this.id=id
        this.zona=zona
        this.tipo=tipo
        this.ambientes=ambientes
        this.metroscuadrados=metroscuadrados
        this.condicion=condicion
        this.disponibilidad=disponibilidad
    }

}

const propiedades= []


let prop1 = new propiedad(1,"Caballito","casa",2,35,"alquilar",true)
let prop2 = new propiedad(2,"Devoto","casa",2,30,"alquilar",true)
let prop3 = new propiedad(3,"Flores","departamento",1,20,"compra",false)
let prop4 = new propiedad(4,"Caballito","departamento",4,50,"alquilar",true)
let prop5 = new propiedad(5,"La Boca","departamento",3,42,"compra",false)

propiedades.push(prop1)
propiedades.push(prop2)
propiedades.push(prop3)
propiedades.push(prop4)
propiedades.push(prop5)





const loadProps = (array) =>
{   
    let cards = document.querySelector('#cards'); 

    for (const propiedad of array)
    {   

        let div = document.createElement("div"); 
        div.innerHTML = 
        `
        <div class=" container col-lg-3 col-sm-6">
        <div class="card mt-5 mr-2" style="width: 18rem;">
        <div class="card-body  ">
          <h5 class="card-title">${propiedad.zona}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Tipo: ${propiedad.tipo}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Ambientes:${propiedad.ambientes}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Metros cuadrados:${propiedad.metroscuadrados}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Condición:${propiedad.condicion}</h6>
          <button type="button" class="btn btn-warning">Consultar</button>  
          <button type="button" class="btn btn-warning btn-favorites" id="${propiedad.id}">Favoritos</button>
          </div>
        </div>
        `
        ;
        cards.appendChild(div);
    }

}

loadProps(propiedades)

const clearDiv = () =>
{   
    document.querySelector('#cards').innerHTML = ''; 
}




const inputFiltrar = document.querySelector(".filter-search")

function filtrarProductos() { 
    inputFiltrar.value = inputFiltrar.value
    
    

        const resultado = propiedades.filter(propiedad => propiedad.zona.includes(inputFiltrar.value))
        clearDiv()
        loadProps(resultado)
           
  
}

inputFiltrar.addEventListener("input", filtrarProductos)


    /*
function filtrarPropiedades () {
    let zona = ("En qué zona la queres?").toLocaleLowerCase
    let tipo = ("Casa o departamento?").toLocaleLowerCase
    let cantidadAmbientes = Number(("Cuantos ambientes?"));
    let metrosCuadrados =Number(("cuantos metros cuadrados?"))
    let condicion = ("Queres comprar o alquilar?").toLocaleLowerCase
    let filtroPropiedades = propiedades.filter(propiedad=> propiedad.zona === zona && propiedad.tipo === tipo && propiedad.ambientes === cantidadAmbientes && propiedad.metroscuadrados <= metrosCuadrados && propiedad.condicion === condicion && disponibilidad == true)
    if (filtroPropiedades.length === 0){
        console.log("En este momento no hay propiedades disponibles")
    }else{
            console.log(filtroPropiedades) 
        }
}
let desicionUsuario = ("Desea agregar o buscar propiedad?").toLowerCase()
if (desicionUsuario === "agregar"){
    agregarPropiedad()
    }else{
        filtrarPropiedades()
    }
*/
/*
const loadEvents = ()=>
{
    let buttons = document.querySelectorAll('.btn-favorites')
    for (const button of buttons ){
            button.addEventListener("click", ()=>{
               if 
            })
    }
}
funcion para agregar productos a favoritos, despues la sigo haciendo
*/
/*
function agregarPropiedad(){
    let zona= ("En qué zona queda tu propiedad?").toLocaleLowerCase
    let tipo= ("Casa o departamento?").toLocaleLowerCase
    let cantidadAmbientes = Number(("Cuantos ambientes?"));
    let metrosCuadrados =Number(("cuantos metros cuadrados?"))
    let condicion = ("La queres vender o alquilar?").toLocaleLowerCase
    let disponiblidad = confirm("Ya está disponible?")
    let nuevaPropiedad = new propiedad(zona,tipo,cantidadAmbientes,metrosCuadrados,condicion,disponiblidad)
    propiedades.push(nuevaPropiedad)
}
*/