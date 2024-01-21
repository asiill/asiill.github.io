import { createSvg, getLanguageData } from "./utils.js";

// Create an HTML element for a given project object
const createElement = (project) => {
    // Get project details
    let name = project.name;
    let description = project.description;
    let tools = project.tools;

    // Create project element
    const element = document.createElement("div");
    element.classList.add("project-element");

    // Get image path and create image element
    let str = name.toLowerCase().replaceAll(" ", "");
    let path = `./images/projects/${str}.png`;
    const image = document.createElement("img");
    image.src = path;

    // Get links and create link elements
    let repo = name.toLowerCase().replaceAll(" ", "-");
    let urlCode = `https://github.com/asiill/${repo}`;
    let urlLive = `https://asiill.github.io/${repo}`;

    const links = document.createElement("div");
    links.classList.add("project-links");

    const code = document.createElement("a");
    code.classList.add("code-link");
    code.href = urlCode;
    const codeText = document.createElement("span");
    codeText.textContent = "Code";
    const codeIconSvg = createSvg("http://www.w3.org/2000/svg", "0 0 24 24", "M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z");
    codeIconSvg.classList.add("fill-current");

    const live = document.createElement("a");
    live.classList.add("live-link");
    live.href = urlLive;
    const liveText = document.createElement("span");
    liveText.textContent = "Live";
    const liveIconSvg = createSvg("http://www.w3.org/2000/svg", "0 0 24 24", "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z");
    liveIconSvg.classList.add("fill-current");

    code.appendChild(codeText);
    code.appendChild(codeIconSvg);
    live.appendChild(liveText);
    live.appendChild(liveIconSvg);

    links.appendChild(code);
    links.appendChild(live);

    // Create name element
    const projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.textContent = name;

    // Create description element
    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.textContent = description;

    // Create tools element
    const projectTools = document.createElement("p");
    projectTools.classList.add("project-tools");
    projectTools.textContent = tools;

    // Create wrappers
    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("project-info-wrapper");
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("project-image-wrapper");

    infoWrapper.appendChild(projectName);
    infoWrapper.appendChild(projectDescription);
    infoWrapper.appendChild(projectTools);
    infoWrapper.appendChild(links);
    imageWrapper.appendChild(image);

    element.appendChild(imageWrapper);
    element.appendChild(infoWrapper);

    return element;
};

// Create an HTML wrapper containing all project objects
const createList = (projectsData) => {
    const projectsList = document.createElement("div");
    projectsList.classList.add("projects-list");

    let list = projectsData["list"];
    let elements = [];

    for (let i = 0; i < list.length; i++) {
        let project = list[i];

        const el = createElement(project);
        elements.push(el);
    }

    for (let i = 0; i < elements.length; i++) {
        let el = elements[i];
        projectsList.appendChild(el);
    }

    return projectsList;
};

const createProjects = () => {
    const projectsData = getLanguageData("projects");

    const projects = document.createElement("section");
    projects.setAttribute("id", "projects");

    const header = document.createElement("h1");
    header.classList.add("projects-header");
    header.textContent = projectsData["header"];

    projects.appendChild(header);
    projects.appendChild(createList(projectsData));
    
    return projects;
};

export const loadProjects = (isPopStateEvent) => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createProjects());

    const active = document.querySelector(".active");
    const projectsBtn = document.querySelector(".projects-btn");
    if (active) {
        active.classList.remove("active");
        projectsBtn.classList.add("active");
    }

    if (!isPopStateEvent) {
        history.pushState({page: "projects"}, null, "/projects");
    }
};
