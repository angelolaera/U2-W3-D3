const fetchLibrary = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    })
    .then((library) => {
      console.log(library);
      const row = document.getElementById("card-container");

      library.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = book.img;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary");
        button.innerText = "Scarta";
        button.addEventListener("click", (event) => {
          event.target.closest(".col").remove();
        });

        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.textContent = book.title;

        const price = document.createElement("p");
        price.textContent = book.price;

        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((error) => {
      console.error("Si è verificato un errore durante la richiesta:", error);
    });
};

fetchLibrary();
