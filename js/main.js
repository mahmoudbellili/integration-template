$(document).ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items : 5,
    });

    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })

});