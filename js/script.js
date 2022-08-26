//Constant that gives access to the study sets
const studySets = document.getElementsByTagName("section")[0].children;

//Either shows or hides the "You currently don't have any study sets messages" depending on whether or not the user has any saved
document.addEventListener("DOMContentLoaded",()=> {
    (studySets.length > 1) ? studySets[0].style.display = "none" : studySets[0].style.display = "block";
})

//Function that allows the user to hit a button to delete all of the study sets they currently have saved
const clearSets = () => {
    if(confirm("Are you sure you want to delete all of your saved sets? Once they are gone, you will not be able to restore them.")) {
        while(studySets.length > 1) {
            studySets[studySets.length-1].remove();
        }
        studySets[0].style.display = "block";
    }
}

document.getElementsByTagName("section")[1].children[1].addEventListener("mousedown",clearSets);