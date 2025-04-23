const inventoryContainer = document.getElementById("inventory-section");

let revertTimeout = null;

inventoryContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("thumb-img")) {
        clearTimeout(revertTimeout);
        
        const thumb = e.target;
        const cartBlock = thumb.closest(".golf-cart-block");
        const mainImg = cartBlock.querySelector(".display-img");
        
        if (mainImg) {
            mainImg.dataset.original = mainImg.dataset.original || mainImg.src;
            mainImg.src = thumb.src;
        }
    }
});

inventoryContainer.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("thumb-img")) {
        const thumb = e.target;
        const cartBlock = thumb.closest(".golf-cart-block");
        const mainImg = cartBlock.querySelector(".display-img");
        
        if (mainImg && mainImg.dataset.original) {
            revertTimeout = setTimeout(() => {
                mainImg.src = mainImg.dataset.original;
            }, 200);
        }
    }
});