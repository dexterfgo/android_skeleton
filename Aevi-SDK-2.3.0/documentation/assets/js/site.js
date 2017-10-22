$(function() {

	// patch the table styles
	$("table").each(function() {
		$(this).addClass("table");
	});

	$(".alert").each(function(){
		$(this).addClass("alert-info");
	});

    var title = document.title.split(' ');
    var version = title[title.length - 1];
    $(".lander-title").append( "<h2>" + version + "</h2>" );
    $(".title").append( " " + version );

	
	// Show or hide the sticky go to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});

	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();
		
		$('html, body').animate({scrollTop: 0}, 300);
	})

    $('.menu-toggle > button').on('click', function() {
        $('.sidebar').toggleClass('closed');
    });
});