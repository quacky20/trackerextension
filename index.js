let myLeads = []

const inputEl = document.getElementById("inputEl")
const inputBtn = document.getElementById("inputBtn")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})