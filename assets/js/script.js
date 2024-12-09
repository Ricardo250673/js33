const hello = document.getElementById("hello")

hello.style.backgroundColor="green"

function pintarAmarillo(elemento,color){
    hello.style.backgroundColor=color
}

hello.addEventListener("click", function() {
    pintarAmarillo(hello,"yellow")
}
)