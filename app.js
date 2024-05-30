console.log("JAVASCRIPTCONNECTED")
const hamContainer = document.querySelector("#menu-btn");
const hamGood = document.querySelector("#good");
const hamBad = document.querySelector("#bad");
const navMobile = document.querySelector("#links_mobile");
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
