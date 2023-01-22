const navBar = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const header = document.querySelector(".page__header");
// End Global Variables

// Start build the nav
function buildNav() {
  sections.forEach((section) => {
    //Create the li elements that contained inside the ul
    const navButton = document.createElement("li");
    //Insert the html text to  the li
    navButton.insertAdjacentHTML(
      "afterbegin",
      `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`
    );
    //Append the li to the ul
    navList.appendChild(navButton);

    //scrollBehavior Function Invoke
    scrollBehavior(navButton, section);
  });
  //Append the ul to the nav
  navBar.appendChild(navList);
}

//Build Nav Function Invoke
buildNav();

//End build the nav

// Start of Scroll to anchor ID using scrollTO event
function scrollBehavior(navButton, section) {
  navButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  });
}
