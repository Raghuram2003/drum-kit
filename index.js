var buttons=document.querySelectorAll(".drum");
for(var i=0;i<7;i++){
    buttons[i].addEventListener("click",function(){
        var drumButton=this.innerHTML;
        drumSound(drumButton);
        drumAnimate(drumButton);
    })}
document.addEventListener("keydown",function(event){
    var keyPressed=event.key;
    drumSound(event.key);
    drumAnimate(event.key);
})
function drumSound(buttonPressed){
    switch(buttonPressed){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;    
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;       
    }
}
function drumAnimate(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
}