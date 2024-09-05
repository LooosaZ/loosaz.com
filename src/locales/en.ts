export default {
    name: "English",
    routes: {
        home: "Home",
        contact: "Contact",
        blog: "Blog",
    },
    footer: {
        message: "you're cute",
        sourceCode: "source code",
    },
    home: {
        title: "LoosaZ's Site",
        description: "read if cute",
        hello: "Hi, I'm <0>LoosaZ!</0>",
        about: "I'm a self-taught software developer and I study Cybersecurity, I enjoy doing Minecraft Mods",
        about2: "I also like Discord clients and frontend stuff.",
        socialsTitle: "You can check me out on a lot of places!",
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
        teehee: "I really wanna write something here at some point",
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
