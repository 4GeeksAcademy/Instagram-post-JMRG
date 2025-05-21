

const likesHTML = document.getElementById("likes");
const likesSpanHTML = document.getElementById("likesSpan");
const comentariosHTML = document.getElementById("comentario")
const comentariosSpanHTML = document.getElementById("comentarioSpan")

let numeroLikes = 0;
let numeroComentarios = 0;

function aumentarPorClick(spanHTML){
    if(spanHTML===likesSpanHTML){
        numeroLikes++;
        likesSpanHTML.innerHTML = numeroLikes;
    }else{
        numeroComentarios++;
        comentariosSpanHTML.innerHTML=numeroComentarios;

    }
};
likesHTML.addEventListener("click", function(){
    aumentarPorClick(likesSpanHTML)
})
comentariosHTML.addEventListener("click", function(){
    aumentarPorClick(comentariosSpanHTML)
})





