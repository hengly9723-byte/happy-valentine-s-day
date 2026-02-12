function showMessage() {
    alert("Just wanted to say you're an awesome classmate. Happy Valentine's Day! ❤️");
}

// Create floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);
