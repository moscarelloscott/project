/* choose your own adventure by Scott Moscarello*/
var clearing = function(){
    
    var u = prompt("Early Monday morning your alarm clock rings, do you , wake up , go back to sleep?")
    u = u.toLowerCase()
    if (u.includes("wake")){
            wake()
        }
        else if (u.includes("sleep")){
            waterfall()
        }
    }

function wake() {
    alert("You're at the house")
}

var waterfall = function(){
    alert("You're at the waterfall")
}

clearing()