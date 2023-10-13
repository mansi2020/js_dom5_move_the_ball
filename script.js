let getball = document.getElementById("ball");


//varuable fot top and left
let t = 0, l = 0;
let elementWidth = getball.offsetWidth;
let deg = 0;

document.addEventListener("keydown",(e)=>{
    // console.log(e);
    let browserHeight = document.documentElement.clientHeight;
    let browserWidth = document.documentElement.clientWidth;
    console.log(browserHeight,browserWidth);

    let key = e.keyCode;
    console.log(key);

    //MOVE WITH d and > ---- rightside
    deg += 120;
    // if(deg == 360){
    //     deg = 0;
    // }
    if(key == 68 || key == 39){
        if(elementWidth+l+20 <= browserWidth){
            ball.style.left = l+20+'px';
            l += 20;
            
            ball.style.transform = `rotate(${deg}deg)`;
            ball.style.transition = "0.5s";
        }
    }

    //MOVE WITH  s and down --downside
    if(key == 83 || key == 40){
        if(elementWidth+t+20 <= browserHeight){
            ball.style.top = t+20+'px';
            t += 20;
            ball.style.transform = `rotate(${deg}deg)`;
            ball.style.transition = "0.5s";
        }
        
    }

    //MOVE WITH a and < --leftside
    if(key == 65 || key ==37){
        if( l-20 >= 0){
            ball.style.left = l-20+'px';
            l -= 20;
            ball.style.transform = `rotate(${deg}deg)`;
            ball.style.transition = "0.5s";
        }
    }

    //MOVE WITH w and ^ -- upward
    if(key == 87 || key ==38){
        if( t-20 >= 0){
            ball.style.top = t-20+'px';
            t -= 20;
            ball.style.transform = `rotate(${deg}deg)`;
            ball.style.transition = "0.5s";
        }
    }
});
