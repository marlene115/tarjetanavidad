var hojas = '';
[10, 2].forEach(row => {
    new Array(row).fill('').forEach((v, i) => {
        hojas += ([
            ...Array(9 - i).fill("<span> </span>"), 
            ...Array(1 + i * 2).fill(() => {
                
                const simbolo = Math.random() > 0.5 ? '*' : '+';
                return `<span class="rojo">${simbolo}</span>`;
            }).map(fn => fn()), 
            ...Array(9 - i).fill("<span> </span>") 
        ].join(''));
        hojas += "<br>"; 
    });
});

document.getElementById('arbol').innerHTML = hojas;

let animacion = document.querySelectorAll('.rojo');

function animar() {
    animacion.forEach((simbolo, i) => {
        let tiempo = i / 20 + 1; 
        simbolo.style.animation = `colores ${tiempo}s infinite`;
    });
}
animar();


function crearCopo() {
    const copo = document.createElement('div'); 
    copo.classList.add('copo'); 
    copo.style.left = `${Math.random() * 100}vw`;
    copo.style.animationDuration = `${Math.random() * 3 + 2}s`; 
    copo.style.opacity = `${Math.random()}`; 

    document.body.appendChild(copo); 

}
setInterval(crearCopo, 50); 

drawTree();
window.addEventListener('load', animar)