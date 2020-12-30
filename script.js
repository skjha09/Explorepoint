const container = document.querySelector(".container")
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
    container.classList.add("change");
});
document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    container.classList.remove("change");
});




const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
let i = 0;
Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
    item.style.cssText = `Background-color :${colors[i++]}`
});

Array.from(document.querySelectorAll
    (".navigation-button")).forEach(item => {
        item.onclick = () => {
            item.parentElement.parentElement.classList.
                toggle("change");
        };
    }
    );

var my;
function myFunction() {
    my = setTimeout(showpage, 3000);


};
function showpage() {
    document.getElementById('preloader').style.display = "none";
}

// let i = 0;
// function fetch_info(i) {
//     let profile = ["./images/madhav.jpg", "./images/rai.jpg", "./images/ashwani.jpg", "./images/katyan1.jpg"];
//     let name = [
//         "Madhav Guar",
//         "Shivam Rai",
//         "Ashwani Sengar",
//         "Shivam Katyan",];
//     let status = [
//         "Design devoloper",
//         "Contact-form creator",
//         "Tourism promoter",
//         "Supervisor",];


//     document.getElementById("profile").src = profile[i];
//     document.getElementById("name").innerHTML = name[i];
//     document.getElementById("status").innerHTML = status[i];
//     document.getElementById("about").innerHTML = name[i] + " is a long established fact that a reader will be distracted by the readable content of a page" +
//         "when  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution" + status[i] +
//         "of letters, as opposed to using 'Content here, content here', making it look like readable English";

// }

