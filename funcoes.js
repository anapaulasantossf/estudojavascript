function novaFuncao(name){
    console.log("Retorno da nova função..."+name)
}

function novaFuncao2(){
  console.log("Retorno da nova função2...")
}

function novaFuncao3(){
  console.log("Retorno da nova função2...")
}

//CommonJS
module.exports = {
  novaFuncao,
  novaFuncao2,
  novaFuncao3
}
