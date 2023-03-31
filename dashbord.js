import Navbar from "./component/navbar"
let list=document.querySelector(".Assingment_list")
let task_info=JSON.parse(localStorage.getItem("task_info")) || []
let warning=document.querySelector(".warning")

let nav=document.querySelector(".nav")
nav.innerHTML=Navbar()
if(task_info.length==0){
    warning.innerText="No task"
}
if(task_info.length != 0){

    displayTask()
}

function displayTask(){
    task_info.map(el=>{
        let box=document.createElement("tr")
        let title=document.createElement("td")
        let sd=document.createElement("td")
        let ed=document.createElement("td")
        let view=document.createElement("td")

        title.innerText=el.title
        sd.innerText=el.sd
        ed.innerText=el.ed
        view.innerText="View"
        view.setAttribute("class","view_assingment")
        view.addEventListener("click",()=>{
            hendleAssingment(el)
        })

        box.append(title,sd,ed,view)
        list.append(box)
       }  
    ) 
}

function hendleAssingment(id){
// console.log(id)
localStorage.setItem("assingment_acces",id.id)
window.location="assingment.html"
}