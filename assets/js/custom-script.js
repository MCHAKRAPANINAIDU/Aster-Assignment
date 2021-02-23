//Form Validation
$(document).on('change', 'input[type="checkbox"]', function(e) {
    if ($("#check").is(":checked")) {
        $("#check").attr("value", "checked");
    } else {
        $("#check").attr("value", "");
    }
});
$('#appointmentSubmit').click(function() {
        var bannerFormCount = 0;
        $("form#appointment-form input.requiredfield, form#appointment-form textarea").each(function() {
            if ($(this).val() == "") {
                $(this).addClass('error');
                bannerFormCount++;
                console.log('error class triggered!')
            } else {
                $(this).removeClass('error');
            }
        });
        if (bannerFormCount == 0) {
            // ajax call
            $.ajax({
                type: "POST",
                success: function(data) {
                    if (data == "Registration Successfully") {
                        $('form#appointment-form').append(`<div class="thankyou">Registered Successfully! </div>`);
                    }
                }
            });
            // ajax call end
        }

        return false;
    })
    // form submission

/*   Accordination   */
var acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

/****    slick slider  ****/
$(document).ready(() => {
    jQuery(".testimonialSlider.slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        speed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});