const API_ENDPOINT = 'https://yesno.wtf/api';

// Función para hacer la solicitud al API y mostrar la respuesta
function fetchAnswer() {
    // Obtenemos el valor del input
    const question = document.getElementById('input').value;
    // Validamos que la pregunta no esté vacía
    if (question.trim() === '') {
        document.getElementById('error').textContent = 'Please enter a question';
        return; // Salimos de la función si la pregunta está vacía
    }

    // Limpiamos cualquier mensaje de error previo
    document.getElementById('error').textContent = '';

    // Realizamos la solicitud al API
    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            // Mostramos la respuesta en el elemento con id "answer"
            document.getElementById('answer').textContent = data.answer;
            // Limpiamos el input después de 5 segundos
            setTimeout(() => {
                document.getElementById('input').value = '';
                document.getElementById('answer').textContent = '';
            }, 5000);
        })
        .catch(error => console.error('Error fetching answer:', error));
}

// Función para manejar el evento "click" del botón
function handleClick() {
    fetchAnswer(); // Llamamos a la función fetchAnswer
}

// Función para manejar la tecla "Enter" presionada en el input
function handleKeyEnter(event) {
    if (event.key === 'Enter') {
        fetchAnswer(); // Llamamos a la función fetchAnswer
    }
}

// Agregamos event listeners
document.getElementById('button').addEventListener('click', handleClick);
document.getElementById('input').addEventListener('keypress', handleKeyEnter);