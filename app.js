const card = document.querySelector(".card-2");

const openBtn = document.querySelector(".card-2 .out .open");
const closeBtn = document.querySelector(".card-2 .in-right .close");

openBtn.addEventListener("click", (e) => {
    card.classList.add("open");
});

closeBtn.addEventListener("click", (e) => {
    card.classList.remove("open");
});

//
//

// split the test letters //
const text_1 = document.querySelector(".title-card .text-1");
let content = text_1.textContent;
text_1.innerHTML = "";

for (let i = 0; i < content.length; i++) {
    text_1.innerHTML += `<span style="animation-delay: ${i / 10}s;">${
        content[i]
    }</span>`;
}
//  //
