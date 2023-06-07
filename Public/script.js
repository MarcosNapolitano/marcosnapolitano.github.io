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

const userLang = navigator.language || navigator.userLanguage; 
let translated = false
let override = false


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

//page loads in spanish if the browser's language is in esp, otherwise loads in eng
if(userLang[0]+userLang[1]==="es" && !override){

    for(let i in esp){
        if(i=="portfolio4") continue
        document.getElementById(i).innerHTML = esp[i]

    }

    document.getElementById("target").innerHTML = "English"
    override = true
}

document.getElementById("target").onclick=function(){
    translate();
}





