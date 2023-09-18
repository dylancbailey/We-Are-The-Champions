const buttonEl = document.getElementById("publish-btn")
const textAreaEl = document.getElementById("endorsement-field")

buttonEl.addEventListener("click", function() {
    console.log(textAreaEl.value)
    clearInput()
})

function clearInput() {
    textAreaEl.value = ""
}