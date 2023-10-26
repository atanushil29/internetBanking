//For Dashboard setting
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
function Def() {
    document.getElementById("defaultOpenSF").click();
    document.getElementById("AccountOpen").click();

};
Def();
// For Account setting 
function openPage(evt, pageName) {
    var i, tabcontent, tablinks;
    // Remove the class from all buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    tabcontent = document.getElementsByClassName("OpenPage");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Add a class to the clicked button
    evt.target.classList.add("active");
    document.getElementById(pageName).style.display = "block";
}
