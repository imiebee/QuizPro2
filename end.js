//Code regarding local storage obtained from https://www.section.io
const finalScore = document.getElementById("finalScore");
const mostRecentScore = JSON.parse(window.localStorage.getItem("mostRecentScore"));

finalScore.innerText = mostRecentScore;