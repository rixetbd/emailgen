function progressBar() {
    if ($("#first_name").val() != '' && $("#domain").val() != '' && $("#last_name").val() != '') {
        $('#progress_bar').css("width", "100%");
        $('#progress_bar').css("background-color", "#008000");
        $('#submitbtn').addClass("bg-success");
    } else if ($("#first_name").val() == '' && $("#domain").val() !== '' && $("#last_name").val() !== '') {
        $('#progress_bar').css("width", "66%");
        $('#progress_bar').css("background-color", "#ffff0071");
        $('#submitbtn').removeClass("bg-success");
    } else if ($("#first_name").val() != '' && $("#domain").val() != '' && $("#last_name").val() == '') {
        $('#progress_bar').css("width", "66%");
        $('#submitbtn').removeClass("bg-success");
        $('#progress_bar').css("background-color", "#ffff0071");
    } else if ($("#first_name").val() != '' && $("#domain").val() == '' && $("#last_name").val() != '') {
        $('#progress_bar').css("width", "66%");
        $('#submitbtn').removeClass("bg-success");
        $('#progress_bar').css("background-color", "#ffff0071");
    } else if ($("#first_name").val() == '' && $("#domain").val() == '' && $("#last_name").val() != '') {
        $('#progress_bar').css("width", "33%");
        $('#submitbtn').removeClass("bg-success");
    } else if ($("#first_name").val() != '' && $("#domain").val() == '' && $("#last_name").val() == '') {
        $('#progress_bar').css("width", "33%");
        $('#submitbtn').removeClass("bg-success");
    } else if ($("#first_name").val() == '' && $("#domain").val() != '' && $("#last_name").val() == '') {
        $('#progress_bar').css("width", "33%");
        $('#submitbtn').removeClass("bg-success");
    } else {
        $('#progress_bar').css("width", "0%");
        $('#submitbtn').removeClass("bg-success");
    }
}