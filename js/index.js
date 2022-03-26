function getYear() {
    return 2022;
}
function updateYear() {
    let c = document.getElementById("copyright");
    c.innerHTML = c.innerHTML.replace("{Year}", getYear().toString());
}


updateYear();