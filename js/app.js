/* ==================== CONVERTIDOR TEXTO-BINARIO - JAVASCRIPT ====================
 * Archivo: app.js
 * Descripción: Lógica principal de la aplicación
 * Autor: Kelvin Piña Gomez
 * Fecha: Octubre 2025
 * ============================================================================= */

// ==================== ELEMENTOS DEL DOM ====================
const textInput = document.getElementById('textInput');
const binaryInput = document.getElementById('binaryInput');
const binaryResult = document.getElementById('binaryResult');
const textResult = document.getElementById('textResult');
const errorMessage = document.getElementById('errorMessage');
const convertToBinaryBtn = document.getElementById('convertToBinary');
const convertToTextBtn = document.getElementById('convertToText');
const copyBinaryBtn = document.getElementById('copyBinary');
const copyTextBtn = document.getElementById('copyText');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const notification = document.getElementById('notification');

// ==================== FUNCIONES DE CONVERSIÓN ====================

/**
 * Convierte un texto a binario usando UTF-8
 * Cada carácter se convierte a su representación binaria de 8 bits
 * @param {string} text - Texto a convertir
 * @returns {string} - Representación binaria separada por espacios
 */
function textToBinary(text) {
    // Usar TextEncoder para manejar UTF-8 correctamente (emojis, acentos, etc.)
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(text);
    
    // Convertir cada byte a binario de 8 bits
    const binaryArray = Array.from(uint8Array).map(byte => {
        return byte.toString(2).padStart(8, '0');
    });
    
    return binaryArray.join(' ');
}

/**
 * Convierte binario a texto usando UTF-8
 * Valida que el binario sea correcto antes de convertir
 * @param {string} binary - Código binario separado por espacios
 * @returns {object} - {success: boolean, text: string, error: string}
 */
function binaryToText(binary) {
    // Limpiar espacios extra y saltos de línea
    binary = binary.trim().replace(/\s+/g, ' ');
    
    // Validar que solo contenga 0s, 1s y espacios
    if (!/^[01\s]+$/.test(binary)) {
        return {
            success: false,
            text: '',
            error: 'El binario solo debe contener 0s y 1s.'
        };
    }

    // Dividir por espacios
    const binaryArray = binary.split(' ').filter(b => b.length > 0);
    
    // Validar que cada grupo tenga 8 bits
    for (let bin of binaryArray) {
        if (bin.length !== 8) {
            return {
                success: false,
                text: '',
                error: 'Cada grupo debe tener exactamente 8 bits.'
            };
        }
    }

    try {
        // Convertir cada grupo de 8 bits a un byte
        const uint8Array = new Uint8Array(
            binaryArray.map(bin => parseInt(bin, 2))
        );
        
        // Usar TextDecoder para decodificar UTF-8
        const decoder = new TextDecoder('utf-8');
        const text = decoder.decode(uint8Array);
        
        return {
            success: true,
            text: text,
            error: ''
        };
    } catch (error) {
        return {
            success: false,
            text: '',
            error: 'Error al decodificar el binario. Verifica que sea válido.'
        };
    }
}

// ==================== EVENT LISTENERS ====================

/**
 * Convierte texto a binario cuando se hace clic en el botón
 */
convertToBinaryBtn.addEventListener('click', () => {
    const text = textInput.value;
    
    if (!text.trim()) {
        binaryResult.textContent = 'Por favor, ingresa algún texto.';
        binaryResult.classList.add('show');
        copyBinaryBtn.classList.add('hidden');
        return;
    }

    const binary = textToBinary(text);
    binaryResult.textContent = binary;
    binaryResult.classList.add('show');
    copyBinaryBtn.classList.remove('hidden');
});

/**
 * Convierte binario a texto cuando se hace clic en el botón
 */
convertToTextBtn.addEventListener('click', () => {
    const binary = binaryInput.value;
    
    if (!binary.trim()) {
        textResult.textContent = 'Por favor, ingresa código binario.';
        textResult.classList.add('show');
        errorMessage.classList.remove('show');
        copyTextBtn.classList.add('hidden');
        return;
    }

    const result = binaryToText(binary);
    
    if (result.success) {
        textResult.textContent = result.text;
        textResult.classList.add('show');
        errorMessage.classList.remove('show');
        copyTextBtn.classList.remove('hidden');
    } else {
        errorMessage.textContent = `⚠️ Error: ${result.error}`;
        errorMessage.classList.add('show');
        textResult.classList.remove('show');
        copyTextBtn.classList.add('hidden');
    }
});

/**
 * Copia el resultado binario al portapapeles
 */
copyBinaryBtn.addEventListener('click', () => {
    const text = binaryResult.textContent;
    copyToClipboard(text);
});

/**
 * Copia el resultado de texto al portapapeles
 */
copyTextBtn.addEventListener('click', () => {
    const text = textResult.textContent;
    copyToClipboard(text);
});

/**
 * Función auxiliar para copiar texto al portapapeles
 * @param {string} text - Texto a copiar
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification();
    }).catch(err => {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification();
    });
}

/**
 * Muestra la notificación de copiado
 */
function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ==================== TEMA OSCURO/CLARO ====================

/**
 * Cambia entre tema claro y oscuro
 */
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

/**
 * Cargar tema guardado al iniciar
 */
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }
});

// ==================== ATAJOS DE TECLADO ====================

/**
 * Permite convertir con Enter en los campos de texto
 */
textInput.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        convertToBinaryBtn.click();
    }
});

binaryInput.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        convertToTextBtn.click();
    }
});

// ==================== PRUEBAS AUTOMÁTICAS (OPCIONAL) ====================

/**
 * Función de prueba para verificar que las conversiones sean correctas
 * Descomentar para ejecutar pruebas en la consola
 */
/*
function runTests() {
    console.log('Ejecutando pruebas...');
    
    // Prueba 1: Texto simple
    const test1 = 'Hola';
    const binary1 = textToBinary(test1);
    const result1 = binaryToText(binary1);
    console.assert(result1.text === test1, 'Prueba 1 falló: Texto simple');
    
    // Prueba 2: Texto con acentos
    const test2 = 'Hóla múndo';
    const binary2 = textToBinary(test2);
    const result2 = binaryToText(binary2);
    console.assert(result2.text === test2, 'Prueba 2 falló: Texto con acentos');
    
    // Prueba 3: Emojis
    const test3 = '¡Hola! 🌍🎉';
    const binary3 = textToBinary(test3);
    const result3 = binaryToText(binary3);
    console.assert(result3.text === test3, 'Prueba 3 falló: Emojis');
    
    console.log('Todas las pruebas completadas.');
}

// Ejecutar pruebas al cargar (descomentar si deseas)
// runTests();
*/

// ==================== EXPORT PARA TESTING (OPCIONAL) ====================
// Si en el futuro quieres usar módulos ES6 o testing frameworks
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        textToBinary,
        binaryToText
    };
}
