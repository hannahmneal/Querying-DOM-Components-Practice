// console.log("I work!");      // HN 12-21-18 17:50: javascript is linked to index.html.

// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const welcomeSection = document.querySelector(".article__header");
// console.log(welcomeSection);     // HN 12-21-18 17:53: console.logs the "welcome section" element and it's contents from index.html. 
welcomeSection.textContent = "Welcome to the Coding blog!"
//HN 12-21-18: 18:45: changes text in welcome section to the string above.


// 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let allSections = document.querySelectorAll(".article__header");
// console.log(allSections); //HN 12-21-18 18:45: console.logs Node List
// console.log(allSections.classList); //HN 12-21-18 23:55: logs "undefined"
allSections.classList = ".article__header important";
console.log(allSections);
console.log(allSections.classList);

// 3. Obtain a reference the element with a class of dashed and remove it.

let dashedElement = document.querySelector(".dashed");
console.log(dashedElement);      //HN 12-22-18 24:03: Logs "HTML Collection []"
// dashedElement.className.remove("dashed");
// MDN REFERENCE: div.classList.remove("foo");
dashedElement.classList.remove("dashed");
// dashedElement.classList.add("aside_box--dark");
console.log(dashedElement.classList);

// 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

//IMPORTANT NOTE!!!! THE INSTRUCTIONS SAY "article_footer" but the element has a class of "article__footer" (two underscores, not one). Ask Steve/Jisie about updating this in the instructions. 

let goldenSection = document.querySelector(".article__footer");
console.log(goldenSection);

goldenSection.classList.add("goldenrod");
console.log(goldenSection.classList);

//HN 12-22-18 24:36: MISSION ACCOMPLISHED.
