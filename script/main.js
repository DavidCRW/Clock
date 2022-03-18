/* Data module */
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let ampm = document.querySelector(".ampm");



/* Functions module */
function clock(){
    hour.innerHTML = new Date().getHours();
    min.innerHTML = new Date().getMinutes();
    sec.innerHTML = new Date().getSeconds();

    if(sec.innerHTML < 10){
        sec.innerHTML = `0${new Date().getSeconds()}`
    }
    if(min.innerHTML < 10){
        min.innerHTML = `0${new Date().getMinutes()}`
    }
    if(hour.innerHTML < 10){
        hour.innerHTML = `0${new Date().getHours()}`
    }
    if(hour.innerHTML < 12){
        ampm.innerHTML = "AM"
    }else{
        ampm.innerHTML = "PM"  
    }

    setTimeout(clock, 10);
}




window.onload(clock());