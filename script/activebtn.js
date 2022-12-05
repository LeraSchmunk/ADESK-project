const colorBtns = document.querySelectorAll(".faq__block button");

function nocolor() {
    colorBtns.forEach(item => item.classList.remove("active"));
}

function showcolor(index) {
    colorBtns[index].classList.add("active");
}

colorBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    nocolor();
    showcolor(index);
}));



hideTabs();
showTab(1);