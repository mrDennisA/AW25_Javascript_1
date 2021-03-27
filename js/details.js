const titleContainer = document.querySelector("title");
const breadCrumbs = document.querySelector(".breadCrumbs-gameName");
const detailsContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
    location.href = "/";
}

const urlID = "https://rawg-video-games-database.p.rapidapi.com/games/" + id;

async function fetchArray(url) {
    try {
        const data = await (await fetch(url, header)).json();
        //console.log(data);
        createHtml(data);
    } catch (error) {
        console.log(error);
        detailsContainer.classList.remove("loader");
        detailsContainer.innerHTML = `  <div class="error">
                                            <div>
                                                <div class="error-message">Error has accured:</div>
                                                <div class="error-message">${error}</div>
                                            </div>
                                        </div>`;
    }
}

function createHtml(content) {
    document.body.style.background = `radial-gradient(circle at top, var(--color05) 0%, var(--color01) 100%), url(${content.background_image})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "top center";
    document.body.style.backgroundAttachment = "fixed";
    detailsContainer.classList.remove("loader");
    breadCrumbs.innerHTML = `${content.name}`;
    titleContainer.innerHTML = `${content.name}`;
    detailsContainer.innerHTML = `  <div class="details">
                                        <div class="details-info">
                                            <h1>${content.name}</h1>
                                            <div class="details-info__details">
                                                <div>
                                                    <span class="smalltitle">Publisher</span>
                                                    <span>${content.developers[0].name}</span>
                                                </div>
                                                <div>
                                                    <span class="smalltitle">Release date</span>
                                                    <span>${content.released}</span>
                                                </div>
                                            </div>
                                            <div class="details-info__about">
                                                <h3>About</h3>
                                                <p>${content.description}</p>
                                            </div>
                                        </div>
                                        <div class="details-media">
                                            <div>
                                                <video class="details-media__video grid-item01" loop="true" autoplay="autoplay" controls muted><source src="${content.clip.clip}"></video>
                                                <img class="details-media__images grid-item02" src="${content.background_image}">
                                                <img class="details-media__images grid-item03" src="${content.background_image_additional}">
                                            </div>
                                        </div>
                                    </div>`;
}

fetchArray(urlID);
