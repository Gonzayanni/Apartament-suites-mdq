const preguntas=document.querySelectorAll(".contenedor-texto-pregunta");


preguntas.forEach((pregunta)=>{
    pregunta.addEventListener("click",()=>
    

    pregunta.nextElementSibling.classList.toggle("toggle-respuesta")
    
    )
})

console.log(preguntas.nextElementSibling);
