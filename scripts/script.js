// Doc ready function
$(document).ready(function() {


    // insert function
    $("#insert").on("click", function () {
        console.log("button clicked: "); //TODO: find out who clicked me, w/this?
    
        // ajax function
        $.ajax({
          url: "../assets/insert.json",
          dataType: "json",
          success: function (data) {

            // data claw machine
            $("#fName").val(data.fName);

            $("#mName").val(data.mName);

            $("#lName").val(data.lName);

            $("#cNum").val(data.cNum);

            $("#eDate").val(data.eDate);

            $("#cvNum").val(data.cvNum);

            $("#cType").val(data.cType);

            $("#email").val(data.email);

             // Radio
            var gender = data.gender;
            $('input[name="gender"][value="' + gender + '"]').prop("checked", true);

            $("#subscribe").prop("checked", data.subscribe);

            $("#confirm").prop("checked", data.confirm);
          },
        });
      });  

    //   Load confirmation
    $("#submits").on("click", function () {
        $(this).prop("disabled", true);
        $('#secondary').append(
            '<div class="row">' +
                '<div class="col-8 offset-2 card mt-6" id="secondary">'+
                    '<h1 class="thank text-center">Thank you!</h1><br>'+
                        '<h1 class="thank text-center">' + $("#fName").val() + '</h1>' +
                        '<p id="app">Your ' + $("#cType").val() + ' is safe.</p>' +
            '</div>' +
        '</div>'
        );
    
        if (!$("#subscribe").prop("checked")) {
            $('#app').append(
                '<br><br><p>Please consider subscribing to our newsletter in the future</p>'
            );
        } else {
            $('#app').append(
                '<br><br><p>Thank you for subscribing to our newsletter</p>'
            );
        }
    });
    });
