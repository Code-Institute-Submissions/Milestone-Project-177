$(document).ready(function() {
    //when newsletter button is clicked..
    $("#newsletter-button").click(function() {
        //Shows newsletter modal with form
        $("#newsletter-modal").css("display", "block");
    });
    //when close button is clicked
    $(".close-button").click(function() {
        //close modal
        $("#newsletter-modal").css("display", "none");
    });
});


function sendEmail(newsletterForm) {
    emailjs.send("gmail", "service_qpjkad9", {
        "from_name": newsletterForm.name.value,
        "from_email": newsletterForm.email.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}