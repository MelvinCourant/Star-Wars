window.addEventListener("load", function () {
    const previousButton = document.querySelector("#previous");
    const nextButton = document.querySelector("#next");
    const slides = document.querySelectorAll("[data-slide]");
    let currentSlide = 1;

    previousButton.addEventListener("click", function () {
        if (currentSlide !== 1) {
            currentSlide--;

            if (nextButton.className === "max") {
                nextButton.className = nextButton.className.replace("max", "");
            }

            const slidesActived = document.querySelectorAll(".active");

            slidesActived.forEach(function (slideActived) {
                slideActived.className = slideActived.className.replace("active", "");
            })
            slides.forEach(function (slide) {
                if (slide.getAttribute("data-slide") === currentSlide.toString()) {
                    slide.className = "active";
                }
            });

            if (currentSlide === 1) {
                previousButton.className = "max";
            }
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentSlide !== 3) {
            currentSlide++;

            if (previousButton.className === "max") {
                previousButton.className = previousButton.className.replace("max", "");
            }

            const slidesActived = document.querySelectorAll(".active");

            slidesActived.forEach(function (slideActived) {
                slideActived.className = slideActived.className.replace("active", "hide");
            })
            slides.forEach(function (slide) {
                if (slide.getAttribute("data-slide") === currentSlide.toString()) {
                    slide.className = "active";
                }
            });

            if (currentSlide === 3) {
                nextButton.className = "max";
            }
        }
    });
});