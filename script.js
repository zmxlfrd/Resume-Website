function toggleMenu() {
    const menu = document.querySelector(".menu-links"); 
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs
        .send("service_20pigze", "template_jm79tde", params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log("Response:", res);
            alert("Message sent successfully!");
        })
        .catch((err) => {
            console.error("Error:", err);
            alert("Failed to send the message. Please try again later.");
        });
}
