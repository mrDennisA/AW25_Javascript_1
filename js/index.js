const urlApi = "https://rawg-video-games-database.p.rapidapi.com/games";
const header = { headers: { "x-rapidapi-key": "54cdafc0famsh2b62e4690ab5939p110d0ajsncad37585691f" } };
const container = document.querySelector(".container");

async function makeApiCall(url) {
    try {
        const json = await (await fetch(url, header)).json();
        const data = json.results;

        console.log(data);
        data.forEach((dataArray) => {
            container.classList.remove("loader");
            console.log(dataArray);
            container.classList.add("container-grid");
            container.innerHTML += ` <a  href="./details.html?id=${dataArray.id}" class="game-card">
                                            <div class="game-card-media" style="background-image: url(${dataArray.background_image})"></div>
                                            <div class="game-card-info">
                                                <h2>${dataArray.name}</h2>
                                                <ul class="game-card-details">
                                                    <li>Release date: ${dataArray.released}</li>
                                                    <li>Rating:${dataArray.rating}</li>
                                                </ul>
                                            </div>
                                        </a>`;
        });

        /*<li>
            Genres:$
            {dataArray.genres.forEach((genresArray) => {
                genresArray.name;
            })}
        </li>;*/
        // For Loop metode
        /*container.classList.remove("loader");
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            container.classList.add("container-grid");
            container.innerHTML += ` <a  href="./details.html?id=${data[i].id}" class="game-card">
                                            <div class="game-card-media" style="background-image: url(${data[i].background_image})"></div>
                                            <div class="game-card-info">
                                                <h2>${data[i].name}</h2>
                                                <ul>
                                                    <li>Release date: ${data[i].released}</li>
                                                    <li>Rating:${data[i].rating}</li>
                                                    <li>Genres:${data[i].genres.name}</li>
                                                </ul>
                                            </div>
                                        </a>`;
        }*/
    } catch (error) {
        console.log(error);
        container.classList.remove("loader");
        container.innerHTML = ` <div class="error">
                                    <div>
                                        <div class="error-message">Error has accured:</div>
                                        <div class="error-message">${error}</div>
                                    </div>
                                </div>`;
    }
}

makeApiCall(urlApi);
