document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            console.log(event)
            window.location.href = "quiz.html";
        }
    });
})