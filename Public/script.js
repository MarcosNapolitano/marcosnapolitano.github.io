import {esp, en} from "./db.js"

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el))

let translated = false

function translate(){

    const lang = translated ? en : esp
    const current_lan = translated ? "Español" : "English"
    const elements = document.querySelectorAll(".appear")
    

    //make the elements disappear
    for(let i=0;i<elements.length;i++){
        elements[i].className="disappear"
    }

    setTimeout(()=>{

        //actual translation
        for(let i in lang){
            if(i=="portfolio4") continue
            document.getElementById(i).innerHTML = lang[i]

        }

        document.getElementById("target").innerHTML = current_lan


        //show them again
        for(let i=0;i<elements.length;i++){
            elements[i].className="appear"
        }

    },1000)

    

    return translated = !translated
     
}

document.getElementById("target").onclick=function(){
    translate();
}




