// Manage pages views
const pages = document.querySelectorAll(".page");

const setActivePage = (pageId) => {
    Object.values(pages).map(page => {
        if (page.id === pageId) {
            page.style.display = "flex";
        }
        else {
            page.style.display = "none";
        }
    });
};

setActivePage("rating");

// Manage ratings
let ratingValue = "";

const ratingBullets = document.querySelectorAll(".rating-bullet");

Object.values(ratingBullets).map((bullet, index) => {
    const selectRating = () => {
        bullet.classList.add("selected");
        bullet.ariaSelected = "true";
        ratingValue = bullet.textContent;
        document.getElementById("rating-value").innerHTML = ratingValue;
        document.querySelector(".rating-feedback").setAttribute("aria-label", `You selected ${ratingValue} out of 5`)
        const selectedIndex = index;
        
        Object.values(ratingBullets).map((bullet, index) => {
            if (index !== selectedIndex) {
                bullet.classList.remove("selected");
                bullet.ariaSelected = "false";
            }
        });
    };

    bullet.addEventListener("click", selectRating);
    bullet.addEventListener("keydown", e => {
        if (e.keyCode === 32) {
            selectRating();
        }
    });

    return null;
});

const form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();
});
form.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        submitBtn.click();
    }
})

// Submit
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    if (ratingValue === "") return null;
    setActivePage("thank-you");
});