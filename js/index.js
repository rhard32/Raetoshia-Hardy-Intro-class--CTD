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