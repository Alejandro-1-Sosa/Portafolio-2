.hero-content button .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #1cb698;
    z-index: -1;
    transition: 1s;
}

<script src="https://kit.fontawesome.com/2193d055c9.js" crossorigin="anonymous" ></script>

background-color: #1CB698;

 <div class="nav-responsive" onclick="mostrarOcultarMenu()">
            <i class="fa-solid fa-bars"></i>
        </div>

function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}