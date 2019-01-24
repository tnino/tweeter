$(document).ready(function () {
        $("textarea").on('keypress', function (event) {
            let letters = value = 140 - $(this).val().length;
            $(this).siblings().html(letters)
            if (letters < 1) {
                $(".counter").css("color", "red") 
            }
        })
    }
);






