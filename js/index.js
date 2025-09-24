const body = document.body;

let footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Aaliyah Closs ${thisYear}`;

footer.appendChild(copyright);
footer.style.textAlign = 'center';
footer.style.backgroundColor = '#003049';
footer.style.color = 'white';


const skills = ["JavaScript", "HTML", "CSS", "Git" ,"Github"];
const skillSection = document.getElementById("skills");
const skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
  
}

