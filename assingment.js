import Navbar from "./component/navbar.js"
let sec1=document.querySelector(".section1")
let sec2=document.querySelector(".section2")
let id=JSON.parse(localStorage.getItem("assingment_acces")) || null
let task_info=JSON.parse(localStorage.getItem("task_info")) || []


let nav=document.querySelector(".nav")
nav.innerHTML=Navbar()

console.log(id)
if(id){
    getData()
}

function getData(){
let data=task_info.filter((el)=>(el.id==id))
console.log(data)
showTask(data[0].task)
}
function showTask(task){
    sec2.innerHTML=[]
    task.map(el=>{
        let item=document.createElement("li")
        item.innerText=el
        sec2.append(item)
    }
    
    )
}