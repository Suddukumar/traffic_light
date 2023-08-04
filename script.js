let i=0;
let n=60;
let cArray=[" red","yellow","green"];
function traffic(){
    let l= document.getElementsByClassName('light');
    for (let j = 0; j <l.length; j++) {
        l[j].style.background="black";
        l[j].innerHTML="";

       }
       l[i].style.background=cArray[i];
       if (i<l.length) {
        if (n>=0) {
            l[i].innerHTML=n;
            n--;
            
        }
        if (n==0) {
            i++;
            n=60;
            if (i==3) {
                i=0;
                
            }
            
        }
        // i++;
        
    } 

 }

setInterval(traffic,1000);