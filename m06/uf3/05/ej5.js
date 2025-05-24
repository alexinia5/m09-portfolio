function muestraInformacion(mensajes) {
    document.getElementById("info").innerHTML += '<h1>'+mensajes[0]+'</h1>';
    for (let i = 0; i < mensajes.length; i++) {
        document.getElementById("info").innerHTML += '<p>'+mensajes[1]+'</p>';
    }
}

function changeColors(e) {
    let info = document.getElementById('info');
    // mover ratón 
    let mouse = e.mousemove
    // tecla
    let tecla = e.key
    // clicar
    let click = e.click;

    if (click) {
        info.style.backgroundColor = '#FFFFCC'
    }
    if (tecla) {
        info.style.backgroundColor = '#CCE6FF'
    }
    if (mouse) {
        info.style.backgroundColor = 'white'
    }
}

document.addEventListener('mousemove', (e) => {
    let a = [];
    a[0] = e.type; 
    a[1] = 'Client X: ' + e.clientX;
    a[2] = 'Client Y: ' + e.clientY;
    muestraInformacion(a)
});

document.addEventListener('keydown', () => {
    let a = [];
    a[0] = e.type; 
    a[1] = 'Key: ' + e.key;
    a[2] = 'ctrlKey: ' + e.ctrlkey;
    muestraInformacion(a);
});

document.addEventListener('keypress', () => {
    let a = [];
    a[0] = e.type; 
    a[1] = 'Key: ' + e.key;
    a[2] = 'ctrlKey: ' + e.ctrlkey;
    muestraInformacion(a);
});

document.addEventListener('click', changeColors)
document.addEventListener('keypress', changeColors)
document.addEventListener('mousemove', changeColors)
