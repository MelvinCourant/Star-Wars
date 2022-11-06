window.addEventListener("load", function () {
    const previousButton = document.querySelector("#previous");
    const nextButton = document.querySelector("#next");
    const slides = document.querySelectorAll("[data-slide]");
    const eight = document.querySelector(".first-number[data-slide = '1']");
    let currentSlide = 0;

    previousButton.addEventListener("click", function () {
        if (currentSlide !== 0) {
            currentSlide--;

            if (nextButton.className === "max") {
                nextButton.className = nextButton.className.replace("max", "");
            }

            const slidesActived = document.querySelectorAll(".active");

            slidesActived.forEach(function (slideActived) {
                slideActived.className = slideActived.className.replace(" active", "");
                slideActived.ariaHidden = "true";
            })

            slides.forEach(function (slide) {
                if (slide.getAttribute("data-slide") === currentSlide.toString()) {
                    slide.className = slide.className.replace("hide", "active");
                    slide.ariaHidden = "false";
                }
            });

            if (currentSlide === 0) {
                previousButton.className = "max";
                eight.className = eight.className.replace(" active", "");
                eight.ariaHidden = "true";
            }

            if (currentSlide === 1) {
                eight.className += " active";
                eight.ariaHidden = "false";
            }
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentSlide !== 2) {
            currentSlide++;

            if (previousButton.className === "max") {
                previousButton.className = previousButton.className.replace("max", "");
            }

            const slidesActived = document.querySelectorAll(".active");

            slidesActived.forEach(function (slideActived) {
                slideActived.className = slideActived.className.replace("active", "hide");
                slideActived.ariaHidden = "true";
            })

            slides.forEach(function (slide) {
                if (slide.getAttribute("data-slide") === currentSlide.toString()) {
                    slide.className += " active";
                    slide.ariaHidden = "false";
                }
            });

            if (currentSlide === 2) {
                nextButton.className = "max";
                eight.className = eight.className.replace("hide", "active");
                eight.ariaHidden = "false";
            }
        }
    });
});