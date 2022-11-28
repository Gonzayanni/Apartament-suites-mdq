
// varibles depto 2

const mostrarDetallesButtonDos=document.querySelector(".mostrar-detalles-master-container-seg-depto");
const detallesExplicitosContainerDos=document.querySelector(".detalles-explicitos-container-seg-depto");
const cerrarDetallesIconDos=document.querySelector(".boton-cerrar-seg-depto");


// event listeners
detallesExplicitosContainerDos.addEventListener("click",cerrarDetalles);

mostrarDetallesButtonDos.addEventListener("click",mostrarDetalles);




cerrarDetallesIconDos.addEventListener("click",cerrarDetalles);




// functions
function cerrarDetalles(e){
    if(e.target===detallesExplicitosContainerDos|| e.target===cerrarDetallesIconDos){
        detallesExplicitosContainerDos.classList.remove("show-detailsDos");
    }

        
}

function mostrarDetalles(e){    
    console.log(e.target)
    detallesExplicitosContainerDos.classList.add("show-detailsDos");
}