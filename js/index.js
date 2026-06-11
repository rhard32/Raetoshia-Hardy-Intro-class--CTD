let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");

let skills = ["Agile", "CSS", "HTML", "Javascript", "GitHub"];

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {

    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

copyright.innerHTML = "@ Raetoshia Hardy " + thisYear;

footer.appendChild(copyright);

let projectSection = document.getElementById("Projects");
let projectList = projectSection.querySelector("ul");


fetch('https://api.github.com/users/rhard32/repos')
.then(response => response.json())
.then(data => {
    const repositories = data;
    for(let i =0; i <repositories.length; i++){
        let project = document.createElement('li');
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }
    console.log(repositories);
})
.catch(error => console.log('Error fetching repositories',error));

const messageForm = document.querySelector('form[name= "leave_message"]');

messageForm.addEventListener("submit", function (event) {
    
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a><span> says: ' + usersMessage + '</span>';

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function(event){
        const entry = event.target.parentNode;
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});
