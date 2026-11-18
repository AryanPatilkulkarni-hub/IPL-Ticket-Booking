
// Activity 5: Function to show notification
function showToast(message) {
    let toast = document.createElement("div");

    toast.innerText = message;
    toast.className = "toast";

    document.body.appendChild(toast);

    setTimeout(function() {
        toast.remove();
    }, 3000);
}

// Activity 5: Smooth scrolling for Book buttons
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


// Activity 7: Get form elements
let matchSelect = document.getElementById("match");
let standSelect = document.getElementById("stand");
let quantityInput = document.getElementById("quantity");

// Function to update booking summary
function updateSummary() {

    let match = matchSelect.value;
    let stand = standSelect.value;
    let quantity = Number(quantityInput.value);

    let price = 0;

    // Check ticket price
    if (match == "CSK vs MI") {
        if (stand == "General") {
            price = 800;
        }
        else if (stand == "Premium") {
            price = 1500;
        }
        else if (stand == "VIP") {
            price = 3000;
        }
    }

    else if (match == "RCB vs KKR") {
        if (stand == "General") {
            price = 900;
        }
        else if (stand == "Premium") {
            price = 1800;
        }
        else if (stand == "VIP") {
            price = 3500;
        }
    }

    else if (match == "MI vs KKR") {
        if (stand == "General") {
            price = 700;
        }
        else if (stand == "Premium") {
            price = 1400;
        }
        else if (stand == "VIP") {
            price = 2800;
        }
    }

    else if (match == "SRH vs RR") {
        if (stand == "General") {
            price = 750;
        }
        else if (stand == "Premium") {
            price = 1600;
        }
        else if (stand == "VIP") {
            price = 3200;
        }
    }

    // Calculate total amount
    let total = price * quantity;

    // Update booking summary
    document.getElementById("summaryMatch").innerText =
        match || "Not Selected";

    document.getElementById("summaryStand").innerText =
        stand || "Not Selected";

    document.getElementById("summaryPrice").innerText = price;

    document.getElementById("summaryQuantity").innerText = quantity;

    document.getElementById("summaryTotal").innerText = total;

    // Show notification
    showToast("Booking Summary Updated!");
}

// Add change events
matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
quantityInput.addEventListener("change", updateSummary);
