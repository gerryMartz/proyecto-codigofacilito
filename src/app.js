const dialogElement = document.getElementById("dialogElement");
const launchButton = document.getElementById("launchDialog");
const inputName = document.getElementById("inputName");
const inputMensaje = document.getElementById("inputMensaje");
const dialogTitle = document.querySelector(".dialog__title");
const dialogParagraph = document.querySelector(".dialog__paragraph");

launchButton.addEventListener("click", () => {
    const nombre = inputName.value;
    const mensaje = inputMensaje.value;

    dialogTitle.innerText = `¡Gracias por tu mensaje, ${nombre}!`;
    dialogParagraph.innerText = `Tu mensaje fue enviado exitosamente.`;
    dialogParagraph.innerHTML += `<br><b>"${mensaje}"</b>`;

    dialogElement.showModal();
});

dialogElement.addEventListener("close", () => {
    inputName.value = "";
    inputMensaje.value = "";
});

// Dialog Platillos

const launchPlatillosButtons = document.querySelectorAll(".platillos__btn");
const dialogPlatillo = document.querySelector("#dialogPlatillos");
const closeBtnPlatillo = document.querySelector("#closeOrderBtn");
const orderName = document.querySelector("#orderName");
const orderDesc = document.querySelector("#orderDescription");
const closeBtnModal = document.querySelector("#closeOrderBtn");

launchPlatillosButtons.forEach(platilloButton => {
    platilloButton.addEventListener("click", openModal);
});

function openModal(event) {
    dialogPlatillo.showModal();
    const name = this.parentElement.children.item(0).children.item(0).innerText;
    const desc = this.parentElement.children.item(0).children.item(1).innerText;

    orderName.innerText = name;
    orderDesc.innerText = desc;

    setTimeout(closeModal, 3000);

    function closeModal() {
        event.target.parentElement.parentElement.children.item(0).children.item(1).innerText = "Casi está listo...";
    }
}