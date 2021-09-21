
const mediaQuery = window.matchMedia("(min-width: 1100px)")

if (mediaQuery.matches) {

// input element for search query
const searchInput = document.getElementById("aa-search-input")
// existing container to load in new list
const algoliaEl = document.getElementsByClassName("js-algolia")[0]
// fist child of the existing container
const algoliaFirstChild = document.getElementsByClassName("block__filters-sort")[0]
// new div to put in content later
const merchEL = document.createElement("div")

merchEL.style.display = "flex"
merchEL.style.justifyContent = "center"
merchEL.style.margin = "auto"
merchEL.style.maxWidth = "902px"
merchEL.style.flexWrap = "wrap"

searchInput.addEventListener("keyup", function() {
    renderMerchAction()
})

algoliaEl.insertBefore(merchEL, algoliaFirstChild)

function renderMerchAction() {
    let categoryName
    let categoryUrl

    merchEL.innerHTML = ""

    if (searchInput.value.toLowerCase() === "fahrrad") {
        categoryName = ["Alle Fahrräder", "City-bikes", "Mountainbikes", "Rennräder", "E-Bikes"]
        categoryUrl = ["/6847-fahrrader", "/6869-citybikes", "/6852-mountainbikes", "/6873-rennrader", "6877-e-bikes"]

    } else if (searchInput.value.toLowerCase() === "camping") {
        categoryName = ["Alles für Camping", "Zelte", "Schlafsäcke", "Luftmatratzen", "Campingmöbel"]
        categoryUrl = ["/content/59-campingshop-oesterreich", "/7056-zelte", "/5648-schlafsacke", "/7055-luftmatratzen", "/7043-campingmobel"]

    } else if (searchInput.value.toLowerCase() === "jagd") {
        categoryName = ["Alles für die Jagd", "Jagdbekleidung", "Jagdschuhe"]
        categoryUrl = ["/content/84-jagd-und-sportschiessent", "/6668-jagdbekleidung", "/6637-jagdstiefel-jagdschuhe-und-gummistiefel"]

    } else if (searchInput.value.toLowerCase() === "reiten") {
        categoryName = ["Alles für Reiter & Pferd", "Reitbekleidung", "Reitzubehör", "Pferdzubehör"]
        categoryUrl = ["/content/87-reitshop", "/5806-reitbekleidung", "/5798-reitzubehor", "/5829-pferdezubehor"]

    } else {
        categoryName = ""
        categoryUrl = ""
    }

    for (let i = 0; i < categoryName.length; i++) {
        merchEL.innerHTML += `<div class="subcategories-item" style="
        margin: 20px 2px 10px;">
        <a href="${categoryUrl[i]}" style="
        margin-right: 10px;
        padding: 10px 24px;
        border-radius: 19px;
        border: 1px solid #edeff1;
        background-color: #fff;
        width: auto;
        height: auto;
        text-align: center;
        color: #575d5e;
        font-size: 14px;
        ">${categoryName[i]}</a></div>`
    }
}

renderMerchAction()

}