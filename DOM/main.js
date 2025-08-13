const v1= "tio ben";
const v2= "recuerda lo siguiente";
const v3= "un gran poder requiere una gran responsabilidad";
const v4= "ten cuidado con el duende verde";

const spiderman =(peligro)=>{
    if (peligro == true){
        return `como decia el ${v1} ${v2} ${v3}`;
    }else{
        retur `como decia el ${v1} ${v4}`;
    }
};
 

const titulo = documento.createElement("h1");
titulo.textContent ="hola me llamo spiderman"
document.body.appendChild(titulo);

// crear un boton javas
const boton= document.createElement("button");
const boton2= document.createElement("button");

boton,innertext="peligro";
boton2,innertext="No peligro";

// mandar pagina
document.bodydy.appendChild(boton);
document.bodydy.appendChild(boton2);


// hacer m
boton.addEventListener("click",()=>{
    peligro= false;
    recordando= spiderman(peligro);
    windows.location.href="index.html";
    document.body.innerHTML=`<h1>${recordando}</h1>
    <button id ='boton2'><a hrf='index.html'>volver</a>/button>`;

})




