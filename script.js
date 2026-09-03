// Sahyog JavaScript

console.log("Sahyog website loaded successfully");

// ================= LOGIN VALIDATION =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let valid = true;

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const emailError = document.getElementById("loginEmailError");
        const passwordError = document.getElementById("loginPasswordError");


        // Clear previous errors

        emailError.textContent = "";
        passwordError.textContent = "";


        // Email validation

        if (email === "") {

            emailError.textContent = "Email is required.";

            valid = false;

        }
        else if (!email.includes("@")) {

            emailError.textContent = "Please enter a valid email.";

            valid = false;

        }


        // Password validation

        if (password === "") {

            passwordError.textContent = "Password is required.";

            valid = false;

        }
        else if (password.length < 6) {

            passwordError.textContent =
                "Password must contain at least 6 characters.";

            valid = false;

        }


        // If everything is valid

        if (valid) {

            alert("Login form is valid!");

        }

    });

}


// ================= REGISTER VALIDATION =================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let valid = true;


        // Get values

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const address =
            document.getElementById("address").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const terms =
            document.getElementById("terms").checked;


        // Error elements

        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const phoneError =
            document.getElementById("phoneError");

        const addressError =
            document.getElementById("addressError");

        const passwordError =
            document.getElementById("passwordError");

        const confirmPasswordError =
            document.getElementById("confirmPasswordError");


        // Clear errors

        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        addressError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";


        // ================= NAME =================

        if (name === "") {

            nameError.textContent =
                "Name is required.";

            valid = false;

        }
        else if (name.length < 3) {

            nameError.textContent =
                "Name must contain at least 3 characters.";

            valid = false;

        }


        // ================= EMAIL =================

        if (email === "") {

            emailError.textContent =
                "Email is required.";

            valid = false;

        }
        else if (!email.includes("@")) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }


        // ================= PHONE =================

        const phonePattern = /^[0-9]{10}$/;

        if (phone === "") {

            phoneError.textContent =
                "Phone number is required.";

            valid = false;

        }
        else if (!phonePattern.test(phone)) {

            phoneError.textContent =
                "Enter a valid 10-digit phone number.";

            valid = false;

        }


        // ================= ADDRESS =================

        if (address === "") {

            addressError.textContent =
                "Address is required.";

            valid = false;

        }


        // ================= PASSWORD =================

        if (password === "") {

            passwordError.textContent =
                "Password is required.";

            valid = false;

        }
        else if (password.length < 6) {

            passwordError.textContent =
                "Password must contain at least 6 characters.";

            valid = false;

        }


        // ================= CONFIRM PASSWORD =================

        if (confirmPassword === "") {

            confirmPasswordError.textContent =
                "Please confirm your password.";

            valid = false;

        }
        else if (password !== confirmPassword) {

            confirmPasswordError.textContent =
                "Passwords do not match.";

            valid = false;

        }


        // ================= TERMS =================

        if (!terms) {

            alert("Please agree to the terms and conditions.");

            valid = false;

        }


        // ================= FINAL RESULT =================

        if (valid) {

            alert("Registration form is valid!");

        }

    });

}
// =====================================================
// PROFILE FORM VALIDATION
// =====================================================

const profileForm = document.getElementById("profileForm");

if (profileForm) {

    profileForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let valid = true;

        const name = document.getElementById("profileName").value.trim();
        const email = document.getElementById("profileEmail").value.trim();
        const phone = document.getElementById("profilePhone").value.trim();
        const address = document.getElementById("profileAddress").value.trim();

        document.getElementById("profileNameError").textContent = "";
        document.getElementById("profileEmailError").textContent = "";
        document.getElementById("profilePhoneError").textContent = "";
        document.getElementById("profileAddressError").textContent = "";

        if (name.length < 3) {
            document.getElementById("profileNameError").textContent =
                "Please enter at least 3 characters.";
            valid = false;
        }

        if (!email.includes("@")) {
            document.getElementById("profileEmailError").textContent =
                "Please enter a valid email address.";
            valid = false;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            document.getElementById("profilePhoneError").textContent =
                "Please enter a valid 10-digit phone number.";
            valid = false;
        }

        if (address.length < 5) {
            document.getElementById("profileAddressError").textContent =
                "Please enter a valid address.";
            valid = false;
        }

        if (valid) {
            alert("Profile updated successfully!");
        }

    });

}


// =====================================================
// FEEDBACK FORM VALIDATION
// =====================================================

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let valid = true;

        const subject =
            document.getElementById("feedbackSubject").value.trim();

        const rating =
            document.getElementById("rating").value;

        const message =
            document.getElementById("feedbackMessage").value.trim();

        document.getElementById("feedbackSubjectError").textContent = "";
        document.getElementById("ratingError").textContent = "";
        document.getElementById("feedbackMessageError").textContent = "";

        if (subject.length < 3) {

            document.getElementById("feedbackSubjectError").textContent =
                "Subject must contain at least 3 characters.";

            valid = false;
        }

        if (rating === "") {

            document.getElementById("ratingError").textContent =
                "Please select a rating.";

            valid = false;
        }

        if (message.length < 10) {

            document.getElementById("feedbackMessageError").textContent =
                "Feedback must contain at least 10 characters.";

            valid = false;
        }

        if (valid) {

            alert("Thank you! Your feedback has been submitted.");

            feedbackForm.reset();
        }

    });

}