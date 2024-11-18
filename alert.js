let submitBtn = document.querySelector(".submit");
let closeBtn = document.querySelector(".close-btn");
let alerte = document.querySelector(".alert");
let field = document.querySelector(".valid");


let show = 1

closeBtn.addEventListener("click", function(){
    alerte.style.display ="none";
})

submitBtn.addEventListener("click" ,function(){

    let input = document.querySelector(".input").value

    if(isNaN(input) && show == 1){
        alerte.style.display = "block";
        show = 2
    }
    
    
})

let input = document.querySelector(".input").value = ""


