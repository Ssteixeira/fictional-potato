function showMessage(type) {
    const messageElement = document.getElementById("message");

    if (type === "gift") {
        messageElement.textContent = "Here's a virtual gift for you! 🎁";
    } else if (type === "miss") {
        messageElement.textContent = "I miss you so much! 😢";
    } else if (type === "love") {
        messageElement.textContent = "I love you more than anything! 😘";
    }

    messageElement.classList.remove("hidden");
    messageElement.style.display = "block";
}
