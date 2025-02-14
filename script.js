document.addEventListener("DOMContentLoaded", function () {
    // ========== MAIN PAGE: Door Popup ==========
    const door = document.getElementById("door");
    const doorPopup = document.getElementById("door-popup");
    const closeDoorPopup = document.getElementById("close-door-popup");
    const submitCode = document.getElementById("submit-code");
    const codeInput = document.getElementById("code-input");
    const feedbackMessage = document.getElementById("feedback-message");

    if (door) {  // Ensures the script only runs if these elements exist
        door.addEventListener("click", function () {
            doorPopup.style.display = "flex";
        });

        closeDoorPopup.addEventListener("click", function () {
            doorPopup.style.display = "none";
            codeInput.value = ""; // Clear input field when closing
            feedbackMessage.innerHTML = ""; // Clear messages
        });

        submitCode.addEventListener("click", function () {
            const correctCode = "jOwUqQdTkfU";
            if (codeInput.value === correctCode) {
                feedbackMessage.innerHTML = "YAY YOU GOT IT RIGHT!!! HEPPY!!!";
                setTimeout(() => {
                    feedbackMessage.innerHTML = `Yeah bro if you didn't figure it out. This is a YouTube video code, here lemme help you out: <br>
                    <a href="https://www.youtube.com/watch?v=jOwUqQdTkfU" target="_blank" style="color: blue; text-decoration: underline;">
                    Click here silly</a>`;
                }, 5000);
            } else {
                feedbackMessage.innerHTML = "Sorry lil bro that's wrong. Go try again.";
            }
        });
    }

    // ========== CLUE 1 PAGE: Secret Circle Popup ==========
    const secretCircle = document.getElementById("secret-circle");
    const popup = document.getElementById("c1-popup-overlay");
    const closePopup = document.getElementById("c1-close-popup");

    if (secretCircle) { // Ensures script only runs if elements exist in Clue 1
        secretCircle.addEventListener("click", function () {
            popup.style.display = "flex";
        });

        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }
});
