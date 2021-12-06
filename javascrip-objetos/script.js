
class Producto{
    constructor(nombre,precio,peso,cantidad){
        this.nombre = nombre
        this.precio = precio
        this.peso = peso
        this.cantidad =cantidad
    }
}
const producto1= new Producto ("jabon en polvo ", "$300","3kg","1")
const producto2 = new Producto("jabon liquido","$95","1L","1")
const producto3 = new Producto("pack de coca cola ","$500","220ml c/u","6")
console.log(producto1)
console.log(producto2)
console.log(producto3)







/* Esto lo coloque por que en el after lo pusieron con let en ves de const y cumplen casi la misma funcion en este ejercicio pues lo deje aqui por si acaso */

/*class Persona{
    constructor(name,edad){
        this.name = name 
        this.edad = edad  
    }

}
let persona = new Persona ("andres", "15")
let persona2 = new Persona ("Zamira")
console.log(persona)
console.log(persona2)
*/






/*esto lo tengo para no olvidarme de lo de lo que dijieron de for y maps*/
/* class Persona {
    constructor(name,edad){
        this.name = name
        this.edad = edad
    }
    modifico(){
        this.modifico = "ejemplo"
    }
}
let arr = [{name:"Gustavo", edad:25},{name:"Magali",edad:25}]
let arrayCreado = arr.forEach(function(elemento){
    return elemento.name
})

let arrayCreado2 = arr.map(function(elemento){
    return elemento.name
})
 console.log(arrayCreado2)   */