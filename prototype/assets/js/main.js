/* =============================================================================
   jQuery: all the custom stuff!
   ========================================================================== */

// @prepros-prepend vendor/jquery-1.11.2.min.js
// @prepros-prepend plugins.js


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
    var $start = $('#check_in_date');
    var $end = $('#check_out_date');
    
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
    /* var changeSize = $(window).height() - 600;

    function checkScrollClasses() {
        var scroll = getCurrentScroll();
        var scrollHeight = $(document).height();
        var windowHeight = $(window).height();
        var distanceFromBottom = scrollHeight - (scroll + windowHeight);

        if ( scroll >= changeSize ) {
            $('body').addClass('scrolled');
        }
        else {
            $('body').removeClass('scrolled');
        }

        if ( distanceFromBottom <= 600 && scroll >= changeSize ) {
            $('body').addClass('near-bottom');
        }
        else {
            $('body').removeClass('near-bottom');
        }
    }

    $(window).scroll(function() {
        checkScrollClasses();
    });

    // Check on page load in case user reloaded while scrolled
    checkScrollClasses();

    function getCurrentScroll() {
        return window.pageYOffset;
    } */

    var changeSize = $(window).height() - 600;
    var changeSizeDouble = 2000;

    function checkScrollClasses() {
        var scroll = getCurrentScroll();
        var scrollHeight = $(document).height();
        var windowHeight = $(window).height();
        var distanceFromBottom = scrollHeight - (scroll + windowHeight);

        if ( scroll >= changeSize ) {
            $('body').addClass('scrolled');
        }
        else {
            $('body').removeClass('scrolled');
        }

        // Add more-scrolled at 1800px OR 600px before bottom (whichever comes first)
        if ( scroll >= changeSizeDouble || (scrollHeight <= 2600 && distanceFromBottom <= 600) ) {
            $('body').addClass('more-scrolled');
        }
        else {
            $('body').removeClass('more-scrolled');
        }
    }

    $(window).scroll(function() {
        checkScrollClasses();
    });

    // Check on page load in case user reloaded while scrolled
    checkScrollClasses();

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
    /* $('#one-btn, #two-btn').click(function(event) {
        event.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, {
                duration: 500,
                easing: 'swing'
            });
        }
    }); */
    
    $('#back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 1500,
            easing: 'swing'
        });
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
    
    
    
    
    // Modal popup
    // A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    $('a.offers').click(function(event) {
        $(this).modal({
            fadeDuration: 250,
            fadeDelay: 1
        });
        return false;
    });
    
    $('a.legal').click(function(event) {
        $(this).modal({
            fadeDuration: 250,
            fadeDelay: 1
        });
        return false;
    });


});

