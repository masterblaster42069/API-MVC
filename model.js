var requestOptions = {
    method: "GET",
    redirect: "follow",
};

function fetchData() {
    return fetch(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
        requestOptions
    ).then(function (response) {
        return response.json();
    });
}
/*  .then(function (result) {
        for (games of result) {
            document.getElementById("app").innerHTML += `
        <li id="list">
            <img src="${games.thumb}">
            <p>Title: ${games.title}</p>
            <p>Price: ${games.salePrice}</p>
            <p>Normal Price: ${games.normalPrice}</p>
            <p>${games.isOnSale ? "On Sale" : "No Sale Here"}</p>
            <p>SteamRating: ${games.steamRatingText}</p>
            <p>Metacritic: ${games.metacriticScore}</p>
            <a href="https://store.steampowered.com/app/${
                games.steamAppID
            }">Steam</a>
        </li>
            `;
        }
    }) */

/*     <tr>
    <td><img src='${games.thumb}'></td>
    <td>${games.title}</td>
    <td>${games.salePrice}</td>
    <p>SteamRating: ${game.steamRatingText}</p> not working
    <p>Metacritic: ${game.metacriticScore}</p> not working
    <td>${games.normalPrice}</td>
</tr> */
