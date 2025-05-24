document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('texto').addEventListener('keydown', limita); 
});

function limita (e) {
    let max = parseInt(e.target.getAttribute('data-limit')) || 100;
    let caracteresRestantes = max;
    let elemento = document.getElementById("texto"); 
    
    if(e.key == "Backspace" && elemento.value.length >= maximoCaracteres ) { 
        document.createElement("h2").innerHTML = 'Has llegado al máximo número de carácteres';
        e.preventDefault();

    } else { 
        document.createElement("h2").innerHTML = 'Carácteres restantes: ' + caracteresRestantes;
        return true; 
    } 
}