
let outputText = document.getElementById('output-text__textarea')

let encriptarButton = document.getElementsByClassName('input-container__buttons__encriptar')[0]

const handleEncriptarButton = () => {
  let text = document.getElementById('text')
  console.log('text:',text);
  let newText = encriptar(text.value)
  let outputText = document.getElementById('output-text__textarea')
  console.log('newText:', newText);
  outputText.innerText = newText
}
encriptarButton.onclick = handleEncriptarButton
console.log(encriptarButton);


const encriptacion ={
  'a': 'ai',
  'e' : 'enter',
  'i' : 'imes',
  'o' : 'ober',
  'u' : 'ufat'
}

const desencriptacion = {
  'ai':'a' ,
  'enter' : 'e',
  'imes' : 'i',
  'ober' : 'o',
  'ufat' : 'u'
}

function encriptar(texto) {
  texto = texto.replace(/a|e|i|o|u/g, function(matched){
    return encriptacion[matched];
  });
  return texto
}

function desencriptar(texto) {
  texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(matched){
    return desencriptacion[matched];
  });
  return texto
}