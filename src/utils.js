import { englishData } from "./data/englishData.js";
import { frenchData } from "./data/frenchData.js";

export const getLanguageData = (type) => {
    // Check if the body has the "french" class
    const isFrenchMode = document.body.classList.contains("french");

    // Define language data for english/french
    const english = englishData[type];
    const french = frenchData[type];

    // Return the data based on the current language
    return isFrenchMode ? french : english;
};

const updateText = (selector, data, key) => {
    const el = document.querySelector(selector);
    if (el) {
        el.textContent = data[key];
    }
}

const updateHeader = () => {
    const actionsData = getLanguageData("actions");
    const navData = getLanguageData("nav");
    
    updateText(".toggle-language", actionsData, "switchTo");
    updateText(".home-btn", navData, "home");
    updateText(".about-btn", navData, "about");
    updateText(".projects-btn", navData, "projects");
    updateText(".contact-btn", navData, "contact");
};

const updateHome = () => {
    const homeData = getLanguageData("home");

    updateText(".greeting", homeData, "greeting");
    updateText(".title", homeData, "title");
    updateText(".about-link", homeData, "aboutText");
    updateText(".projects-link", homeData, "projectsText");
};

const updateAbout = () => {
    const aboutData = getLanguageData("about");

    updateText(".intro-header", aboutData, "introHeader");
    updateText(".intro-title", aboutData, "introTitle");
    updateText(".intro-description", aboutData, "introDescription");
    updateText(".tools-header", aboutData, "toolsHeader");
};

const updateProjects = () => {
    const projectsData = getLanguageData("projects");
    const list = projectsData["list"];

    updateText(".projects-header", projectsData, "header");

    const descriptions = document.querySelectorAll(".project-description");
    if (descriptions) {
        descriptions.forEach((des) => {
            let parentElement = des.parentNode;
            let nameElement = parentElement.querySelector(".project-name");
            let name = nameElement.textContent;
            let project = list.find(p => p.name === name);
            des.textContent = project.description;
        });
    }
};

const updateContact = () => {
    const contactData = getLanguageData("contact");

    updateText(".contact-header", contactData, "header");
    updateText("label[for='contact-name']", contactData, "name");
    updateText("label[for='contact-email']", contactData, "email");
    updateText("label[for='contact-message']", contactData, "message");
    updateText("#submit-btn", contactData, "submit");
};

export const updateLanguageData = () => {
    updateHeader();
    updateHome();
    updateAbout();
    updateProjects();
    updateContact();
};

export const getImagePath = (imageName) => {
    // Check if the body has the "dark" class
    const isDarkMode = document.body.classList.contains("dark");

    // Define image paths for light/dark modes
    const lightPath = `./images/${imageName}-light.svg`;
    const darkPath = `./images/${imageName}-dark.svg`;

    // Return the path based on the mode
    return isDarkMode ? darkPath : lightPath;
};

export const updateImagePaths = () => {
    const modeImg = document.querySelector(".toggle-mode img");
    if (modeImg) {
        modeImg.src = getImagePath("mode");
    }
};

export const createSvg = (xmlns, viewBox, d) => {
    const svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute("viewBox", viewBox);

    const path = document.createElementNS(xmlns, "path");
    path.setAttribute("d", d);

    svg.appendChild(path);

    return svg;
};