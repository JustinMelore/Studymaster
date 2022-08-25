//Either shows or hides the "You currently don't have any study sets messages" depending on whether or not the user has any saved
document.addEventListener("DOMContentLoaded",()=> {
    const studySets = document.getElementsByTagName("section")[0].children;
    (studySets.length > 1) ? studySets[0].style.display = "none" : studySets[0].style.display = "block";
})