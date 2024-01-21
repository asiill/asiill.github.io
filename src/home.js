import { getLanguageData } from "./utils.js";
import { loadAbout } from "./about.js";
import { loadProjects } from "./projects.js";

const createHome = (isPopStateEvent) => {
    const homeData = getLanguageData("home");

    const home = document.createElement("section");
    home.setAttribute("id", "home");

    const info = document.createElement("div");
    info.classList.add("info");

    const greeting = document.createElement("p");
    greeting.classList.add("greeting");
    greeting.textContent = homeData["greeting"];

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = "Aseel Sh.";

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = homeData["title"];
    
    const btns = document.createElement("div");
    btns.classList.add("btns-home");
    
    const about = document.createElement("button");
    about.classList.add("about-link");
    about.textContent = homeData["aboutText"];
    about.addEventListener("click", () => {
        loadAbout(isPopStateEvent);
    });
    
    const projects = document.createElement("button");
    projects.classList.add("projects-link");
    projects.textContent = homeData["projectsText"];
    projects.addEventListener("click", () => {
        loadProjects(isPopStateEvent)
    });

    const nameWrapper = document.createElement("div");
    nameWrapper.classList.add("name-wrapper");
    nameWrapper.appendChild(greeting);
    nameWrapper.appendChild(name);

    btns.appendChild(about);
    btns.appendChild(projects);

    info.appendChild(nameWrapper);
    info.appendChild(title);

    home.appendChild(info);
    home.appendChild(btns);

    return home;
};

export const loadHome = (isPopStateEvent) => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());

    const active = document.querySelector(".active");
    const homeBtn = document.querySelector(".home-btn");
    if (active) {
        active.classList.remove("active");
        homeBtn.classList.add("active");
    }

    if (!isPopStateEvent) {
        history.pushState({page: "home"}, null, "/home");
    }
};