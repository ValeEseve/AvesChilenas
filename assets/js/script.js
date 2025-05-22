// Variables



function renderBirds(db){
    const birds = document.querySelector(".render-birds")
    birds.innerHTML = ""
    db.forEach(ave => {
        const card = document.createElement("article")
        card.classList.add("card-bird")
        card.innerHTML = `
            <div class="card-title">
            <img src="${ave.img}" class="card-img" alt="${ave.nombre}" />
            <p class="card-name">${ave.nombre}</p>
            <p class="card-c-name">${ave.nombre_cientifico}</p>
          </div>
          <hr />
          <div class="card-car">
            <div class="card-height">
              <i data-lucide="ruler"></i>
              <p>${ave.tamano} cm</p>
            </div>
            <div class="card-habitat">
              <i data-lucide="house"></i>
              <p>${ave.habitat}</p>
            </div>
            <div class="card-diet">
              <i class="fa-solid fa-utensils card-diet-icon"></i>
              <div class="card-diet-icons">${ave.dieta_icons}
              </div>
            </div>
            <div class="card-location">
                <i data-lucide="map-pin"></i>
                <p>${ave.zona_de_chile}</p>
            </div>
            <div class="card-risk">
                <i data-lucide="triangle-alert"></i>
                <p>${ave.riesgo}</p>
            </div>
          </div>
          <button class="card-btn"><i data-lucide="volume-2"></i></button>
        `
        birds.appendChild(card)
    });
    lucide.createIcons()
}


renderBirds(aves)