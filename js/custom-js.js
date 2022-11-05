const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// custom select 
/* FORKED FROM https://codepen.io/yy/pen/vOYqYV */
$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template +=
        '<span class="custom-select-trigger">' +
        $(this).attr("placeholder") +
        "</span>";
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
        template +=
            '<span class="custom-option ' +
            $(this).attr("class") +
            '" data-value="' +
            $(this).attr("value") +
            '">' +
            $(this).html() +
            "</span>";
    });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(
    function () {
        $(this).parents(".custom-options").addClass("option-hover");
    },
    function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    }
);
$(".custom-select-trigger").on("click", function () {
    $("html").one("click", function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this)
        .parents(".custom-select-wrapper")
        .find("select")
        .val($(this).data("value"));
    $(this)
        .parents(".custom-options")
        .find(".custom-option")
        .removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this)
        .parents(".custom-select")
        .find(".custom-select-trigger")
        .text($(this).text());
});


$(".custom-select-trigger").on("click", function () {

    if ($('#potencial').next().hasClass("opened")) {

        if ($('#potencial1').next().hasClass("opened")) {
            console.log('trying to close drop 2');
            $('#potencial1').next().removeClass('opened');

            if ($('#potencial').next().hasClass("opened")) {
                $('#potencial').next().removeClass('opened');

            }

        }


    }
    else {
        console.log('does not has class');
        console.log($('#potencial1').next().attr('class'));


    }
});



jQuery(document).ready(function ($) {

    var interval;
    // interval = setInterval(function () {
    //     moveRight();
    // }, 3000);

    $('._slider').mouseover(function () {
        clearInterval(interval);
    });

    // $('._slider').mouseleave(function () {
    //     interval = setInterval(function () {
    //         moveRight();
    //     }, 3000);
    // });

    var slideCount = $('._slider ul li').length;
    var slideWidth = $('._slider ul li').width();
    var slideHeight = $('._slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('._slider').css({ width: slideWidth, height: slideHeight });

    $('._slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('._slider ul li:last-child').prependTo('._slider ul');

    function moveLeft() {
        $('._slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('._slider ul li:last-child').prependTo('._slider ul');
            $('._slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('._slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('._slider ul li:first-child').appendTo('._slider ul');
            $('._slider ul').css('left', '');
        });
    };

    $('._slider_prev').click(function () {
        moveLeft();
        return false;
    });

    $('._slider_next').click(function () {
        moveRight();
        return false;
    });

});    




