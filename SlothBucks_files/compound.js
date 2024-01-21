// Function to calculate compound interest
function calculateCompoundInterest(principal, annualRate, timesCompounded, years) {
    const rate = annualRate / 100;
    const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
    return amount.toFixed(2);
}

// Event listener for the form submission
document.getElementById("interestForm").addEventListener("submit", function(event){
    event.preventDefault();

    // Getting values from the form
    const principal = parseFloat(document.getElementById("principal").value);
    const annualRate = parseFloat(document.getElementById("annualRate").value);
    const timesCompounded = parseInt(document.getElementById("timesCompounded").value, 10);
    const years = parseInt(document.getElementById("years").value, 10);

    // Calculating compound interest
    const result = calculateCompoundInterest(principal, annualRate, timesCompounded, years);

    // Displaying the result
    document.getElementById("result").innerText = `Future Value: $${result}`;
});
