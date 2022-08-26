//Constant that gives access to the study sets
const studySets = document.getElementsByTagName("section")[0].children;

//Constant that gives access to the new set page
const newSetPage = document.getElementById("newSetPage");

//Class for representing a study set
class StudySet {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    //Method that adds a study item to the lists
    addItem(item) {
        this.items.push(item);
    }

    //Returns a shuffled version 
}

//Class for representing individual study items
class StudyItem {
    constructor(question, rightAnswer, wrongAnswers) {
        this.question = question;
        this.rightAnswer = rightAnswer;
        this.wrongAnswers = wrongAnswers;
    }
}

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

//Function that allows the user to create a new study set
const addSet = () => {
    newSetPage.style.zIndex = "1";
    newSetPage.style.opacity = "1";
}

document.getElementsByTagName("section")[1].children[0].addEventListener("mousedown",addSet);

//Function that allows the user to exit out of the set creation page
const exitSetCreation = () => {
    if(confirm("Are you sure you want to exit? All progress made on the set will be lost.")) {
        newSetPage.style.opacity = "0";
        newSetPage.style.zIndex = "-1";
    }
}

newSetPage.children[0].children[1].addEventListener("mousedown",exitSetCreation);