function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendemail() {
    const formData = new FormData(document.getElementById("contactForm"));
    
    fetch("process-form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Message sent successfully!");
    })
    .catch(error => {
        alert("There was an error sending your message.");
    });
}

