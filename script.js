let lampada = document.getElementById('lampada')
let btn = document.getElementById('btn')
let quebrada = false;
let aviso = 0;

function ligar(){
    if (!quebrada){
        aviso = 0
        lampada.src = "img/ligada.jpg"
    }
    
}

function desligar(){
    if (!quebrada){
        aviso = 0
        lampada.src = "img/desligada.jpg"
    }
}

function quebrar(){
    lampada.src = "img/quebrada.jpg"
    quebrada = true
    aviso = 1
}


function trocar(){
    if (aviso == 1){
        quebrada = false
        lampada.src = "img/desligada.jpg"
    } else {
        alert('A lâmpada não esta quebrada, então não pode ser trocada!')
    }
    
}
