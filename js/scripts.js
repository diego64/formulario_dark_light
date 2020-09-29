/*
$(window).on('load', () => {
    
})
*/

window.onload = () => {

    var clicked = false

    $('.bg').hide()

    function abriJanela() {
        $('.bg').fadeIn()
    }

    function fecharJanela() {
        $('.bg').fadeOut()
    }

    function ativarDarkmode() {
        if (clicked == false) {
            $('.circle').css('left', '32px')
            $('body').addClass('body-white')
            $('.btn-dark-mode').addClass('btn-dark-mode-bg')
            $('form').addClass('form-white')
            $(".input").addClass('input-white')
            clicked = true
        } else {
            $('.circle').css('left', '2px')
            $('body').removeClass('body-white')
            $('.btn-dark-mode').removeClass('btn-dark-mode-bg')
            $('form').removeClass('form-white')
            $(".input").removeClass('input-white')
            clicked = false
        }
    }

    $('.btn').click(abriJanela)
    $('.close').click(fecharJanela)
    $('.btn-dark-mode').click(ativarDarkmode)

}