console.log("JAVASCRIPTCONNECTED")
const hamContainer = document.querySelector("#menu-btn");
const hamGood = document.querySelector("#good");
const hamBad = document.querySelector("#bad");
const navMobile = document.querySelector("#links_mobile");
const targetImg = document.getElementById("target");
let checker = false;

hamContainer.addEventListener("click", function () {
    if (checker == false) {
        hamGood.style.display = "none";
        hamBad.style.display = "block";
        navMobile.style.display = "flex";

        checker = true;
    }
    else if (checker == true) {
        hamGood.style.display = "block";
        hamBad.style.display = "none";
        navMobile.style.display = "none";
        checker = false;
    }
})
const img = new Image();
img.onload = () => {
    targetImg.classList.remove("blur");
    targetImg.classList.add("img");
    targetImg.src = "./Assets/pieces-blue-stationery.jpg";
};

img.src = "./Assets/pieces-blue-stationery.jpg";