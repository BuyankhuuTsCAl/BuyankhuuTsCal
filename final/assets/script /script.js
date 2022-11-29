let beeshive = document.getElementById("label")
let beehive2 = document.getElementById("label2")

beeshive.onmouseover=function(){
    let hives = document.getElementsByClassName("hex");
    for(let i=0;i<hives.length;i++){
        hives[i].style.transform = "scale(0)";
    }
    let theOne = document.getElementById("Study1");
    theOne.style.display = "block";
    theOne.style.transform = "scale(1.5) rotate(90deg)";
    beeshive.style.transform ="rotate(-90deg)";
    

}
beeshive.onmouseout = function(){
    let hives = document.getElementsByClassName("hex");
    for(let i=0;i<hives.length;i++){
        hives[i].style.transform= "scale(1)";
    }
    let theOne = document.getElementById("Study1");
    theOne.style.transform = "scale(1)";
    beeshive.style.transform ="rotate(0deg)";
}

beehive2.onmouseover=function(){
    let hives = document.getElementsByClassName("hex");
    for(let i=0;i<hives.length;i++){
        hives[i].style.transform = "scale(0)";
    }
    let theOne = document.getElementById("game1");
    theOne.style.display = "block";
    theOne.style.transform = "scale(1.5) rotate(90deg)";
    beehive2.style.transform ="rotate(-90deg)";
    
    
}
beehive2.onmouseout = function(){
    let hives = document.getElementsByClassName("hex");
    for(let i=0;i<hives.length;i++){
        hives[i].style.transform= "scale(1)";
    }
    let theOne = document.getElementById("game1");
    theOne.style.transform = "scale(1)";
    beehive2.style.transform ="rotate(0deg)";
}

