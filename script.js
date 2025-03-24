const myEducationBtn = document.getElementById("EducationButton");
const mySkillsBtn = document.getElementById("SkillsButton");
const educationContent = document.getElementById("Education");
const skillsContent = document.getElementById("Skills");
const myUiUxBtn = document.getElementById("UiUxBtn");
const mySoftwareDevBtn = document.getElementById("SoftwareDevBtn");
const uiUxContent = document.getElementById("UiUxContent");
const softwareDevContent = document.getElementById("SoftwareDevContent");

myEducationBtn.addEventListener("click", event =>{
    skillsContent.style.display = "none";
    educationContent.style.display = "block";
    mySkillsBtn.style.color = "#000";
    myEducationBtn.style.color = "#FF5E5E";
    myEducationBtn.style.fontWeight = "800";
    mySkillsBtn.style.fontWeight = "normal";



})

mySkillsBtn.addEventListener("click", event =>{
    educationContent.style.display = "none";
    skillsContent.style.display = "block";
    myEducationBtn.style.color = "#000";
    mySkillsBtn.style.color = "#FF5E5E";
    mySkillsBtn.style.fontWeight = "800";
    myEducationBtn.style.fontWeight = "normal";


})

myUiUxBtn.addEventListener("click", event =>{
    softwareDevContent.style.display = "none";
    uiUxContent.style.display = "grid";
    mySoftwareDevBtn.style.color = "#000";
    myUiUxBtn.style.color = "#FF5E5E";
    myUiUxBtn.style.fontWeight = "800";
    mySoftwareDevBtn.style.fontWeight = "normal";

})

mySoftwareDevBtn.addEventListener("click", event =>{
    uiUxContent.style.display = "none";
    softwareDevContent.style.display = "grid";
    myUiUxBtn.style.color = "#000";
    mySoftwareDevBtn.style.color = "#FF5E5E";
    mySoftwareDevBtn.style.fontWeight = "800";
    myUiUxBtn.style.fontWeight = "normal";

})

