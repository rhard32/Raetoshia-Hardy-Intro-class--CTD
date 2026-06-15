//Getting current year and date for footer

let today = new Date();
let thisYear = today.getFullYear();

//Selecting the footer and creating a paragraph element for the copyright information
let footer = document.querySelector("footer");
let copyright = document.createElement("p");

//Storing the skills in an array

let skills = ["Agile", "CSS", "HTML", "Javascript", "GitHub"];

//Select the skills and its unordered list

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector("ul");

//looping thru the skills array and adding each skill as a list item

for (let i = 0; i < skills.length; i++) {

    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//adding the current year to the copyright text

copyright.innerHTML = "@ Raetoshia Hardy " + thisYear;

footer.appendChild(copyright);

let projectSection = document.getElementById("Projects");
let projectList = projectSection.querySelector("ul");

//fetching repo data from GitHub API

fetch('https://api.github.com/users/rhard32/repos')
.then(response => response.json())
.then(data => {
    
    //stor repo data return from GitHub

    const repositories = data;

//looping thru each repi and adding its name in Projects list

    for(let i =0; i <repositories.length; i++){
        let project = document.createElement('li');
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }

    //Logging the repo to the console to verify the data is being fetched correctly

    console.log(repositories);
})

//catching any errors that occur during the fetch process and logging them to the console

.catch(error => console.log('Error fetching repositories',error));

//Selecting the leave message form

const messageForm = document.querySelector('form[name= "leave_message"]');

//Event Listener for submissions

messageForm.addEventListener("submit", function (event) {
    
//Preventing the page from refreshing when the form is submitted

    event.preventDefault();

//Capturing the values entered by the user

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

//Logging the values to the console (for testing purposes)

    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);

    //selecting the message section and its list

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    //Creating a new list item for the message

    const newMessage = document.createElement("li");

    //Adding the user's name, email, and message to the list item

    newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a><span> says: ' + usersMessage + '</span>';

//Creating a remove button for the message to be deleted if desired

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

//Adding an event listener to the remove button to delete the message when clicked

    removeButton.addEventListener("click", function(event){
        const entry = event.target.parentNode;
        entry.remove();
    });

//Appending the remove button to the message and the message to the list

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    //Clearing the form fields after submission
    messageForm.reset();
});
