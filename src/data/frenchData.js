const frenchData = {
    actions: {
        switchTo: "EN",
    },

    nav: {
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
    },

    home: {
        greeting: "Salut, je suis",
        title: "une développeur web front-end",
        aboutText: "➵ en savoir plus",
        projectsText: "➵ voir mes projets",
    },

    about: {
        introHeader: "À propos",
        introTitle: "Hey! Je m'appelle Aseel, et je suis une développeur web front-end basée à la ville de Montréal, au Québec.",
        introDescription: "...",
        toolsHeader: "Compétences",
    },

    projects: {
        header: "Projets",
        list: [
            {
                name: "CV app",
                description: "Une application React qui crée un modèle de CV à partir des données d'un formulaire HTML. Le document généré peut être enregistré dans un fichier pdf.",
                tools: "HTML | CSS | Javascript | React.js",
            },
            {
                name: "Todo list app",
                description: "Une application écrite en Javascript pour créer et gérer des projets et leurs tâches associées.",
                tools: "HTML | CSS | Javascript | webpack",
            },
            {
                name: "Weather app",
                description: "Cette application Javascript récupère et affiche la météo actuelle pour la ville de votre choix. Il utilise l'API OpenWeather à https://openweathermap.org.",
                tools: "HTML | CSS | Javascript | webpack | OpenWeather API",
            },
            {
                name: "Battleship game",
                description: "Ceci est une implémentation Javascript du jeu de société «Battleship».",
                tools: "HTML | CSS | Javascript | webpack | Jest",
            },
            {
                name: "Javascript calculator",
                description: "Il s'agit d'une calculatrice codée en Javascript.",
                tools: "HTML | CSS | Javascript",
            },
        ],
    },

    contact: {
        header: "Envoyez-moi un message...",
        name: "Votre nom",
        email: "Addresse courriel",
        message: "Votre message",
        submit: "Envoyer",
    },
};

export { frenchData };