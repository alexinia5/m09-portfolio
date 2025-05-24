document.addEventListener('DOMContentLoaded', () => {
    let link = document.getElementById('enlace_1');
    link.addEventListener('click', muestraOculta());

    link = document.getElementById('enlace_2');
    link.addEventListener('click', muestraOculta());

    link = document.getElementById('enlace_3');
    link.addEventListener('click', muestraOculta());
});


function muestraOculta(e) {
    // e.target --> capta quien ha hecho el evento, 
    // en este caso, el enlace
    let text = e.target.previousElementSibling

    if (text.style.display == 'none') {
        text.style.display = 'block';
        link.innerHTML = 'Ocultar contenido';
    } else {
        text.style.display == 'none';
        link.innerHTML = 'Mostrar contenido';
    }
    
}