const menuIcon = document.querySelector(".menu_icon");
const menuBody = document.querySelector(".header_nav");
const calculateButton = document.querySelectorAll(".calculate-button");
const calculateResult = document.querySelector(".calculateResult");
let imgCalculate = document.querySelector(".imgCalculate");

function changeImgCard(newSrc, el) {
    imgCalculate.setAttribute('src', newSrc);
}

calculateButton.forEach(el => {
    el.addEventListener("click", () => {
        const newSrc = el.querySelector('img').getAttribute('src')
        changeImgCard(newSrc, el)
    })
});
calculateResult.addEventListener("click", () => {
    let weightCount = document.querySelector(".weightCount").value;
    let numberCount = document.querySelector(".numberCount").value;
    if ((!weightCount || /^\d*$/.test(weightCount)) && (!numberCount || /^\d*$/.test(numberCount))) {
        let result = Math.floor((parseInt(weightCount) * parseInt(numberCount)) / 30 + parseInt(weightCount));
        document.querySelector(".resultCount").value = result;
    } else {
        document.querySelector(".resultCount").value = "enter number please!";
    }
});


menuIcon.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuIcon.classList.toggle("_active")
    menuBody.classList.toggle("_active")
});

const menuLinks = document.querySelectorAll(".header_link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuLinkClick);
    })
}

function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset + document.querySelector(".header_list").offsetHeight;
        if (menuIcon.classList.contains("_active")) {
            document.body.classList.remove("_lock");
            menuIcon.classList.remove("_active")
            menuBody.classList.remove("_active")
        }
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}

//Swiper script
new Swiper('.nutrition-img', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    effect: 'fade'
});
//VanillaEffect Script
VanillaTilt.init(document.querySelectorAll(".calculate-button"), {
    max: 40,
    speed: 600,
    glade: 1
});
VanillaTilt.init(document.querySelectorAll(".card__container"), {
    max: 25,
    speed: 400,
    glade: 1
});