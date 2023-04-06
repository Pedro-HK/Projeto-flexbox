function mostrarMenu(){
    let abrirMenu = document.querySelector('.menu-responsivo')
    if (abrirMenu.classList.contains('abrir-menu')){
        abrirMenu.classList.remove('abrir-menu')
        document.querySelector('.icone-menu').src = 'icones/SVG/menu.svg'
    } else{
        abrirMenu.classList.add('abrir-menu')
        document.querySelector('.icone-menu').src = 'icones/SVG/menu4.svg'
    }
}