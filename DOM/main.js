const v1 = "tio ben";
const v2 = "recuerda lo siguiente";
const v3 = "un gran poder requiere una gran responsabilidad";
const v4 = "ten cuidado con el duende verde";

const spiderman = (peligro) => {
    if (peligro == true) {
        return `como decia el ${v1} ${v2} ${v3}`;
    } else {
        return `como decia el ${v1} ${v4}`;
    }
};

// Crear título
const titulo = document.createElement("h1");
titulo.textContent = "hola me llamo spiderman";
document.body.appendChild(titulo);

// Crear botones
const boton = document.createElement("button");
const boton2 = document.createElement("button");

boton.innerText = "peligro";
boton2.innerText = "No peligro";

// Añadir botones a la página
document.body.appendChild(boton);
document.body.appendChild(boton2);

// Eventos
boton.addEventListener("click", () => {
    const peligro = true;
    const recordando = spiderman(peligro);
    document.body.innerHTML = `<h1>${recordando}</h1>
    <a href='index.html'><button>volver</button></a>`;
});

boton2.addEventListener("click", () => {
    const peligro = false;
    const recordando = spiderman(peligro);
    document.body.innerHTML = `<h1>${recordando}</h1>
    <a href='index.html'><button>volver</button></a>`;
});