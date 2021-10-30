console.log("start")

let ele = document.querySelectorAll(".fas")


    ele.forEach(function(e,i){
        e.addEventListener("click",function(){
            
            let a = document.querySelector(`.a${i+1}`)
            
            console.log(a.style.display)
            console.log(a.style.display.value)
            if(  a.style.display == "none" || a.style.display == ""){
                a.style.display = "block"
                e.className  = "fas fa-angle-up"
                console.log("= none or unddifend ")
            }else if (a.style.display == "block"){
                a.style.display = "none"
                console.log("bloc")
                e.className  = "fas fa-chevron-down"
            }
        })})
        