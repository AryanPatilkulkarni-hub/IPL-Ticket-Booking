
// Function to show notification
function showToast(message) {
    let toast = document.createElement("div");

    toast.innerText = message;
    toast.className = "toast";

    document.body.appendChild(toast);

    setTimeout(function() {
        toast.remove();
    }, 3000);
}

// Smooth scrolling for Book buttons
let bookButtons = document.querySelectorAll('a[href="#booking"]');

bookButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        let bookingForm = document.getElementById("booking");

        bookingForm.scrollIntoView({
            behavior: "smooth"
        });

        showToast("Redirecting to Ticket Booking!");
    });
});
