function random(numero){

    return Math.floor(Math.random() * (numero + 1))

}


// un forma de hacerlo
// function cambiarfondo(){
//     let color = "rgb("+ random(255) + "," + random(255) + "," + random(255) + ")"
//     document.body.style.backgroundColor = color 
// }

let btn = document.getElementById("btn")
btn.onclick= function(){
    let color = "rgb("+ random(255) + "," + random(255) + "," + random(255) + ")"
    document.body.style.backgroundColor = color 
}