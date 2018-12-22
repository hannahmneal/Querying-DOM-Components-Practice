// console.log("I work!");      // HN 12-21-18 17:50: javascript is linked to index.html.

// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const welcomeSection = document.querySelector(".article__header");
// console.log(welcomeSection);     // HN 12-21-18 17:53: console.logs the "welcome section" element and it's contents from index.html. 
welcomeSection.textContent = "Welcome to the Coding blog!"
//HN 12-21-18: 18:45: changes text in welcome section to the string above.


// 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let allSections = document.querySelectorAll("article__header");
// console.log(allSections); //HN 12-21-18 18:45: console.logs Node List
// console.log(allSections.classList); //HN 12-21-18 23:55: logs "undefined"
allSections.classList = "article__header important";
console.log(allSections);

// 3. Obtain a reference the element with a class of dashed and remove it.

// 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.