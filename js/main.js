$(document).ready(function(){


     
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /* click event on toggle menu */

    $toggleCollapse.click(function(){

        $nav.toggleClass('collapse');
        

    })

    // owl-crousel for blog 
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true
    });



});