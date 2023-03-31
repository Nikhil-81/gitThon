import Navbar from "./component/navbar.js"
let list=document.querySelector(".Assingment_list")
let task_info=JSON.parse(localStorage.getItem("task_info")) || []
let warning=document.querySelector(".warning")

// adding the navbar

let nav=document.querySelector(".nav")
nav.innerHTML=Navbar()
//


if(task_info.length==0){
    warning.innerText="No task"
}
if(task_info.length != 0){

    displayTask()
}

// Maping the task - title in below function 

function displayTask(){
    task_info.map(el=>{

        // creating html tags 


        let box=document.createElement("tr")
        let title=document.createElement("td")
        let sd=document.createElement("td")
        let ed=document.createElement("td")
        let view=document.createElement("td")

// assing them the value

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