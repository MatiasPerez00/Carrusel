const imagenes=['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg','./img/6.jpg'];
let cont=0;
function carrusel(contenedor){
    contenedor.addEventListener('click',e => {
        let atras=contenedor.querySelector('.boton-atras');
        let adelante=contenedor.querySelector('.boton-siguiente');
        let image=contenedor.querySelector('img')//esto es solo porque existe un elemento img
        let targ=e.target;

        if(targ== atras){
            if(cont>0){
                image.src=imagenes[cont-1];
                cont--;
            }else{
                image.src=imagenes[imagenes.length -1];
                cont= imagenes.length-1;
            }
        }else if(targ==adelante){
            if(cont< imagenes.length-1){
                image.src=imagenes[cont+1];
                cont++;
            }else{
                image.src=imagenes[0];
                cont=0;
            }
        }
        console.log(imagenes[cont]);
        console.log(image.alt);
    })
}
document.addEventListener('DOMContentLoaded',()=>{
    let contenedor=document.querySelector('.contenedor');
    carrusel(contenedor);
});