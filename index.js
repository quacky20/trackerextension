let myLeads = []

const inputEl = document.getElementById("inputEl")
const inputBtn = document.getElementById("inputBtn")
const ulEL = document.getElementById("ulEl")
const deleteBtn = document.getElementById("deleteBtn")
const saveBtn = document.getElementById("saveBtn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItem = ""

    for (let i = 0; i<leads.length; i++){
        // listItem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItem += `
        <li>
            <a target = '_blank' href = '${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    }

    ulEL.innerHTML = listItem
}

saveBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        inputEl.value = ""
    })
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    if (inputEl.value != ""){
        myLeads.push(inputEl.value)
        // ulEL.innerHTML += "<li>" + myLeads[myLeads.length-1] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[myLeads.length-1]
        // ulEL.append(li)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        inputEl.value = ""
    }
    
})