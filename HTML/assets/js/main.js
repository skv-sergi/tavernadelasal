/* =============================================================================
   jQuery: all the custom stuff!
   ========================================================================== */

$(document).ready(function() {
    
    
    /* Preloader */
    var	$window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $all = $body.add($header);

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-loading');
        }, 0);
    });
    
    
    
    /* Open/close menu on mobile */
    var mobileMenu = $('.main-nav, #nav a');
	mobileMenu.on('click', function(event){
		if($(event.target).is(mobileMenu)) $(this).toggleClass('is-visible');
	});
    
    
    /* Language switcher show/hide */
    /* ========================================================= */
    var hoverTimeout, keepOpen = false, stayOpen = $('.language');
    
    $(document).on('mouseenter','.lang-switcher',function(){
        clearTimeout(hoverTimeout);
        stayOpen.addClass('show');
    }).on('mouseleave','.lang-switcher',function(){
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(function(){
            if(!keepOpen){
                stayOpen.removeClass('show');   
            }
        },300);
    });

    $(document).on('mouseenter','.language',function(){
        keepOpen = true;
        setTimeout(function(){
            keepOpen = false;
        },1500);
    }).on('mouseleave','.language',function(){
        keepOpen = false;
        stayOpen.removeClass('show');
    });

    
    
    
    /* Air Datapicker | https://github.com/t1m0n/air-datepicker */
    var $start = $('#desde');
    var $end = $('#hasta');
    
    $('.datepicker-input').datepicker({
        minDate: new Date(), // Now can select only dates, which goes after today
        autoClose: true
    })
    
    // Set date range
    $start.datepicker({
        onSelect: function (fd, date) {
            $end.data('datepicker')
                .update('minDate', date);

            $end.focus();
        }
    })

    $end.datepicker({
        onSelect: function (fd, date) {
            $start.data('datepicker')
                .update('maxDate', date)
        }
    })
    
        
    
    /* Animated logo & header */
    var changeSize = $(window).height() - 600;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= changeSize ) {
            $('body').addClass('scrolled');
            }
            else {
                $('body').removeClass('scrolled');
            }
    });
    
    function getCurrentScroll() {
        return window.pageYOffset;
    }

    
    
    // Smart One Page Navigation
    $('.smart-nav').alfaNavbar({
        // animation speed
        speed: 1500,
        // CSS class for active link
        activeClass: 'current-menu',
        // scroll threshold
        threshold: 50,
        type: 'topped'
    });
    
    
    
    /* Smooth scrolling */
    $('#one-btn, #two-btn').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, {
            duration: 500,
            easing: 'swing'
        });
        return false;
    });
    
    $('#back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, {
            duration: 1500,
            easing: 'swing'
        });
        return false;
    });
    
    
    
    // http://responsiveslides.com v1.54 by @viljamis
    // Slideshow 1
    $("#slider-home").responsiveSlides({
        auto: true,
        speed: 900,
        timeout: 4000
    });
    
    // Slideshow 1 rooms page
    $("#slider1").responsiveSlides({
        manualControls: '#slider1-pager',
        auto: true,
        speed: 900,
        timeout: 6000
    });

    
    /* Swipebox Gallery */
    /* http://brutaldesign.github.io/swipebox/ */
    $('.swipebox').swipebox({
		useCSS : true, // false will force the use of jQuery for animations
		hideBarsDelay : 3000 // 0 to always show caption and action bar
	});


});

