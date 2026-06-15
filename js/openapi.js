const peopleButton = document.getElementById("peopleButton");
const planetButton = document.getElementById("planetButton");
const results = document.getElementById("results");
const dataTitle = document.getElementById("dataTitle");

peopleButton.addEventListener("click", function() {

   dataTitle.textContent = "Star Wars Characters";
    fetch("https://www.swapi.tech/api/people")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        results.innerHTML = "";

        data.results.forEach(function(character) {
            const listItem = document.createElement("li");
            listItem.textContent = character.name;
            results.appendChild(listItem);
        });
    })

    .catch(function(error) {
        results.innerHTML = "Unable to load Characters";
        console.log(error);
    });
});

planetButton.addEventListener("click",function() {
    
    dataTitle.textContent = "Star Wars Planets";
    fetch("https://www.swapi.tech/api/planets")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        results.innerHTML = "";
        data.results.forEach(function(planet) {
            const listItem = document.createElement("li");
            listItem.textContent = planet.name;
            results.appendChild(listItem);
        });
    })

    .catch(function(error) {
        results.innerHTML = "<li>Unable to load Planets. Please try again.</li>";
        console.log(error);
    });
    
});