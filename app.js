

        // options = {
        //     "cursorOuter": "circle-basic",
        //     "hoverEffect": "circle-move",
        //     "hoverItemMove": false,
        //     "defaultCursor": true,
        //     "outerWidth": 41,
        //     "outerHeight": 41
        //     }; 
        //     magicMouse(options);


        var app = new Vue({
          el: "#app",
          data: {
            selectedEffect:'example #1',
            effectList:[
              "example #1",
              "example #2",
              "example #3",
              "example #4",
              "example #5",
            ],
            options: {
              cursorOuter: "circle-basic",
              hoverEffect: "circle-move",
              hoverItemMove: false,
              defaultCursor: false,
              outerWidth: 30,
              outerHeight: 30
            }
          },
          mounted(){
            magicMouse(this.options);
            prettier();
          },
          methods:{
            changeEffect(){
              document.body.style.cursor = "unset";
              var cursorDOM = document.getElementById("magicMouseCursor");
              var pointerDOM = document.getElementById("magicPointer");
              if(cursorDOM){
                cursorDOM.parentNode.removeChild(cursorDOM)
              }
              if(pointerDOM){
                pointerDOM.parentNode.removeChild(pointerDOM)
              }
              switch(this.selectedEffect){
                case "example #1":
                  this.options.hoverEffect = "circle-move"
                  this.options.cursorOuter = "circle-basic"
                break;
                case "example #2":
                  this.options.hoverEffect = "pointer-overlay"
                  this.options.cursorOuter = "disable"
                break;
                case "example #3":
                  this.options.hoverEffect = "pointer-blur"
                  this.options.cursorOuter = "disable"
                break;
                case "example #4":
                  this.options.outerWidth = 41;
                  this.options.outerHeight = 41;
                  this.options.hoverEffect = "pointer-blur"
                  this.options.cursorOuter = "circle-basic"
                break;
                case "example #5":
                  this.options.outerWidth = 41;
                  this.options.outerHeight = 41;
                  this.options.hoverEffect = "circle-move"
                  this.options.cursorOuter = "circle-basic"
                  this.options.defaultCursor = true
                break;
              }
              magicMouse(this.options);
  
              let codeBlock = document.getElementById("codeSection")
              codeBlock.classList.remove("prettyprinted")
              codeBlock.innerHTML = "options = " + JSON.stringify(this.options, null, 2) + "; \n magicMouse(options);";
              prettier();
            }
          },
        });




        var str1 = localStorage.getItem("firstName");
        var str2 = localStorage.getItem("lastName");
        var str3 = "@" + localStorage.getItem("domain");

        var a = str1.concat(str2, str3);
        var b = str1.concat(str3);
        var c = str2.concat(str3);
        var d = str2.concat(str1, str3);
        var e = str1.charAt(0);
        var f = str2.charAt(0);

        let emails =
            `${b}\n${c}\n${a}\n${d}\n${str1 + "." + str2 + str3}\n${e + "." + str2 + str3}\n${str1 + "_" + str2 + str3}\n${str1 + "-" + str2 + str3}\n${e + str2 + str3}\n${str1 + f + str3}\n${str2 + e + str3}\n${e + f + str3}`;

        const output = document.getElementById('output')
        const copyFunc = document.getElementById('copyFunc')
        output.innerText = emails

        if (output.innerText != null) {
            copyFunc.classList.remove('d-none')
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
            
            setTimeout(function() {
                divToast.classList.remove('toast-message-slide-in');
                divToast.classList.add('toast-message-slide-out');
                divToast.remove();
                divToast = null;
            }, 4000);

            document.body.appendChild(divToast);
        }

        $('#first_namecheck').hide();
        $('#last_namecheck').hide();
        $('#domaincheck').hide();

        $("#submitbtn").click(function () {

            var firstNameInput = $("#first_name").val().toLowerCase().replace(/\s/g, '');
            var lastNameInput = $("#last_name").val().toLowerCase().replace(/\s/g, '');
            var domainInput = $("#domain").val().toLowerCase().replace(/\s/g, '.');

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

            if (firstNameInput.length == '' || lastNameInput.length == '' || domainInput.length == '') {
                return false;
            } else {

                localStorage.setItem("firstName", firstNameInput);
                localStorage.setItem("lastName", lastNameInput);
                localStorage.setItem("domain", domainInput);

                location.reload();
            }
        });

        $("#resetbtn").click(function () {
            localStorage.clear();
            location.reload();
        });

        if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            localStorage.clear();
        }

