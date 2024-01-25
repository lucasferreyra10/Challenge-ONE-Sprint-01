function encriptarTexto() {
    // Obtiene el texto de entrada
    var textoOriginal = document.getElementById("inputText").value;
  
    // Llamar a la función de encriptación
    var textoEncriptado = encriptarSustitucion(textoOriginal);
  
    // Muestra el texto encriptado en el área de salida
    document.getElementById("outputText").value = textoEncriptado;
  }
  
  function encriptarSustitucion(texto) {
    // Mapa de sustitución (puedes personalizarlo)
    var sustitucionMapa = {
      'a': 'z',
      'b': 'y',
      'c': 'x',
      'd': 'w',
      'e': 'v',
      'f': 'u',
      'g': 't',
      'h': 's',
      'i': 'r',
      'j': 'q',
      'k': 'p',
      'l': 'o',
      'm': 'n',
      'n': 'm',
      'o': 'l',
      'p': 'k',
      'q': 'j',
      'r': 'i',
      's': 'h',
      't': 'g',
      'u': 'f',
      'v': 'e',
      'w': 'd',
      'x': 'c',
      'y': 'b',
      'z': 'a',
      ' ': ' '
      // Agrega más caracteres si es necesario
    };
  
    // Convierte el texto a minúsculas para que sea insensible a mayúsculas/minúsculas
    texto = texto.toLowerCase();
  
    // Aplica la sustitución de caracteres
    var textoEncriptado = '';
    for (var i = 0; i < texto.length; i++) {
      var caracterOriginal = texto[i];
      var caracterEncriptado = sustitucionMapa[caracterOriginal] || caracterOriginal;
      textoEncriptado += caracterEncriptado;
    }
  
    return textoEncriptado;
  }
  