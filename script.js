"use strict mode";
//Public Key
emailjs.init("A_a1jk-cRiihv8Vaa");

// Function to send email
function sendEmail() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // EmailJS parameters
  const templateParams = {
    user_email: email,
    message: message,
  };

  emailjs
    .send("service_qql4kod", "template_edatuph", templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response.status, response.text);
      showToast();
    })
    .catch((error) => {
      console.error("Email sending error:", error);
    });
}

// Function to show toast notification
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Duration of toast visibility in ms
}
