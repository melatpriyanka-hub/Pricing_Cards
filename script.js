
// Select Monthly and Yearly buttons
const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

// Select all price elements
const amounts = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");

// Function to update pricing
function updatePricing(type) {

    amounts.forEach(function(amount) {

        if (type === "monthly") {
            amount.textContent = amount.dataset.monthly;
        } 
        else {
            amount.textContent = amount.dataset.yearly;
        }

    });

    // Update billing period
    periods.forEach(function(period) {
        period.textContent =
            type === "monthly" ? "/month" : "/year";
    });

    // Update active button
    monthlyBtn.classList.toggle("active", type === "monthly");
    yearlyBtn.classList.toggle("active", type === "yearly");
}


// Monthly button click
monthlyBtn.addEventListener("click", function() {
    updatePricing("monthly");
});


// Yearly button click
yearlyBtn.addEventListener("click", function() {
    updatePricing("yearly");
});


// Get all pricing plan buttons
const planButtons = document.querySelectorAll(".plan-btn");

// Plan selection functionality
planButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".pricing-card");

        const planName = card.querySelector("h2").textContent;

        const price = card.querySelector(".amount").textContent;

        const period = card.querySelector(".period").textContent;

        alert(
            "Thank you for choosing " + planName +
            "!\nPrice: ₹" + price + period +
            "\nYour plan selection is successful."
        );

    });

});


// Navigation Get Started button
const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", function() {

    document.getElementById("plans").scrollIntoView({
        behavior: "smooth"
    });

});


// Login button
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function() {

    alert("Welcome! Login functionality will be available soon.");

});

console.log("Pricing Cards Website Loaded Successfully!");
