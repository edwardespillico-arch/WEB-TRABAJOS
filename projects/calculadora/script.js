// Obtener la referencia a la pantalla de resultado
const pantalla = document.getElementById('resultado');

/**
 * Agrega un valor (número o operador) a la pantalla de la calculadora.
 * @param {string} valor - El carácter a añadir.
 */
function agregarValor(valor) {
    pantalla.value += valor;
}

/**
 * Limpia la pantalla de la calculadora.
 */
function limpiar() {
    pantalla.value = '';
}

/**
 * Evalúa la expresión matemática actual en la pantalla y muestra el resultado.
 */
function calcular() {
    let expresion = pantalla.value;
    
    // Si la pantalla está vacía, no hace nada
    if (expresion === '') {
        return;
    }

    try {
        // La función 'eval()' evalúa la cadena de texto como código JavaScript.
        // Es la forma más sencilla de hacer operaciones matemáticas básicas
        // con una cadena de texto.
        let resultado = eval(expresion);
        pantalla.value = resultado;
    } catch (error) {
        // En caso de error (ej. dividir por cero, sintaxis incorrecta)
        pantalla.value = 'Error';
    }
}