function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase().trim();
    const messageElement = document.getElementById("message");
    
    if (answer.includes("gummy")) {
        messageElement.style.display = "block";
        messageElement.innerHTML = "You nailed it! 🎉 Speaking of sweet things, would you be my girlfriend? 💖";
    } else {
        alert("Not quite! Hint: It's something chewy and sweet! 🍬");
    }
}
