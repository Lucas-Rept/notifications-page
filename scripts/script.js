let countShow = document.getElementById("countNotifications");
let count = 3;
countShow.innerHTML = count;
let readButton = document.getElementById("readAllButton");
readButton.addEventListener("click", readAll);

function readAll(){
    let news = document.querySelectorAll(".new");
    let circles = document.querySelectorAll(".circle");
    for(var newer of news){
        newer.classList.remove("new");
    }
    for(var circle of circles){
        circle.classList.remove("circle");
    }
    count = 0;
    if(count == 0){
        countShow.style.backgroundColor = "white";
    }
}


let newNotifications = document.getElementsByClassName("new");
for(var newNotification of newNotifications){
    newNotification.addEventListener("click", toggle);
}

function toggle(event){
    let target = event.currentTarget;
    let circle = target.lastElementChild.lastElementChild.previousElementSibling;
    if(target.classList.contains("new") == true){
        target.classList.remove("new");
        circle.style.backgroundColor = "white";
        count--;
    }

    countShow.innerHTML = count;
    if(count == 0){
        countShow.style.backgroundColor = "white";
    }
}


