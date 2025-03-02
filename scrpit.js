document.addEventListener("DOMContentLoaded", function() {
    const product = {
        name: "ست هفت سین کد1",
        price: "۱۵۰,۰۰۰ تومان",
        description: "ساخته‌شده از سنگ مصنوعی مقاوم در برابر آب و خط و خش.",
        image: "images/1.jpg",
    };

    document.querySelector(".product-details h2").innerText = product.name;
    document.querySelector(".product-details .price span").innerText = product.price;
    document.querySelector(".product-details .description").innerText = product.description;
    document.querySelector(".product-image img").src = product.image;
});