let listaAmigos = []
let tamanoLista = listaAmigos.length;


function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    if (inputAmigo.value === "") {
        alert("Ingresa un nombre válido");
        return;
    } else {
        let nombre = inputAmigo.value;
        console.log("El nombre del amigo es: " + nombre);
        listaAmigos.push(nombre);
        document.getElementById('listaAmigos').innerHTML += listaAmigos[listaAmigos.length-1] + '<br>';
        inputAmigo.value = "";

    }
}

function sortearAmigo(){
    tamanoLista = listaAmigos.length;
    console.log("El tamaño de la lista es: " + tamanoLista);
    let amigoSecreto = Math.floor(Math.random()* tamanoLista);
    console.log("El número del amigo secreto es: " + amigoSecreto);
    console.log("El amigo secreto es: " + listaAmigos[amigoSecreto]);
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "El amigo secreto es: " + listaAmigos[amigoSecreto];
}





