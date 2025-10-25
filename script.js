let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Flechas para avanzar y retroceder en los proyectos
const container = document.querySelector('.projects-container');
const cards = document.querySelectorAll('.project-card');
let index = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  container.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  container.style.transform = `translateX(-${index * 100}%)`;
});
