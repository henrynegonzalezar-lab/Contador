class Contador{
    constructor(){
        this.numero=0;
    }
    sumar(){
        this.numero++;
    }
    restar(){
        this.numero--;
    }
    reiniciar(){
        this.numero=0;
    }
}

const objcontador =new Contador();
const pantalla=document.getElementById('numero');

function mostrarNumero(){
    pantalla.textContent=objcontador.numero;
}

document.getElementById('sumar').onclick = function(){
    objcontador.sumar();
    mostrarNumero();
}

document.getElementById('restar').onclick = function(){
    objcontador.restar();
    mostrarNumero();
}

document.getElementById('reiniciar').onclick = function(){
    objcontador.reiniciar();
    mostrarNumero();
}