for(i=0;i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        Sound(this.innerHTML)
        AnimKey(this.innerHTML)
    });
}
    document.addEventListener("keypress", function(event){
        Sound(event.key)
        AnimKey(event.key)
    });
    function Sound(key){
        switch(key){
            case "w":
            var hoo1 = new Audio('sounds/tom-1.mp3')
                hoo1.play();
                break;

            case "a":
                var hoo2 = new Audio('sounds/tom-3.mp3')
                hoo2.play();
                break;
            case "s":
                var hoo3 = new Audio('sounds/tom-3.mp3')
                hoo3.play();
                break;
                case "d":
                var hoo4 = new Audio('sounds/crash.mp3')
                hoo4.play();
                break;
                case "j":
                var hoo5 = new Audio('sounds/tom-1.mp3')
                hoo5.play();
                break;
                case "k":
                var hoo6 = new Audio('sounds/tom-2.mp3')
                hoo6.play();
                break;
                case "l":
                var hoo7 = new Audio('sounds/tom-4.mp3')
                hoo7.play();
                break;

            default:
        }
    }

    function AnimKey(curentKey){
        var AnimButton = document.querySelector("." +curentKey)
        AnimButton.classList.add("pressed");
        setTimeout(function(){
            AnimButton.classList.remove("pressed");
        }, 100);
    }



