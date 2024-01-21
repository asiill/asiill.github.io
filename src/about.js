import { getLanguageData } from "./utils.js";

const createTools = () => {
    const toolsList = document.createElement("div");
    toolsList.classList.add("tools-list");

    let list = ["HTML", "CSS", "Javascript", "React.js", "Git", "npm", "webpack", "Jest"];
    let elements = [];

    for (let i = 0; i < list.length; i++) {
        let string = list[i];
        let str = string.toLowerCase().replace(".", "");
        let path = `./images/tools/${str}.svg`;

        const el = document.createElement("div");
        el.classList.add("tool-element");

        const img = document.createElement("img");
        img.src = path;

        const text = document.createElement("p");
        text.textContent = string;

        el.appendChild(img);
        el.appendChild(text);

        elements.push(el);
    }

    for (let i = 0; i < elements.length; i++) {
        let el = elements[i];
        toolsList.appendChild(el);
    }

    return toolsList;
};

const createAbout = () => {
    const aboutData = getLanguageData("about");

    const about = document.createElement("section");
    about.setAttribute("id", "about");

    // Introductory info
    const intro = document.createElement("div");
    intro.classList.add("intro");

    const introHeader = document.createElement("h1");
    introHeader.classList.add("intro-header");
    introHeader.textContent = aboutData["introHeader"];

    const introTitle = document.createElement("p");
    introTitle.classList.add("intro-title");
    introTitle.textContent = aboutData["introTitle"];

    const introDescription = document.createElement("p");
    introDescription.classList.add("intro-description");
    introDescription.textContent = aboutData["introDescription"];

    const introPhoto = document.createElement("img");
    introPhoto.src = "./images/profile.jpg";

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");
    textWrapper.appendChild(introHeader);
    textWrapper.appendChild(introTitle);
    textWrapper.appendChild(introDescription);

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");
    imageWrapper.appendChild(introPhoto);

    // Toolkit info
    const tools = document.createElement("div");
    tools.classList.add("tools");

    const toolsHeader = document.createElement("h1");
    toolsHeader.classList.add("tools-header");
    toolsHeader.textContent = aboutData["toolsHeader"];

    intro.appendChild(textWrapper);
    intro.appendChild(imageWrapper);

    tools.appendChild(toolsHeader);
    tools.appendChild(createTools());

    about.appendChild(intro);
    about.appendChild(tools);

    return about;
};

export const loadAbout = (isPopStateEvent) => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createAbout());

    const active = document.querySelector(".active");
    const aboutBtn = document.querySelector(".about-btn");
    if (active) {
        active.classList.remove("active");
        aboutBtn.classList.add("active");
    }

    if (!isPopStateEvent) {
        history.pushState({page: "about"}, null, "/about");
    }
};
