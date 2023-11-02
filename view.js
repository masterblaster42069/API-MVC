function displayResult() {
    fetchData().then(function (result) {
        for (games of result) {
            document.getElementById("app").innerHTML += `
    <li id="list">
        <img src="${games.thumb}">
        <p id="title">Title: ${games.title}</p>
        <p id="price">Price: $${games.salePrice}</p>
        <p id="normal">Normal Price: $${games.normalPrice}</p>
        <p id="sale">${games.isOnSale ? "On Sale" : "No Sale Here"}</p>
        <p id="sRating">SteamRating: ${games.steamRatingText}</p>
        <p id="mRating">Metacritic: ${games.metacriticScore}</p>
        <p id="rating">Deal Rating: ${games.dealRating}</p>
        <a id="link" href="https://store.steampowered.com/app/${
            games.steamAppID
        }">Steam</a>

    </li>
        `;
        }
    });
}
