// DOM Manipulation Practice - Lighten up, T. Rex, geez.

// 1. Link your javascript in the HTML above the closing </body> tag.

// 2. Use querySelector to create a variable that contains the page's h1 title, and change the title using textContent into something a bit nicer.


let h1 = document.querySelector("#page-title");
h1.textContent = "T-REX IS SICK AS HELL";

// 3. Use querySelector to create a variable that contains the dinosaur image, and change the src to "./images/cute-dino.jpeg" so he doesn't look so mean. You can change an item's src by just calling the src method (item.src = "new_src";)

const img = document.querySelector("#dino-img");
img.src = "images/cute-dino.jpeg";

// 4. Use querySelector to create a variable for the document body, and change the background color to something less harsh and intense.

const body = document.querySelector("body");
body.style.background = "green";

// 5. Modify the following array to add at least 3 facts about the T. Rex that aren't so frightening. They don't need to be real facts.

let dinoFacts = [
    "Fact 1: T. Rex can dance like a cool guy.",
    "Fact 2: T. Rex still roam the earth.",
    "Fact 3: T. Rex is not that big.",
];

// 6. Replace the facts on the page with our new array of facts:
// 6.1 First, use querySelector to create a variable for the list.
const ul = document.querySelector("#facts");

// 6.2 Then, remove all of the current content by setting your list variable's innerHTML to a blank string (variable.innerHTML = "")

ul.innerHTML = "";

// 6.3 Then loop through the dinoFacts array, and appendChild each fact to the list variable. Remember you can loop through an array by using array.length to get the total number of items in the array to end the loop;

for (let i = 0; i < dinoFacts.length; i++) {
    const fact = dinoFacts[i];
    const li = document.createElement("li");
    li.textContent = fact;
    ul.appendChild(li);
}


