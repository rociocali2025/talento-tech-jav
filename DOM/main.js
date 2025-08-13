const v1= "tio ben";
const v2= "recuerda lo siguiente";
const v3= "un gran poder requiere una gran responsabilidad";
const v4= "ten cuidado con el duende verde";

const spiderman =(peligro)=>{
    if (peligro == true){
        return `como decia el ${v1} ${v2} ${v3}`;
    }else{
        return `como decia el ${v1} ${v4}`;
    }
};
 

const titulo = documento.createElement("h1");
titulo.textContent ="hola me llamo spiderman"
document.body.appendChild(titulo);

// crear botones
const boton= document.createElement("button");
const boton2= document.createElement("button");

boton.innertext="peligro";
boton2.innertext="No peligro";

// Añadir botones a la pagina
document.body.appendChild(boton);
document.body.appendChild(boton2);


// Eventos
boton.addEventListener("click",()=>{
    const peligro= true;
    const recordando= spiderman(peligro);
    windows.location.href="index.html";
    document.body.innerHTML=`<h1>${recordando}</h1>
    <button id ='boton2'><a href='index.html'>volver</a></button>`;
    
    boton2,addEventListener

})




