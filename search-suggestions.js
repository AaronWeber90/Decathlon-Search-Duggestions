var mediaQuery = window.matchMedia("(min-width: 1100px)");

if (mediaQuery.matches) {
    (function () {
        var renderMerchAction = function renderMerchAction() {
            var categoryName = void 0;
            var categoryUrl = void 0;

            merchEL.innerHTML = "";

            if (searchInput.value.toLowerCase() === "fahrrad") {
                categoryName = ["Alle Fahrräder", "City-bikes", "Mountainbikes", "Rennräder", "E-Bikes"];
                categoryUrl = ["/6847-fahrrader", "/6869-citybikes", "/6852-mountainbikes", "/6873-rennrader", "6877-e-bikes"];
            } else if (searchInput.value.toLowerCase() === "camping") {
                categoryName = ["Alles für Camping", "Zelte", "Schlafsäcke", "Luftmatratzen", "Campingmöbel"];
                categoryUrl = ["/content/59-campingshop-oesterreich", "/7056-zelte", "/5648-schlafsacke", "/7055-luftmatratzen", "/7043-campingmobel"];
            } else if (searchInput.value.toLowerCase() === "jagd") {
                categoryName = ["Alles für die Jagd", "Jagdbekleidung", "Jagdschuhe"];
                categoryUrl = ["/content/84-jagd-und-sportschiessent", "/6668-jagdbekleidung", "/6637-jagdstiefel-jagdschuhe-und-gummistiefel"];
            } else if (searchInput.value.toLowerCase() === "reiten") {
                categoryName = ["Alles für Reiter & Pferd", "Reitbekleidung", "Reitzubehör", "Pferdzubehör"];
                categoryUrl = ["/content/87-reitshop", "/5806-reitbekleidung", "/5798-reitzubehor", "/5829-pferdezubehor"];
            } else {
                categoryName = "";
                categoryUrl = "";
            }

            for (var i = 0; i < categoryName.length; i++) {
                merchEL.innerHTML += "<div class=\"subcategories-item\" style=\"\n        margin: 20px 2px 10px;\">\n        <a href=\"" + categoryUrl[i] + "\" style=\"\n        margin-right: 10px;\n        padding: 10px 24px;\n        border-radius: 19px;\n        border: 1px solid #edeff1;\n        background-color: #fff;\n        width: auto;\n        height: auto;\n        text-align: center;\n        color: #575d5e;\n        font-size: 14px;\n        \">" + categoryName[i] + "</a></div>";
            }
        };

        // input element for search query
        var searchInput = document.getElementById("aa-search-input");
        // existing container to load in new list
        var algoliaEl = document.getElementsByClassName("js-algolia")[0];
        // fist child of the existing container
        var algoliaFirstChild = document.getElementsByClassName("block__filters-sort")[0];
        // new div to put in content later
        var merchEL = document.createElement("div");

        merchEL.style.display = "flex";
        merchEL.style.justifyContent = "center";
        merchEL.style.margin = "auto";
        merchEL.style.maxWidth = "902px";
        merchEL.style.flexWrap = "wrap";

        searchInput.addEventListener("keyup", function () {
            renderMerchAction();
        });

        algoliaEl.insertBefore(merchEL, algoliaFirstChild);

        renderMerchAction();
    })();
}