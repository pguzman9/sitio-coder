$(document).ready(function(){
    $('#menuInicio').click(function(){
        $('#inicio').animatescroll()
    });

    $('#menuNosotros').click(function(){
        $('#nosotros').animatescroll()
    });

    $('#menuProductos').click(function(){
        $('#productos').animatescroll()
    });

    $('#menuContacto').click(function(){
        $('#contacto').animatescroll()
    });
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});    

window.onscroll= function(){
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}
document.querySelector('.go-top-container')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})