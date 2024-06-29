function reordenarCadenas() {
    const cadenaNumerica = prompt("Introduce una cadena numérica:");
    const cortes = prompt("Introduce un número de al menos 2 dígitos para los cortes de la cadena:");

    // Convertimos la cadena numérica a un array de números
    let numeros = cadenaNumerica.split(',').map(numero => numero.trim());

    // Verificamos que el número de cortes tenga al menos 2 dígitos
    if (cortes.length < 2) {
        alert("El número de cortes debe tener al menos 2 dígitos.");
        return;
    }

    let nuevaCadena = [...numeros]; // Inicializamos la nueva cadena con la cadena original

    // Iteramos hasta que no queden dígitos en el número proporcionado
    let i = 0;
    while (i + 1 < cortes.length) {
        // Extraemos los dígitos para los cortes en esta iteración
        const corte1 = parseInt(cortes[i], 10);
        const corte2 = parseInt(cortes[i + 1], 10);

        // Verificamos si el primer número de cada par es mayor
        if (corte1 > corte2) {
            // Salteamos este par y avanzamos al siguiente par
            i += 2;
            continue;
        }

        // Realizamos los cortes de acuerdo a las especificaciones
        const inicio = nuevaCadena.slice(0, corte1);
        const medio = nuevaCadena.slice(corte1, corte2);
        const final = nuevaCadena.slice(corte2);

        // Creamos la nueva cadena con los elementos reordenados
        nuevaCadena = medio.concat(inicio, final);

        // Incrementamos el índice para la próxima iteración
        i += 2;
    }

    // Mostramos el resultado en la página
    const resultado = `Nueva cadena: ${nuevaCadena.join(', ')}`;
    document.getElementById('resultado').innerText = resultado;
}

// Llamamos a la función para que se ejecute cuando se carga la página
reordenarCadenas();
