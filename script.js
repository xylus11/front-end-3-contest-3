document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    // Perform authentication (you'd typically send this data to a server for verification)
    if (password.value!= password2.value) {
      document.getElementById("loginStatus").innerText = "Error:All fields are mandatory";
      // Redirect to a new page or perform actions upon successful login
    } else {
      document.getElementById("loginStatus").innerText =
        "Login successful!";
    }
    email
    password2
  });
