function OneSecDelay(){
    setTimeout(
    function() 
    {
        $("#submitbtn").click();
        progressBar();
    }, 10);
};

// Status Text
function statusText(){
    $('#first_namecheck').hide();
    $('#last_namecheck').hide();
    $('#domaincheck').hide();
};
statusText();
// Status Text


$('#fullNameExchange').click(
    async (event) => {
        navigator.clipboard.readText().then(
            clipText => document.querySelector("#fullName").value += clipText
    );
    $('#fullName').val("");
    fullNameActivity();
    OneSecDelay();
});

// Full Name Functions
function fullNameFun() {
    let fullname = $('#fullName').val().replace(/  +/g, ' ');
    let fullnameArr = fullname.split(" ");

    if (fullnameArr[0] == ""){    
        $('#first_name').val(fullnameArr[1]);
        $('#last_name').val(fullnameArr[2]);
    }else{    
        $('#first_name').val(fullnameArr[0]);
        $('#last_name').val(fullnameArr[1]);
    }
}

function fullNameActivity(){
    $('#fullName').keyup();
    $('#fullName').keypress();
    $('#fullName').focusout();
    $('#fullName').click();
};

function action(){
    fullNameFun();
    progressBar();
    $("#submitbtn").click();
}

$("#submitbtn").click(function(){
    fullNameFun();
});

$('#fullName').keyup(function () { action();});
$('#fullName').keypress(function () {action();});
$('#fullName').focusout(function () {action();});
$('#fullName').click(function () {action();});

// Domain
function domainStyle(){
    $('#progress_bar').css("transition", "1s ease-in");
    progressBar();
    OneSecDelay();
};

$("#domain").focusout(function () {domainStyle();});
$("#domain").keyup(function () {domainStyle();});
$("#domain").click(function () {domainStyle();});

$('#domainExchange').click(
    async (event) => {
        navigator.clipboard.readText().then(
            clipText => document.querySelector("#domain").value += clipText
    );
    $('#domain').val("");
    OneSecDelay();
});

$("#first_name").focusout(function () {domainStyle();});
$("#first_name").keyup(function () {domainStyle();});
$("#last_name").focusout(function () {domainStyle();});
$("#last_name").keyup(function () {domainStyle();});

function dataClear(){
    $('#first_name').val("");
    $('#last_name').val("");
    $('#domain').val("");
    $('#fullName').val("");
    $('#domainDisplay').hide();
};

$("#resetbtn").click(function () {
    dataClear();
    statusText();
    $('#output').html("");
    $('#copyFunc').addClass('d-none')
    $('#sendFunc').addClass('d-none')
    progressBar();
});

// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//     localStorage.clear();
// }

let timeImg = 1;
function imgLoop(){
    if(timeImg % 2 == 0){
        $('#vec_car').attr("src","./svg/car2.gif");
    }else{
        $('#vec_car').attr("src","./svg/car.gif");
    }
}

var inverval_timer;
//Time in milliseconds [1 second = 1000 milliseconds ]    
inverval_timer = setInterval(function() { 
    imgLoop();
    timeImg++;
}, 2000); 
//IF you want to stop above timer
function stop_timer() {
    clearInterval(inverval_timer); 
}