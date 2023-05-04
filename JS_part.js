// JS part
// Lateral menu 

var menu_visible = false;
let menu = document.getElementById("nav");
function ShowHideMenu(){
    if(menu_visible==false){ 
    menu.style.display = "block";
    menu_visible = true;
}
 else {
    menu.style.display = "none";
    menu_visible = false;
 }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++) {
    links[x].onclick = function() {
        menu.style.display = "none";
        menu_visible = false;
    }
}

function createBar(id_bar){
    for(i=0;i<=19;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_bar.appendChild(div);
    }
}

let html = document.getElementById("html");
createBar(html);
let CSS3 = document.getElementById("CSS3");
createBar(CSS3);
let Bootstrap = document.getElementById("Bootstrap");
createBar(Bootstrap);
let SQL = document.getElementById("SQL");
createBar(SQL);
let Slovak = document.getElementById("Slovak");
createBar(Slovak);
let English = document.getElementById("English");
createBar(English);


let counters = [-1, -1, -1, -1,-1, -1];

let enter = false;

function efectSkills(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills>=300 && enter==false) {
        enter = true;
        const intervalHtml = setInterval(function(){
            paintslash(html, 17, 0, intervalHtml);
        }, 100);
        const intervalCSS3 = setInterval(function(){
            paintslash(CSS3, 16, 1, intervalCSS3);
        }, 100);
        const intervalBootstrap = setInterval(function(){
            paintslash(Bootstrap, 15, 2, intervalBootstrap);
        }, 100);
        const intervalSQL = setInterval(function(){
            paintslash(SQL, 14, 3, intervalSQL);
        }, 100);
        const intervalSlovak = setInterval(function(){
            paintslash(Slovak, 20, 4, intervalSlovak);
        }, 100);
        const intervalEnglish = setInterval(function(){
            paintslash(English, 18, 5, intervalEnglish);
        }, 100);
    }
    
}

function paintslash(id_slash, quantity, index, interval) {
    counters[index]++;
    x = counters[index];
    if (x < quantity) {
        let elements = id_slash.getElementsByClassName("e");
        elements[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval)
    }
}

window.onscroll = function() {
    efectSkills();
}

