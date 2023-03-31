import Artical from "./component/artical_assingment.js"
import Navbar from "./component/navbar.js"
import Video from "./component/video_assingment.js"
let sec1=document.querySelector(".section1")
let sec2=document.querySelector(".section2")
let id=JSON.parse(localStorage.getItem("assingment_acces")) || null
let task_info=JSON.parse(localStorage.getItem("task_info")) || []
let title=document.querySelector(".title")
let dev=document.querySelector(".dec")
let main=document.querySelector(".main1")


let nav=document.querySelector(".nav")
nav.innerHTML=Navbar()

console.log(id)
if(id){
    getData()
}

function getData(){
let data=task_info.filter((el)=>(el.id==id))
console.log(data)
showTask(data)
}
function showTask(data){
    sec2.innerHTML=[]
    if(data[0].mode=="artical"){
        main.innerHTML=Artical()
    }
    else if(data[0].mode=="video"){
        main.innerHTML=Video()

    }
    data[0].task.map(el=>{
        let item=document.createElement("li")
        item.innerText=el
        sec2.append(item)
    }
    
    )
    title.innerText=`Title: ${data[0].title}`
    dev.innerText=`Decription: ${data[0].dec}`
}
if(main){

    document.querySelector(".com_task").addEventListener("click",()=>{
        let data=task_info.filter((el)=>(el.id!=id))
        localStorage.setItem("task_info",JSON.stringify(data))
        localStorage.removeItem("assingment_acces")
        window.location="dashbord.html"
    })
}
