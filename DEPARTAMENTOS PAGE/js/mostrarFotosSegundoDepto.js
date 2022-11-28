const containerFotosDos=document.querySelector(".fotos-cuando-clickeen-dos");


const imagenGaleriaDos=document.querySelectorAll(".imagen.galeria")
const mostrarFotosButtonDos=document.querySelector(".mostrar-fotos");
const cerrarGaleriaDos=document.querySelectorAll(".container-x-icon");
const fotoPrincipalDos=document.querySelectorAll(".foto-principal-seg-depto");
const fotoSecundariaDos=document.querySelectorAll(".fotos-secundarias-container-seg-depto");



// event listeners

mostrarFotosButtonDos.addEventListener("click",mostrarGaleriaFotos);

fotoPrincipalDos.forEach(ftPrinc=>{
    ftPrinc.addEventListener("click",mostrarGaleriaFotos)
}
    
    )


fotoSecundariaDos.forEach(ftSecundaria=>{
    ftSecundaria.addEventListener("click", mostrarGaleriaFotos )
}
)
       

 


   
    cerrarGaleriaDos.forEach(botonCerrar=>{
        botonCerrar.addEventListener("click",cerrarGaleriaFotos);
    })

// functions

function mostrarGaleriaFotos(e){
    
    containerFotosDos.classList.add("show")

   }



   function cerrarGaleriaFotos(){
    containerFotosDos.classList.remove("show")

  

    }
       
    

    
   