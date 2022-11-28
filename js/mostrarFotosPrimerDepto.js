// variables

const containerFotos=document.querySelector(".fotos-cuando-clickeen");


const imagenGaleria=document.querySelectorAll(".imagen.galeria")
const mostrarFotosButton=document.querySelector(".mostrar-fotos");
const cerrarGaleria=document.querySelectorAll(".container-x-icon");
const fotoPrincipal=document.querySelectorAll(".foto-principal");
const fotoSecundaria=document.querySelectorAll(".fotos-secundarias-container");



// event listeners

mostrarFotosButton.addEventListener("click",mostrarGaleriaFotos);

fotoPrincipal.forEach(ftPrinc=>{
    ftPrinc.addEventListener("click",mostrarGaleriaFotos)
}
    
    )


fotoSecundaria.forEach(ftSecundaria=>{
    ftSecundaria.addEventListener("click", mostrarGaleriaFotos )
}
)
       

 


   
    cerrarGaleria.forEach(botonCerrar=>{
        botonCerrar.addEventListener("click",cerrarGaleriaFotos);
    })

// functions

function mostrarGaleriaFotos(e){
    
    containerFotos.classList.add("show")

   }



   function cerrarGaleriaFotos(){
    containerFotos.classList.remove("show")

  

    }
       
    

    
   