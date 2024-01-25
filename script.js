function procesar() {
  var texto = document.getElementById('texto').value.toLowerCase();
  var opcion = document.getElementById('opcion').value;
  var resultado = '';

  for (var i = 0; i < texto.length; i++) {
      switch (texto[i]) {
          case 'e':
              resultado += 'enter';
              break;
          case 'i':
              resultado += 'imes';
              break;
          case 'a':
              resultado += 'ai';
              break;
          case 'o':
              resultado += 'ober';
              break;
          case 'u':
              resultado += 'ufat';
              break;
          default:
              resultado += texto[i];
      }
  }

  if (opcion === 'desencriptar') {
      resultado = desencriptar(resultado);
  }

  document.getElementById('resultado').value = resultado;
}

function desencriptar(texto) {
  return texto.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copiarResultado() {
  var resultado = document.getElementById('resultado');
  resultado.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles: ' + resultado.value);
}
