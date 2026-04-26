
window.addEventListener("scroll", function () {
    const timeline = document.querySelector(".timeline");
    const progress = document.querySelector(".progress");

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progressHeight = ((windowHeight - rect.top) / rect.height) * 100;

    if (progressHeight < 0) progressHeight = 0;
    if (progressHeight > 100) progressHeight = 100;

    progress.style.height = progressHeight + "%";
});

   //faq section 

const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.addEventListener("toggle", () => {
            if (item.open) {
                faqItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });


    
