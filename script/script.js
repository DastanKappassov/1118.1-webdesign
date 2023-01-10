$(function(){
    // NAV
    $('.nav>li').mouseenter(function(){
        $(this).find('.subnav').stop(true).slideDown(100)
    }).mouseleave(function(){
        $(this).find('.subnav').stop(true).slideUp(100)        
    })

    // SLIDER
   setInterval(function(){
    $('.slides').animate({'margin-left':'-100%'},function(){
        $('.slide:first').appendTo('.slides')
        $('.slides').css({'margin-left':'0%'})
    })
   },3000)

    // POPUP
    $('.notice>ul>Li:first').click(function(){
        $('#popup').stop(true).fadeIn(200)
    })
    $('.btn').click(function(){
        $('#popup').stop(true).fadeOut(200)
    })
})