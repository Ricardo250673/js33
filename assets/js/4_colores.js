const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const color4 = document.querySelector(".color4")

function pintarNegro(ele){
    ele.style.background = "black"
}

color1.addEventListener("click", () => {
    pintarNegro(color1)
})
color2.addEventListener("click", () => {
    pintarNegro(color2)
})
color3.addEventListener("click", () => {
    pintarNegro(color3)
})
color4.addEventListener("click", () => {
    pintarNegro(color4)
})

