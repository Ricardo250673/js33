const key = document.querySelector(".caja")

function creaCuadrado(color){
    const crearDiv = document.createElement('div')

    crearDiv.style.width = "200px"
    crearDiv.style.height = "200px"
    crearDiv.style.backgroundColor = color
    crearDiv.style.margin = "2px"

    key.appendChild(crearDiv)
}

const key2 = document.querySelector("#key")

document.addEventListener("keydown", function(e){

if (e.key === "q"){
    creaCuadrado("violet")
} else if (e.key === "w"){
    creaCuadrado("grey")
} else if (e.key === "e"){
    creaCuadrado("brown")
} else if (e.key === "a"){
    key2.style.background = "pink"
} else if (e.key === "s"){
    key2.style.background = "orange"
} else if (e.key === "d"){
    key2.style.background = "LightBlue"
}  
}
)
