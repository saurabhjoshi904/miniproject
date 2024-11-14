// Toggle between signup and login forms
function toggleForm() {
    document.getElementById("signupForm").classList.toggle("active");
    document.getElementById("loginForm").classList.toggle("active");
    document.getElementById("formTitle").textContent =
        document.getElementById("signupForm").classList.contains("active") ? "Sign Up" : "Login";
}

// Function to sign up a user
function signUp() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    // Simple validation
    if (username && password) {
        // Save credentials to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("isLoggedIn", "true"); // Set login flag

        // Redirect to the vault page
        window.location.href = "page1.html";
    } else {
        document.getElementById("message").textContent = "Please fill in all fields.";
    }
}

// Function to login a user
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Get stored credentials
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if credentials match
    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true"); // Set login flag

        // Redirect to the vault page
        window.location.href = "page1.html";
    } else {
        document.getElementById("message").textContent = "Invalid credentials. Please try again.";
    }
}