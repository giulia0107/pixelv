// ;Selecionando elementos no HTML
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {

//Se o menu está fechado
if(menu.classList.contains("menu-fechado")){
//Abrir o menu
menu.classList.remove("menu-fechado")

//Mostrar o icone X
iconeX.style.display = "inline"

//Esconder icone barras
iconeBarras.style.display = "none"

}
else{
    //fechar o menu
    menu.classList.add("menu-fechado")

    //Esconder o icone X
    iconeX.style.display = "none"

    //Mostrar icone barras 
    iconeBarras.style.display = "inline"
}

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //Mostrar o icone X
    iconeX.style.display = "inline"

    //Esconda o icone barras
    iconeBarras.style.display = "none"
}