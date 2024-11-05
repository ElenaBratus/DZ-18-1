let productsCountEl = document.querySelector(".product-count");
let addToCartBt = document.querySelectorAll(".cart");
console.log(productsCountEl);
console.log(addToCartBt); 
/*for (let i = 0; i < addToCartBt.length; i++) {
    addToCartBt[i].addEventListener("click", function () {
        console.log("clicked");
    })
} */
addToCartBt.forEach((item) =>
item.addEventListener("click", function () {
    /*let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount + 1;*/
    productsCountEl.textContent = +productsCountEl.textContent + 1;
}));
let likeBtn = document.querySelectorAll(".like");
console.log(likeBtn);
likeBtn.forEach((item) =>
item.addEventListener("click", function () {
item.style.backgroundColor = "red"
}))
;

/*item.addEventListener("click", function() {
    likeBtn.addEventListener = likeBtn.addEventListener + 1;
});*/
let forma = document.querySelector(".forma");
let details = document.querySelectorAll(".details");
details.forEach((item) =>
item.addEventListener("click", function () {
    forma.style.display = "block"
}));


