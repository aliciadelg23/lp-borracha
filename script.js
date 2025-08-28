$(document).ready(function(){
    // Código para o menu de hambúrguer
    $('.menu-toggle').on('click', function() {
        $('.navbar').toggleClass('active');
    });

    // Código para o carrossel
    $('.testimonials-carousel').slick({
        infinite: true,
        slidesToShow: 3, // Mostra 3 cards por vez no desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true, // Mostra as bolinhas de navegação
        arrows: true, // Mostra as setas de navegação
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Mostra 1 card por vez no mobile
                    slidesToScroll: 1,
                    arrows: false // Esconde as setas no mobile para economizar espaço
                }
            }
        ]
    });
});