let root = document.documentElement
let themeButton = document.getElementById("theme");
var theme = localStorage.getItem("theme");
if (theme != 'dark' && theme != 'light') {
  localStorage.setItem("theme", "dark");
  theme = localStorage.getItem("theme");
} else {
  theme = localStorage.getItem("theme");
}
if(theme == 'dark') {
  setThemeDark();
} else if (theme == 'light'){
  setThemeLight();
}
function changeTheme() {
  if (theme == 'dark') {
      setThemeLight();
  } else if (theme == 'light') {
      setThemeDark();
  }
}
function setThemeDark() {
    root.style.setProperty('--font-color', 'white');
    root.style.setProperty('--panel-color', 'rgba(0, 0, 0, 0.5');
    root.style.setProperty('--background-color', '#111');
    themeButton.innerHTML = 'light_mode';
    localStorage.setItem("theme", "dark"); // sets the localstorage element "theme" to dark
    theme = 'dark'; // sets theme to dark
}
function setThemeLight() {
    root.style.setProperty('--font-color', 'black');
    root.style.setProperty('--panel-color', 'rgba(255, 255, 255, 0.2');
    root.style.setProperty('--background-color', 'white');
    themeButton.innerHTML = 'dark_mode';
    localStorage.setItem("theme", "light") // sets the localstorage element "theme" to light
    theme = 'light'; // sets theme to light
}
