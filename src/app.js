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
    dialogParagraph.innerHTML += `<br>
                                <b>"${mensaje}"</b>`;

    dialogElement.showModal();
});

dialogElement.addEventListener("close", () => {
    inputName.value = "";
    inputMensaje.value = "";
});