const images = document.querySelectorAll(".gallery__thumb");

setTimeout(function() {
    for (let image of images) {
        image.style.opacity = "1";
        // image.addEventListener("load", fadeIn);
        // image.style.opacity = "0";
    }
},1200);

// function fadeIn() {
    // this.style.transition = "opacity 2s";
//     this.style.opacity = "1";
// }


// function fadeIn() {
//     this.style.opacity = "1";
// }

// for (let image of images) {
//     // console.log(image);
//     if (image.complete) {
//         fadeIn();
//     }
//     else {
//         image.addEventListener("load", fadeIn);
//         image.addEventListener("error", function() {
//             console.log("error");
//         })
//     }
// }