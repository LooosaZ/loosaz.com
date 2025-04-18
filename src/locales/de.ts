export default {
    name: "Deutsch",
    routes: {
        home: "Start",
        about: "Über",
        contact: "Kontakt",
        blog: "Blog",
    },
    footer: {
        message: "you're cute",
        donate: "unterstütze mich",
        sourceCode: "source code",
    },
    home: {
        title: "LoosaZ' Portfolio",
        description: "Wilkommen zu meinem Portfolio!",
        hello: "Hi, ich bin <0>LoosaZ!</0>",
        about: "Ich bin ein autodidaktischer Softwareentwickler und studiere Cybersecurity. Ich bin ein Minecraft-Hobbyist und Modder für die Java-Edition.",
        about2: "Außerdem mag ich Mods für Discord Clients und Server-Managment.",
        socialsTitle: "Du kannst mich auch hier finden!",
        friendsTitle: "Unternehmen, mit denen ich zusammengearbeitet habe:",
    },
    about: {
        title: "Über mich",
        description: "Lerne mehr über mich und was ich tue",
        intro: "Ich programmiere seit Anfang 2022 und habe mir einige Sprachen und Frameworks selbst beigebracht. Ich mag Open-Source-Projekte!",
        modding: "Ich bin Content Moderator für einige Projekte, sieh dir diese hier an.",
        stack: "Tech Stack",
        projects: "Projekte",
    },
    contact: {
        title: "Kontaktiere mich",
        description: "So kannst du mich kontaktieren",
        socials: "Soziale Medien",
        noscript: "Du musst JavaScript für dieses Formular aktivieren.",
    },
    blog: {
        title: "LoosaZ' Blog",
        description: "Ninguém sabe como ta a mente do palhaço",
        teehee: "Irgendwann werde ich hier drinne yappen, sei ready.",
    },
    "404": {
        title: "Fehler 404 – Seite nicht gefunden",
        description: "Hast du dich verlaufen? :(",
        notFound: "Ups! Die Seite konnte nicht gefunden werden :(",
        lost: "Entweder hast du dich verlaufen oder ich habe die Seite noch nicht eingebaut.",
        goHome: "Clicke Atreus um zurückzukehren!",
        atreusAlt: "Atreus mimir",
    },
} as const;
