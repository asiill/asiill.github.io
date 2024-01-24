import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadProjects } from "./projects.js";
import { loadContact } from "./contact.js";
import {  updateImagePaths, updateLanguageData } from "./utils.js";

let isPopStateEvent = false;

const getCurrentPage = () => {
    const active = document.querySelector(".active");
    
    return active.dataset.page;
};

const handlePopState = (e) => {
    isPopStateEvent = true;
    const currentPage = getCurrentPage();
    const active = document.querySelector(".active");
    if (e.state && e.state.page !== currentPage) {
        active.classList.remove("active");
        if (e.state.page === "home") {
            loadHome(isPopStateEvent);
        } else if (e.state.page === "about") {
            loadAbout(isPopStateEvent);
        } else if (e.state.page === "projects") {
            loadProjects(isPopStateEvent);
        } else if(e.state.page === "contact") {
            loadContact(isPopStateEvent);
        }
    }
    isPopStateEvent = false;
};

const addEventListeners = () => {
    const homeBtn = document.querySelector(".home-btn");
    const aboutBtn = document.querySelector(".about-btn");
    const projectsBtn = document.querySelector(".projects-btn");
    const contactBtn = document.querySelector(".contact-btn");
    const language = document.querySelector(".toggle-language");
    const mode = document.querySelector(".toggle-mode");

    homeBtn.addEventListener("click", () => {
        loadHome(isPopStateEvent);
    });
    aboutBtn.addEventListener("click", () => {
        loadAbout(isPopStateEvent);
    });
    projectsBtn.addEventListener("click", () => {
        loadProjects(isPopStateEvent);
    });
    contactBtn.addEventListener("click", () => {
        loadContact(isPopStateEvent);
    });

    language.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.classList.toggle("french");
        updateLanguageData();
    });

    mode.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
        updateImagePaths();
    });

    window.addEventListener("popstate", handlePopState);
};

export const loadWebsite = () => {
    addEventListeners();

    loadHome(isPopStateEvent);
    history.replaceState({page: "home"}, null, "/home");

    const homeBtn = document.querySelector(".home-btn");
    homeBtn.classList.add("active");
};

