const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


let planets_section = document.querySelector("#planets")
planets.forEach(planet => {
    planets_section.innerHTML +=`
    <p>${planet}</p>
    `;
    
})
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/


const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


const capitalizedPlanets = planets.map(planet => {
    return capitalize(planet);
})

console.log(capitalizedPlanets)



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

// Array to contain all the New York businesses
const ePlanets = planets.filter(planet => {
    let hasE = false
  
    if (planet.includes("e")) {
        hasE = true
    }
  
    return hasE
})

console.log(ePlanets);