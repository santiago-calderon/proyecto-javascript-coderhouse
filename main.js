

class propiedad{
    constructor(zona,tipo,ambientes,metroscuadrados,condicion,disponibilidad){
        this.zona=zona
        this.tipo=tipo
        this.ambientes=ambientes
        this.metroscuadrados=metroscuadrados
        this.condicion=condicion
        this.disponibilidad=disponibilidad
    }

}

const propiedades= []


let prop1 = new propiedad("caballito","casa",2,35,"alquilar",true)
let prop2 = new propiedad("devoto","casa",2,30,"alquilar",true)
let prop3 = new propiedad("flores","departamento",1,20,"compra",false)
let prop4 = new propiedad("caballito","departamento",4,50,"alquilar",true)
let prop5 = new propiedad("la boca","departamento",3,42,"compra",false)

propiedades.push(prop1)
propiedades.push(prop2)
propiedades.push(prop3)
propiedades.push(prop4)
propiedades.push(prop5)


function agregarPropiedad(){
    let zona= prompt("En qué zona queda tu propiedad?").toLocaleLowerCase
    let tipo= prompt("Casa o departamento?").toLocaleLowerCase
    let cantidadAmbientes = Number(prompt("Cuantos ambientes?"));
    let metrosCuadrados =Number(prompt("cuantos metros cuadrados?"))
    let condicion = prompt("La queres vender o alquilar?").toLocaleLowerCase
    let disponiblidad = confirm("Ya está disponible?")

    let nuevaPropiedad = new propiedad(zona,tipo,cantidadAmbientes,metrosCuadrados,condicion,disponiblidad)

    propiedades.push(nuevaPropiedad)

}

function filtrarPropiedades () {

    let zona = prompt("En qué zona la queres?").toLocaleLowerCase
    let tipo = prompt("Casa o departamento?").toLocaleLowerCase
    let cantidadAmbientes = Number(prompt("Cuantos ambientes?"));
    let metrosCuadrados =Number(prompt("cuantos metros cuadrados?"))
    let condicion = prompt("Queres comprar o alquilar?").toLocaleLowerCase

    let filtroPropiedades = propiedades.filter(propiedad=> propiedad.zona === zona && propiedad.tipo === tipo && propiedad.ambientes === cantidadAmbientes && propiedad.metroscuadrados <= metrosCuadrados && propiedad.condicion === condicion && disponibilidad == true)

    if (filtroPropiedades.length === 0){
        console.log("En este momento no hay propiedades disponibles")

    }else{
            console.log(filtroPropiedades) 
        }
}

let desicionUsuario = prompt("Desea agregar o buscar propiedad?").toLowerCase()

if (desicionUsuario === "agregar"){
    agregarPropiedad()
    }else{
        filtrarPropiedades()
    }


