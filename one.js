let area = document.getElementById('area');
let head = document.getElementById("head");
let save = document.getElementById('save');
let remove = document.getElementById('remove');

function display() {
    let data = localStorage.getItem("data");
    let val = JSON.parse(data);
    head.value = val.title;
    area.value = val.message;
}
save.onclick = function() {

    let titlevalue = head.value;
    let areavalue = area.value;
    if (titlevalue === "") {
        alert("enter title to save.");
        return;
    }
    if (areavalue === "") {
        alert("enter meassage to save.");
        return;
    }
    let a = {
        title: titlevalue,
        message: areavalue
    };

    localStorage.setItem("data", JSON.stringify(a));
    display();
}
remove.onclick = function() {
    localStorage.removeItem("data");
    area.value = "";
    head.value = "";
}