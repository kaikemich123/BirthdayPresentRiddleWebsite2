function submitAnswer() {
    var input = document.getElementById("answerbox");
    var answerfeed = document.getElementById("answerfeed");
    if (input.value.toLowerCase() === "dlkvz") {
        answerfeed.innerHTML = "https://www.youtube.com/watch?v=qGO3IzKPDvY"
    } else {
        answerfeed.innerHTML = answerfeed.innerHTML + "Verkeerde code, tip: denk niet te ver, het is geen lange code en het is voor de hand liggend\n\n"
    }
}   