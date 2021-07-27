const artBlocks = document.querySelectorAll(".image-overlay");
const screen = document.body;

artBlocks.forEach(block => {
    block.addEventListener("click", (e) => {
        let imageSrc;

        if (e.target.classList.contains("preview-ico")) {
            if (e.target.id === "span") {
                imageSrc = e.target.parentElement.parentElement.children[0].src;
            } else {
                imageSrc = e.target.parentElement.parentElement.previousSibling.previousSibling.src
            }


        } else {
            imageSrc = e.target.parentElement.children[0].src
        }

        const div = `<div class="image-preview-modal">
                <div class="modal-overlay">
                    <img src="${imageSrc}">
                </div>
                <i id="close-modal" class="fas fa-times"></i>
            </div>`;
        screen.insertAdjacentHTML("afterend", div);

        const preview_modal = document.querySelector(".image-preview-modal");
        preview_modal.addEventListener("click", (e) => {

            if (e.target.id === "close-modal") {
                e.target.parentElement.remove()
            } else if (e.target.nodeName === "IMG") {
                return
            } else {
                e.target.remove();
            }
        })
    })
});

console.log("sd")