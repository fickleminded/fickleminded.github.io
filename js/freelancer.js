/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('body').on('click', '#winner', function(e) {
    $("#winner").html(' <span class="glyphicon" aria-hidden="true"><i class="fa fa-refresh fa-spin"></i></span> ');
    e.preventDefault();
    $.ajax({
        url: "https://hidden-brushlands-7444.herokuapp.com/show_me_the_winner",
        // url: "http://localhost:3000/show_me_the_winner",
        type: "GET",
        cache: false,
        success: function(response) {
            $("#winner").html('Show me the winner');
            $("#winner-announce").html('<mark class="name text-info">'+response.name+'</mark><h1>'+response.email+'</h1><h1>Phone: '+ response.phone+'</h1><br/><br/><br/>');
        },
        error: function(response) {
            $("#winner").html('Show me the winner');
            $("#winner-announce").html('<mark class="name text-info">'+response.name+'</mark><h1>'+response.email+'</h1><h1>Phone: '+ response.phone+'</h1><br/><br/><br/>');
        },
    })
})
