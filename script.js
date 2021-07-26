fetch("https://api.tvmaze.com/shows", {
        method: "GET"
    })
    .then(data => data.json())
    .then(shows => load(shows));

function load(shows) {
    var list = document.createElement("div");
    list.className = "list";
    shows.forEach((show) => {
        var a = document.createElement("div");
        a.className = "a";
        a.innerHTML = `
    <div class="img"><img class="image" src="${show.image.original}"></div>
    <div class="text">
    <div>URL:<a href="${show.url}">${show.url}</a></div>
    <div>Official-site:<a href="${show.officialSite}">${show.officialSite}</a></div>
    <div >Name:<span style="color:white">${show.name}</span></div>
    <div>Type:${show.type}</div>
    <div>Language:${show.language}</div>
    <div>Genre:${show.genres}</div>
    <div>Status:${show.status}</div>
    <div>Ruating:${show.rating.average}</div>
    </div>
    `
        list.append(a);
    })
    document.body.append(list);
}
