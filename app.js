const buttonEl = document.getElementById("publish-btn")
const textAreaEl = document.getElementById("endorsement-field")
const ulEl = document.getElementById("endorsements-ul")

buttonEl.addEventListener("click", function() {
    let textAreaValue = textAreaEl.value
    appendCommentToList(textAreaValue)
    clearTextArea()
})

function clearTextArea() {
    textAreaEl.value = ""
}

function appendCommentToList(value) {
    let newEl = document.createElement("li")
    newEl.textContent = value
    ulEl.append(newEl)
}