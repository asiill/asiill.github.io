import { getLanguageData } from "./utils.js";

const createForm = (contactData) => {
    const form = document.createElement("form");
    form.setAttribute("id", "contact-form");
    form.setAttribute("action", "https://formspree.io/f/xvoegzdl");
    form.setAttribute("method", "post");

    /* --- Name field --- */
    const formRowName = document.createElement("div");
    formRowName.classList.add("form-row");

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "contact-name");
    nameLabel.textContent = contactData["name"];

    const name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("name", "contact-name");
    name.setAttribute("id", "contact-name");
    name.required = true;

    /* --- Email field --- */
    const formRowEmail = document.createElement("div");
    formRowEmail.classList.add("form-row");

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "contact-email");
    emailLabel.textContent = contactData["email"];

    const email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("name", "contact-email");
    email.setAttribute("id", "contact-email");
    email.required = true;

    /* --- Message field --- */
    const formRowMessage = document.createElement("div");
    formRowMessage.classList.add("form-row");

    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "contact-message");
    messageLabel.textContent = contactData["message"];

    const message = document.createElement("textarea");
    message.setAttribute("name", "contact-message");
    message.setAttribute("id", "contact-message");
    message.required = true;

    /* --- Submit button --- */
    const formRowSubmit = document.createElement("div");
    formRowSubmit.classList.add("form-row");

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit-btn");
    submit.textContent = contactData["submit"];

    
    formRowName.appendChild(nameLabel);
    formRowName.appendChild(name);

    formRowEmail.appendChild(emailLabel);
    formRowEmail.appendChild(email);

    formRowMessage.appendChild(messageLabel);
    formRowMessage.appendChild(message);

    formRowSubmit.appendChild(submit);

    form.appendChild(formRowName);
    form.appendChild(formRowEmail);
    form.appendChild(formRowMessage);
    form.appendChild(formRowSubmit);

    return form;
};

const createContact = () => {
    const contactData = getLanguageData("contact");

    const contact = document.createElement("section");
    contact.setAttribute("id", "contact");

    const header = document.createElement("h1");
    header.classList.add("contact-header");
    header.textContent = contactData["header"];

    contact.appendChild(header);
    contact.appendChild(createForm(contactData));

    return contact;
};

export const loadContact = (isPopStateEvent) => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createContact());

    const active = document.querySelector(".active");
    const contactBtn = document.querySelector(".contact-btn");
    if (active) {
        active.classList.remove("active");
        contactBtn.classList.add("active");
    }

    if (!isPopStateEvent) {
        history.pushState({page: "contact"}, null, "/contact");
    }
};