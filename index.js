let count = 1;

function switch4() {
        let backscreen = document.getElementById("background");
        let backswitch = document.getElementById("switch");
        let ball = document.getElementById("ball");
        let screendisplay = document.getElementById("display");
        let mainbutton = document.getElementsByClassName("numbers");
        let mainkey = document.getElementById("buttons");
        let redkey = document.getElementById("redbtn");
        let bluebutton = document.getElementsByClassName("blue");
        switch(count) {
            case 1:
                backscreen.className = "background2";
                backswitch.className = "switch2";
                ball.className = "ball2";
                screendisplay.className = "display2";
                console.log(mainbutton.length);
                for(let i = 0; i < mainbutton.length; i++) {
                    mainbutton[i].className = "num2 numbers";
                };
                mainkey.className = "buttons2";
                redkey.className = "redbtn2";
                for(let i = 0; i < bluebutton.length; i++) {
                    bluebutton[i].className = "bluebtn2 blue";
                };
                count++;
                break;
            case 2:
                backscreen.className = "background3";
                backswitch.className = "switch3";
                ball.className = "ball3";
                screendisplay.className = "display3";
                for(let i = 0; i < mainbutton.length; i++) {
                    mainbutton[i].className = "num3 numbers";
                };
                mainkey.className = "buttons3";
                redkey.className = "redbtn3";
                for(let i = 0; i < bluebutton.length; i++) {
                    bluebutton[i].className = "bluebtn3 blue";
                };
                count++;
                break;
            case 3:
                backscreen.className = "background";
                backswitch.className = "switch";
                ball.className = "ball";
                screendisplay.className = "display";
                for(let i = 0; i < mainbutton.length; i++) {
                    mainbutton[i].className = "num numbers";
                };
                mainkey.className = "buttons";
                redkey.className = "redbtn";
                for(let i = 0; i < bluebutton.length; i++) {
                    bluebutton[i].className = "bluebtn blue";
                };
                count = 1;
                break;
            default:
                break;
  }
};

let cal = 0;
let math = [];
let dot = false;
let dotCal = 0;
function calculate(key)
{
    if (key <= 9 && key >= 0 && dot != true)
    {
        cal = cal * 10;
        cal = cal + key;
    }
    else if (key == 'DEL')
    {
        if (dot == false)
        {
            cal = Math.floor(cal / 10);
        }
        else if (dot == true)
        {
            if (dotCal != 0)
            {
                dotCal = Math.floor(dotCal / 10);
            }
            if (dotCal == 0)
            {
                dot = false;
            }
        }
        
    }
    else if (key == 'Reset')
    {
        cal = 0;
        dotCal = 0;
        dot = false;
        math = [];
    }
    else if (key == '+')
    {
        if (dot == false)
        {
            math.push(cal);
        }
        else if (dot == true)
        {
            let sumup = cal.toString() + '.' + dotCal.toString();
            sumup = Number(sumup);
            math.push(sumup);
            dot = false;
        }
        math.push('+');
        dotCal = 0;
        cal = 0;
    }
    else if (key == '-')
    {
        if (dot == false)
        {
            math.push(cal);
        }
        else if (dot == true)
        {
            let sumup = cal.toString() + '.' + dotCal.toString();
            sumup = Number(sumup);
            math.push(sumup);
            dot = false;
        }
        math.push('-');
        dotCal = 0;
        cal = 0;
    }
    else if (key == 'x')
    {
        if (dot == false)
        {
            math.push(cal);
        }
        else if (dot == true)
        {
            let sumup = cal.toString() + '.' + dotCal.toString();
            sumup = Number(sumup);
            math.push(sumup);
            dot = false;
        }
        math.push('x');
        dotCal = 0;
        cal = 0;
    }
    else if (key == '/')
    {
        if (dot == false)
        {
            math.push(cal);
        }
        else if (dot == true)
        {
            let sumup = cal.toString() + '.' + dotCal.toString();
            sumup = Number(sumup);
            math.push(sumup);
            dot = false;
        }
        math.push('/');
        dotCal = 0;
        cal = 0;
    }
    else if (key == '.')
    {
        dot = true;
    }
    else if (key <= 9 && key >= 0 && dot == true)
    {
        dotCal = dotCal * 10;
        dotCal = dotCal + key;
    }
    if (dot == false)
    {
        document.getElementById("display").innerHTML = cal;
    }
    else if (dot == true)
    {
        document.getElementById("display").innerHTML = cal + '.' + dotCal;
    }
    if (key == '=')
    {
        dot = false;
        let sumup = cal.toString() + '.' + dotCal.toString();
        sumup = Number(sumup);
        math.push(sumup);
        let result = 0;
        for (let i = 0; i <math.length; i++)
        {
            if (i == 0)
            {
                result = math[i];
            }
            else if (math[i] == '+')
            {
                result = result + math[i+1];
            }
            else if (math[i] == '-')
            {
                result = result - math[i+1];
            }
            else if (math[i] == 'x')
            {
                result = result * math[i+1];
            }
            else if (math[i] == '/')
            {
                result = result / math[i+1];
            }
        };
        document.getElementById("display").innerHTML = result;
        math = [];
        cal = 0;
    };
};