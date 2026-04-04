const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
    const value = event.currentTarget.value.trim();
    if(value === "") {
       nameOutputEl.textContent = "Anonymous";
    } else {
       nameOutputEl.textContent = value;
    }
});