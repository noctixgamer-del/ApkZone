const searchInput = document.getElementById("searchInput");
const appCards = document.querySelectorAll(".app-link");

searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    appCards.forEach(function (card) {
        const appName = card.innerText.toLowerCase();

        if (appName.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});