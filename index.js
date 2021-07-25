// done
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("save-btn")
const tab = [
    {url: "www.googl.com"}
]
let myLeads = []

if(leadsFromLocalStorage) 
    myLeads = leadsFromLocalStorage
updateMyLeadsInHTML()
console.log(leadsFromLocalStorage)

saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    ulEl.innerHTML += "<li> <a href=" + myLeads[myLeads.length -1] + " target=_blank>" + myLeads[myLeads.length -1] + "</a>"
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    updateMyLeadsInHTML()
})

saveTabBtn.addEventListener("click", function () {
    currentTab = ""
    console.log("i'm in the save tab btn action")
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0]);
        currentTab = tabs[0].url
        myLeads.push(currentTab)
        ulEl.innerHTML += "<li> <a href=" + myLeads[myLeads.length -1] + " target=_blank>" + myLeads[myLeads.length -1] + "</a>"
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    });
})

function updateMyLeadsInHTML() {
    ulEl.innerHTML = ""
    for (let i=0; i<myLeads.length; i++){
        ulEl.innerHTML += "<li> <a href=" + myLeads[i] + " target=_blank>" + myLeads[i] + "</a>"
    }
}


