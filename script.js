let btnSim = document.getElementById("sim");
let btnNao = document.getElementById("nao");

btnSim.addEventListener("click", aceita);

function aceita() {
    alert('Você Aceitou!');
}


function desviar() {
    btnNao.style.position = 'absolute';
    btnNao.style.top = gerandoPosição(10,80);
    btnNao.style.left = gerandoPosição(10,80);
}

function gerandoPosição(min, max) {

    return (Math.random() * (max-min) + min) + "%";

}

