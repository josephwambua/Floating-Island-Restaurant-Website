document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        sendMail();
    });
});

function sendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        phone_id: document.getElementById("phone_id").value,
        date_id: document.getElementById("date_id").value,
        time_id: document.getElementById("time_id").value,
        persons_id: document.getElementById("persons_id").value,
        event_id: document.getElementById("event_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_u44gg19", "template_7a42ogr", params).then(function(res) {
        alert("Success! " + res.status);

        // Clear the form after successful submission
        document.getElementById("myForm").reset();
    }).catch(function(err) {
        console.error("Failed to send email:", err);
    });
}
