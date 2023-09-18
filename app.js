import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue }from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-e135e-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const commentsInDB = ref(database, "comments")

const buttonEl = document.getElementById("publish-btn")
const textAreaEl = document.getElementById("endorsement-field")
const ulEl = document.getElementById("endorsements-ul")

onValue(commentsInDB, function(snapshot) {
    let comments = Object.entries(snapshot.val())

    clearList()

    for (let i = 0; i < comments.length; i++) {
        let currentComment = comments[i]
        let commentID = currentComment[0]
        let commentValue = currentComment[1]

        appendCommentToList(commentValue)
    }
})

buttonEl.addEventListener("click", function() {
    let textAreaValue = textAreaEl.value

    appendCommentToList(textAreaValue)
    clearTextArea()

    push(commentsInDB, textAreaValue)
})

function clearTextArea() {
    textAreaEl.value = ""
}

function clearList() {
    ulEl.innerHTML = ""
}

function appendCommentToList(value) {
    let newEl = document.createElement("li")
    newEl.textContent = value
    ulEl.append(newEl)
}