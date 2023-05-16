// Métodos de array (map, filter, reduce, etc.)
let marca = {
    nome: "Fiat"
}
let marcaChevrolet = {
    nome: "Chevrolet"
}

let objetoCarro1 = {
    nome: "Siena",
    marca,
    ano: 2007
}

let objetoCarro2 = {
    nome: "Renegade",
    marca: {nome: 'Jeep'},
    ano: 2007
}

let objetoCarro3 = {
    nome: "Onix",
    marca: marcaChevrolet,
    ano: 2007
}

const arrayCarros = [objetoCarro1, objetoCarro2, objetoCarro3]

console.log(objetoCarro3.marca.nome)
console.log(objetoCarro1.marca)

console.log(arrayCarros[1].marca.nome)
console.log(arrayCarros[0].marca)

//Método map: O método map cria um novo array com os resultados de uma função chamada em cada elemento do array original.
//Ele mapeia cada elemento para um novo valor de acordo com a função fornecida.
//O novo array terá o mesmo comprimento do original.

// ### 1 forma de fazer ###
const arrayNomeCarros = [];
for(const carro of arrayCarros){
    arrayNomeCarros.push(carro.nome)    
}
console.log(arrayNomeCarros)

// ### 2 forma de fazer (mais comum/profissional) ###
const arrayNomeCarrosMap2 = arrayCarros.map(carro => {
    return carro.nome;
})
console.log(arrayNomeCarrosMap2)

//Método filter: 
const arrayOnix = []
for(const carro of arrayCarros){
    if (carro.nome === "Onix") {
        arrayOnix.push(carro)    
    }
}
console.log(arrayOnix)

const arrayOnixFilter = arrayCarros.filter(item => {
    return item.nome === "Onix"
})
console.log(arrayOnixFilter)

const arrayOnixFilter2 = arrayCarros.filter(item => (item.nome === "Onix"))
console.log(arrayOnixFilter2)