const btn = document.querySelector(".change-theme");
const body = document.querySelector("body");

const theme = localStorage.getItem("theme");
if (theme) {
    body.classList.add(theme);
}

btn.addEventListener("click", changeTheme);

function changeTheme() {
    body.classList.toggle("body");
    body.classList.toggle("dark");
 
    localStorage.clear();

    if (body.classList.contains("body")) {
        localStorage.setItem("theme", "body");
    } else if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
}


