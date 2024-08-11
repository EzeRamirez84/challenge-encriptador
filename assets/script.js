let encriptarButton = document.querySelector('.input-container__buttons__encriptar')
let desencriptarButton = document.querySelector('.input-container__buttons__desencriptar')

const regExp = /^[^A-ZÀ-ÿ]*$/

//'callback' va a ser para encriptar o desencriptar dependiendo de que boton sea
const handleButton = (callback) => {
  let text = document.getElementById('text')
  if (text.value !== ''){
    if(!verificarTexto(text.value)){
      alert('Solo letras minúsculas y sin acentos')
      
    }else{
      let newText = callback(text.value)
      let outputText = document.getElementById('output-text__textarea')
      outputText.innerText = newText
      showOutput()
    }
    
  }else {
    hideOutput()
  }
}
encriptarButton.onclick = ()=>handleButton(encriptar)

desencriptarButton.onclick = ()=>handleButton(desencriptar)


function showOutput() {

  let noOutputView = document.querySelector('.no-output')
  noOutputView.style.visibility = "hidden"
  noOutputView.style.display = "none"

  let outputTextView = document.querySelector('.output-text')
  outputTextView.style.visibility = "visible"
  outputTextView.style.display = "flex"
}

function hideOutput() {

  let noOutputView = document.querySelector('.no-output')
  noOutputView.style.visibility = "visible"
  noOutputView.style.display = "flex"

  let outputTextView = document.querySelector('.output-text')
  outputTextView.style.visibility = "hidden"
  outputTextView.style.display = "none"
}

const encriptacion = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
}

const desencriptacion = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u'
}

function encriptar(texto) {
  texto = texto.replace(/a|e|i|o|u/g, function (matched) {
    return encriptacion[matched];
  });
  return texto
}

function desencriptar(texto) {
  texto = texto.replace(/ai|enter|imes|ober|ufat/g, function (matched) {
    return desencriptacion[matched];
  });
  return texto
}

//funcionalidad copiar con boton
let copyButton = document.getElementById('copy')
copyButton.addEventListener("click",() => writeClipboardText())

async function writeClipboardText() {
  try {
    let text = document.getElementById('output-text__textarea').value
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

//funcionalidad pegar con boton
let pasteButton = document.querySelector('.button-pegar')
pasteButton.addEventListener("click",() => copyClipboardText())

async function copyClipboardText() {
  const text = document.getElementById('text')
  navigator.clipboard
    .readText()
    .then((clipText) => (text.value = clipText));
}


//funcionalidad verificar minusculas y sin acentos

function verificarTexto(text) {
  return regExp.test(text);
}