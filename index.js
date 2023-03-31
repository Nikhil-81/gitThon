import Navbar from "./component/navbar.js"
let form=document.querySelector("#form")
let bundel= []
let tasks=JSON.parse(localStorage.getItem("task_info")) || []

let task_section=document.querySelector(".task_section")
let nav=document.querySelector(".nav")
nav.innerHTML=Navbar()
if(bundel.length==0){
    task_section.innerText="No task is added"
}




document.querySelector(".creattask").addEventListener("click",hendlesubmit)
function hendlesubmit(){
    event.preventDefault()
let data={
    id:Date.now(),
    title:form.title.value,
    dec:form.dec.value,
    sd:form.sd.value,
    ed:form.ed.value,
    mode:form.mode.value,
    task:bundel   
}



if(bundel.length!=0){
tasks.push(data)
localStorage.setItem("task_info",JSON.stringify(tasks))
form.title.value=""
form.dec.value=""
form.sd.value=""
form.ed.value=""
form.mode.value=""
bundel=[]
task_section.innerHTML=[]
alert("Task has been added")
} 
}

document.querySelector(".add_task_button").addEventListener("click",hendleAdd_task)
function hendleAdd_task(){
    event.preventDefault()
    let t=form.task.value
    console.log(t.length)
    if(t.length != 0){
        bundel.push(t)
        hendle_add_task()
        form.task.value=""
    }
}

function hendle_add_task(){
    event.preventDefault()
    if(bundel.length !=0){
    console.log(bundel)
    task_section.innerHTML=[]
 bundel.map(el=>{
     let item=document.createElement("li")
     item.innerText=el
     task_section.append(item)
    }
     )
}
}