let encriptarButton = document.querySelector('.input-container__buttons__encriptar')
let desencriptarButton = document.querySelector('.input-container__buttons__desencriptar')

const handleEncriptarButton = () => {
  let text = document.getElementById('text')
  if (text.value !== ''){
    let newText = encriptar(text.value)
    let outputText = document.getElementById('output-text__textarea')
    outputText.innerText = newText
    showOutput()
  }else {
    hideOutput()
  }
}
encriptarButton.onclick = handleEncriptarButton
console.log(encriptarButton);

const handleDesencriptarButton = () => {
  let text = document.getElementById('text')
  if (text.value !== ''){
    let newText = desencriptar(text.value)
    let outputText = document.getElementById('output-text__textarea')
    outputText.innerText = newText
    showOutput()
  }else {
    hideOutput()
  }
}
desencriptarButton.onclick = handleDesencriptarButton


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

window.onclose(()=>copyButton.removeEventListener("click"))