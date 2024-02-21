function divideNumbers(num1, num2) {
    try {
        // Attempt to divide the numbers
        let result = num1 / num2;
        console.log(`Division result: ${result}`);
    } catch (error) {
        // Handle any errors that occur during division
        console.error(`Error during division: ${error.message}`);
    } finally {
        // Log a message indicating that the operation has been completed
        console.log("Operation completed.");
    }
}

// Example usage:
divideNumbers(10, 2); // Successful division
divideNumbers(5, 0);  // Division by zero (error)
