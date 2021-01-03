$(function(){

    $(window).scroll(function(){
        if( $(this).scrollTop() > 50) {
            $('.navbar').addClass('.solid bg-light');
        }
        else{
         $('.navbar').removeClass('.solid bg-light');
        }
    });

    $('.dropdown-item, .nav-link').on('click', function(e){
        if ( this.hash !== ""){
            e.preventDefault();
            const anchor = this.hash; //projectAnchor
        
            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 800, function(){
                window.location.hash = anchor;
            });
        }
    });
});
