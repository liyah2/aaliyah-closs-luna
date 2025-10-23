// =========Copyright section=============
// Adds copyright to the bottom of the page

const today = new Date();
const thisYear = today.getFullYear();
const body = document.body;
const footer = document.createElement("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Aaliyah Closs ${thisYear}`;
footer.appendChild(copyright);
body.appendChild(footer);


// ===========Skills section==============
// Populate skills section with items assigned to skills
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];
const skillSection = document.getElementById("skills");
const skillsList = skillSection.querySelector(".skill-list");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// ==============Message section====================
// Section to handle forms submission  
function activateMessageSection() {
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}
activateMessageSection();

const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log("Name: ", usersName);
    console.log("Email: ", usersEmail);
    console.log("Message: ", usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: 
    <span> ${usersMessage}</span>`;

// Handles edit and remove button
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.className = "edit-btn";
    editButton.type = "button";

    editButton.addEventListener("click", function () {
        const messageSpan = this.parentNode.querySelector("span");
        const newText = prompt("Edit your message: ", messageSpan.innerText);
        if (newText !== null) {
            messageSpan.innerText = newText;
        }
    });

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.className = "remove-btn";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
        const entry = this.parentNode;
        entry.remove();
        activateMessageSection();
    });
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);

    activateMessageSection();
    messageForm.reset();
});

// ========GitHub Project Section==============
// Retrives projects from GitHub
fetch("https://api.github.com/users/liyah2/repos")
    .then((response) => {
        return response.json();
    })

    .then((repositories) => {
        console.log("Repositories: ", repositories);
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector("ul");
        projectList.innerHTML = "";

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            project.innerHTML = repositories[i].name;
            projectList.appendChild(project);
        }
    })
    .catch((error) => {
        console.log("Error:Something went wrong. Please check back later. ", error);
    });

// ====Hamburger bar========================
// allows hamburger button to appear for smaller screens
const hamMenu = document.querySelector(".ham-menu");
const navbarMenu = document.querySelector(".navbar ul");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active"); 
    navbarMenu.classList.toggle("active"); 
});
