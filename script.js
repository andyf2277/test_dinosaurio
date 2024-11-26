function calcularResultado() {
    const form = document.getElementById('quizForm');
    let score = 0;

    // Sumar puntos según las respuestas seleccionadas
    for (let i = 1; i <= 7; i++) {
        const respuesta = form[`q${i}`].value;
        if (respuesta) {
            score += parseInt(respuesta);
        }
    }

    // Determinar el resultado basado en el puntaje
    let resultado;
    if (score >= 7 && score <= 12) {
    } 
    else if (score >= 13 && score <= 18) {
        resultado = "Eres un Velociraptor.";
    } else if (score >= 19 && score <= 23) {
        resultado = "Eres un Pterodáctilo.";
    } else if (score >= 24 && score <= 28) {
        resultado = "Eres un Triceratops.";
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerText = resultado;
}
