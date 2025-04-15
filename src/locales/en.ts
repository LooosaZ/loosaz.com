export default {
    name: "English",
    routes: {
        home: "Home",
        about: "About",
        contact: "Contact",
        blog: "Blog",
    },
    footer: {
        message: "you're cute",
        donate: "support me",
        sourceCode: "source code",
    },
    home: {
        title: "LoosaZ's Portfolio",
        description: "Welcome to my portfolio!",
        hello: "Hi, I'm <0>LoosaZ!</0>",
        about: "I'm a self-taught software developer and I study Cybersecurity, I'm a minecraft hobbyist modder for the Java edition.",
        about2: "I also like modifications for Discord Clients and Server Management.",
        socialsTitle: "You can check me out on a lot of places!",
        friendsTitle: "Enterprises I've partnered with:",
    },
    about: {
        title: "About me",
        description: "Learn more about me and what I do",
        intro: "I have been programming since early 2022 and have taught myself some languages and frameworks since. I like open-source projects!",
        modding: "I'm a Content Moderator for some projects, take a look into them here.",
        stack: "Tech Stack",
        projects: "Projects",
    },
    contact: {
        title: "Contact me",
        description: "Learn how to contact me",
        socials: "Socials",
        noscript: "You need to enable JavaScript to use this form.",
    },
    blog: {
        title: "LoosaZ's Blog",
        description: "Ninguém sabe como ta a mente do palhaço",
        teehee: "One day I will yap in here, get ready.",
    },
    "404": {
        title: "404 Not Found",
        description: "Are you lost? :(",
        notFound: "Oops! That page was not found :(",
        lost: "Either you're lost or I might have just not implemented this page yet.",
        goHome: "Click Atreus to get back home!",
        atreusAlt: "Atreus mimir",
    },
} as const;
