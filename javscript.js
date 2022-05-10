const alltabs = document.querySelectorAll(".btn");
const parentOfButtons = document.querySelector(".alltabs")
const parenOfArticlas = document.querySelector(".parent-of-article")

alltabs.forEach((item,index) => {
    item.addEventListener("click",(eo)=> {



        parenOfArticlas.getElementsByClassName("active-article")[0].classList.remove("active-article")

        parenOfArticlas.getElementsByClassName("fun-facts")[index].classList.add("active-article")

    })
});