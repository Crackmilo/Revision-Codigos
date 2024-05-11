// Escribe tu código aquí.

// Funcion de strigns
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

function palabras(str, array){
    return array.filter(frase => frase.length > str.length);
}

// Funcion que devuelve las palabras
function devolverPalabras(array){
    const ul = document.createElement('ul');
    array.forEach(frase => {
        const li = document.createElement('li');
        li.textContent = frase;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);

}

// Funcion para el clik 
function boton(){
    const entradaPalabra = document.getElementById('entradaPalabra').value;
    const filtroArray = palabras(entradaPalabra,myArray )
    devolverPalabras(filtroArray);
    console.log(filtroArray);

}