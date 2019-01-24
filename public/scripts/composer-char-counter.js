$(document).ready(function () {
        $("textarea").on('keypress', function (event) {
            let letters = $(this).val().length;
            $(this).siblings().html(letters)
            if (letters > 140) {
                $(".counter").css("color", "red") 
            }
        })
    }
);






