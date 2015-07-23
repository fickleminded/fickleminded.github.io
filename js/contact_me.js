$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit").attr("disabled", true);
            $("#btnSubmit").html(' Enter Contest &nbsp; <span class="glyphicon" aria-hidden="true"><i class="fa fa-refresh fa-spin"></i></span>');
            event.preventDefault();

            // get values from FORM
            var url = "http://juliasbiz.myasealive.com/newsite/aboutus/OurStory.aspx";
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://hidden-brushlands-7444.herokuapp.com/users",
                // url: "http://localhost:3000/users",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    comments: message
                },
                cache: false,
                success: function(response) {
                    console.log("good", response);
                    // Enable button & show success message
                    $("#btnSubmit").attr("disabled", false);
                    $("#btnSubmit").html(' Enter Contest ');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong> You have successfully signed up. </strong> <br>Redirecting to holygrailofhealthscience.com");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                    setTimeout(
                        function() {
                            $(location).attr('href',url);
                        }, 2000);
                },
                error: function(response) {
                    console.log("bad", response);
                    // Fail message
                    // $('#success').html("<div class='alert alert-danger'>");
                    // $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    //     .append("</button>");
                    // $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    // $('#success > .alert-danger').append('</div>');
                    // //clear all fields
                    // $('#contactForm').trigger("reset");
                    $("#btnSubmit").attr("disabled", false);
                    $("#btnSubmit").html(' Enter Contest ');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong> You have successfully signed up. </strong> <br>Redirecting to holygrailofhealthscience.com");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                    setTimeout(
                        function() {
                            $(location).attr('href',url);
                        }, 2000);
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
