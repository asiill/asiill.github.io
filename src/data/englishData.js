const englishData = {
    actions: {
        switchTo: "FR",
    },
    
    nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
    },

    home: {
        greeting: "Hello, I'm",
        title: "a front-end web developer",
        aboutText: "➵ learn more",
        projectsText: "➵ see my projects",
    },

    about: {
        introHeader: "About me",
        introTitle: "Hey! My name is Aseel, and I am a front-end web developer based in Montréal, Québec.",
        introDescription: "...",
        toolsHeader: "My toolkit",
    },

    projects: {
        header: "Projects",
        list: [
            {
                name: "CV app",
                description: "A React application which creates a resume template from HTML form data. The generated document can be saved to a pdf file.",
                tools: "HTML | CSS | Javascript | React.js",
            },
            {
                name: "Todo list app",
                description: "An application written in Javascript for creating and managing projects and their associated tasks.",
                tools: "HTML | CSS | Javascript | webpack",
            },
            {
                name: "Weather app",
                description: "This Javascript application fetches and displays the current weather for a given city. It makes use of the OpenWeather API at https://openweathermap.org.",
                tools: "HTML | CSS | Javascript | webpack | OpenWeather API",
            },
            {
                name: "Battleship game",
                description: "This is a Javascript implementation of the board game 'Battleship'.",
                tools: "HTML | CSS | Javascript | webpack | Jest",
            },
            {
                name: "Javascript calculator",
                description: "A simple calculator coded in Javascript.",
                tools: "HTML | CSS | Javascript",
            },
        ],
    },

    contact: {
        header: "Send me a message...",
        name: "Your name",
        email: "Email address",
        message: "Your message",
        submit: "Send",
    },
};

export { englishData };