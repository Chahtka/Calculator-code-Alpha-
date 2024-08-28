let display = document.getElementById("inputbox");
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
        else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else if(e.target.innerHTML == 'sin'){
            sin = Math.sin(display.value);
            display.value = sin;
        }
        else if(e.target.innerHTML == 'cos'){
            cos = Math.cos(display.value);
            display.value = cos;
        }
        else if(e.target.innerHTML == 'tan'){
            tan = Math.tan(display.value);
            display.value = tan;
        }
        else if(e.target.innerHTML == 'x^2'){
            pow = Math.pow(display.value,2);
            display.value = pow;
        }
        else if(e.target.innerHTML == "√'"){
            sqrt = Math.sqrt(display.value,2);
            display.value = sqrt;
        }
        else if(e.target.innerHTML == 'log'){
            log = Math.log10(display.value);
            display.value = log;
        }
                else if(e.target.innerHTML == 'x^2'){
            pow = Math.pow(display.value,display.value);
            display.value = pow;
        }
        else if(e.target.innerHTML == 'π'){
            display.value =  '3.14159265359';
        }
        else if(e.target.innerHTML == 'x!'){
            var i, num, f;
            f=1
            num=display.value;
            for(i=1;i<=num; i++){
                f=f*i;
            }
            i=i-1;
            display.value=f;
        }
        else if(e.target.innerHTML == 'CE'){
            display.value = display.value.substr(0,display.value.length-1);
        }
        else{
            string += e.target.innerHTML;
            display.value = string;
        }
    }
)
})
