document.getElementById("play").addEventListener("click", () => {
    fetch("/play");
});
document.getElementById("pause").addEventListener("click", () => {
    fetch("/pause");
});
document.getElementById("next").addEventListener("click", () => {
    fetch("/next");
});
document.getElementById("prev").addEventListener("click", () => {
    
    fetch("/prev");
});
