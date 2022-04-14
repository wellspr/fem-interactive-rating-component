// State variable
let ratingValue = "";

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

const ratingBullets = document.querySelectorAll(".rating-bullet");

Object.values(ratingBullets).map((bullet, index) => {
    const selectRating = () => {
        bullet.classList.add("selected");
        ratingValue = bullet.textContent;
        document.getElementById("rating-value").innerHTML = ratingValue;
        const selectedIndex = index;
        
        Object.values(ratingBullets).map((bullet, index) => {
            if (index !== selectedIndex) {
                bullet.classList.remove("selected");
            }
        });
    };

    bullet.addEventListener("click", selectRating);

    return null;
});

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
    console.log("Click!", ratingValue);
    if (ratingValue === "") {
        alert("Please select a rating.")
        return null;
    };
    setActivePage("thank-you");
});