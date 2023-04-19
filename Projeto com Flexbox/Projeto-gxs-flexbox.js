(function(){
    let $menu = document.querySelector('.menu-icone')
    let abrirMenu = document.querySelector('.menu-responsivo')
    
    $menu.addEventListener('click', function(){
        if (abrirMenu.classList.contains('abrir-menu')){
            abrirMenu.classList.remove('abrir-menu')
            document.querySelector('.icone-menu').src = 'icones/SVG/menu.svg'
        } else{
            abrirMenu.classList.add('abrir-menu')
            document.querySelector('.icone-menu').src = 'icones/SVG/menu4.svg' //trocar icone
        }
    })
})()
