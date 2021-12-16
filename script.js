


function myFunction(){
let vWeight = document.getElementById('theResponse5').value;
let vHeight = document.getElementById('theResponse4').value;
var numb = "theResponse3";
var vLast = "theResponse2";
var vFirst = "theResponse1";
let bmi = vWeight / vHeight ** 2 * 703
    if(bmi > 25){
        document.getElementById("theMessage").innerHTML = "You are Overweight " + bmi;
    }else{
        document.getElementById("theMessage").innerHTML = "You are healthy " + bmi;
    }
}

// New Line
    
snowStorm.autoStart = true;
snowStorm.animationInterval = 33;

