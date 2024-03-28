<?php
// Correct password
$correct_password = "your_password_here";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the entered password
    $password = $_POST["password"];

    // Check if the entered password matches the correct password
    if ($password == $correct_password) {
        // Redirect to the locked page
        header("Location: locked_page.html");
        exit();
    } else {
        // Display error message
        echo "<p>Incorrect password. Please try again.</p>";
    }
}
?>
