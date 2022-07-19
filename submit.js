
$("#submitbtn").click(function () {

    var firstNameInput = $("#first_name").val().toLowerCase().replace(/\s/g, '');
    var lastNameInput = $("#last_name").val().toLowerCase().replace(/\s/g, '');
    var domainInput = $("#domain").val().toLowerCase().replace(/  +/g, ' ');;

    let mainDomain = domainInput.split('/');
    if (mainDomain.length > 2) {
        domainInput = mainDomain[2];
    }

    domainInput = domainInput.replace("http://www.", "");
    domainInput = domainInput.replace("https://www.", "");
    domainInput = domainInput.replace("http://", "");
    domainInput = domainInput.replace("https://", "");
    domainInput = domainInput.replace("www.", "");
    domainInput = domainInput.replace("/", "");


    $('#domainDisplay').show();
    $('#domainDisplay').html(domainInput);

    if (firstNameInput.length == '') {
        $('#first_namecheck').show();
    } else {
        $('#first_namecheck').hide();
    }

    if (lastNameInput.length == '') {
        $('#last_namecheck').show();
    } else {
        $('#last_namecheck').hide();
    }

    if (domainInput.length == '') {
        $('#domaincheck').show();
    } else {
        $('#domaincheck').hide();
    }


    // ------------------------- Test

    var str1 = firstNameInput;
    var str2 = lastNameInput;
    var str3 = "@" + domainInput;
    // var str1 = localStorage.getItem("firstName");
    // var str2 = localStorage.getItem("lastName");
    // var str3 = "@" + localStorage.getItem("domain");

    var a = firstNameInput.concat(lastNameInput, str3);
    var b = firstNameInput.concat(str3);
    var c = lastNameInput.concat(str3);
    var d = lastNameInput.concat(firstNameInput, str3);
    var e = firstNameInput.charAt(0);
    var f = lastNameInput.charAt(0);

    let emails =
        `${b}\n${c}\n${a}\n${d}\n${str1 + "." + str2 + str3}\n${e + "." + str2 + str3}\n${str1 + "_" + str2 + str3}\n${str1 + "-" + str2 + str3}\n${e + str2 + str3}\n${str1 + f + str3}\n${str2 + e + str3}\n${e + f + str3}`;

    let gtomail = `${b};${c};${a};${d};${str1 + "." + str2 + str3};${e + "." + str2 + str3};${str1 + "_" + str2 + str3};${str1 + "-" + str2 + str3};${e + str2 + str3};${str1 + f + str3};${str2 + e + str3};${e + f + str3}`;

    const output = document.getElementById('output')
    const copyFunc = document.getElementById('copyFunc')
    const sendFunc = document.getElementById('sendFunc')

    // let mailtro = `mailto:${gtomail}`;
    let mailtro = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${gtomail}&body=`;
    $('#sendFunc').attr("href", mailtro);

    if ($("#first_name").val() != '' && $("#domain").val() != '' && $("#last_name").val() != '') {
        if(domainInput.indexOf(' ') >= 0){
            $('#domainDisplay').html('Avoid Space in domain');
            $('#output').html("");
            $('#copyFunc').addClass('d-none')
            $('#sendFunc').addClass('d-none')
            progressBar();
        }else{
            output.innerText = emails
            copyFunc.classList.remove('d-none')
            sendFunc.classList.remove('d-none')
        }
    }

    let divToast = null;

    copyFunc.addEventListener('click', function () {
        window.navigator.clipboard.writeText(output.innerText)
        if (divToast != null) {
            divToast.remove();
            divToast = null;
        }
        generateToastmessage(`All Email Copied`)
    })

    function generateToastmessage(msg) {
        divToast = document.createElement('div')
        divToast.innerText = msg;
        divToast.className = 'toast-message toast-message-slide-in';

        divToast.addEventListener('click', function () {
            divToast.classList.remove('toast-message-slide-in');
            divToast.classList.add('toast-message-slide-out');

            divToast.addEventListener('animationend', function () {
                divToast.remove();
                divToast = null;
            })
        })

        setTimeout(function () {
            divToast.classList.remove('toast-message-slide-in');
            divToast.classList.add('toast-message-slide-out');
            divToast.remove();
            divToast = null;
        }, 4000);

        document.body.appendChild(divToast);
    }
});