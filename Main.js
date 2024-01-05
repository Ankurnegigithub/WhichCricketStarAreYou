// Main.js
function generateRandomNumber() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    if (name && dob) {
        const combinedInput = name + dob;
        const numericalValue = hashCode(combinedInput);

        // Use the numerical value to generate a random number between 1 and 5
        const randomNum = (numericalValue % 5) + 1;

        // Define result variable
        const result = document.getElementById('result');

        // Clear previous content and styles
        result.innerHTML = '';
       

        // Use a switch statement for better readability
        switch (true) {
            case (randomNum > 5 || randomNum < 0):
                result.innerHTML = '<img src="Dhoni.jpg" alt="Thala for a reason" style="width: 100%; height: 100%;"><h1>Thala for a reason</h1>';
                break;
            case (randomNum >= 0 && randomNum <= 3):
                result.innerHTML = '<img src="sachin.jpg" alt="Sachin" style="width: 100%; height: 100%;"><h1>God of cricket</h1>';
                break;
            case (randomNum > 3 && randomNum <= 5):
                result.innerHTML = '<img src="Virat.jpg.webp" alt="Virat" style="width: 100%; height: 100%;"><h1>King kohli</h1>';
                break;
            default:
                alert('Unexpected error occurred.');
                break;
        }
    } else {
        alert('Please enter both name and date of birth.');
    }
}

// Simple hash function
function hashCode(input) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash;
}
