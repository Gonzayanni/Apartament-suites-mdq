// variables
const mostrarDetallesButton=document.querySelector(".mostrar-detalles-master-container");
const detallesExplicitosContainer=document.querySelector(".detalles-explicitos-container");
const cerrarDetallesIcon=document.querySelector(".boton-cerrar");



// event listeners
detallesExplicitosContainer.addEventListener("click",cerrarDetalles);

mostrarDetallesButton.addEventListener("click",mostrarDetalles)

cerrarDetallesIcon.addEventListener("click",cerrarDetalles);




// functions
function cerrarDetalles(e){
    if(e.target===detallesExplicitosContainer|| e.target===cerrarDetallesIcon){
        detallesExplicitosContainer.classList.remove("show-details");
    }

        
}

function mostrarDetalles(e){    
    detallesExplicitosContainer.classList.add("show-details");
}





   
