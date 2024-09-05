import "./polyfills";
import "./themeRuntime";

// meow
console.log(
    "%c ITS ME LOOSAZ",
    "font-size: 50px; color:" +
    getComputedStyle(document.body).getPropertyValue("--accent")
);
