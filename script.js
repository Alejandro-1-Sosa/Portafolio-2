let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = true;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function select(){
    // Oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}



