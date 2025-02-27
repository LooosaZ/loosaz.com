import "./polyfills";
import "./themeRuntime";

// meow
console.log(
    "%c WHY ARE YOU LOOKING INTO CONSOLE, ENJOY THE WEBSITE",
    "font-size: 50px; color:" +
    getComputedStyle(document.body).getPropertyValue("--accent")
);
