let range = document.querySelector('.range');
range.value = 0;
range.min = 0;
let chron = document.querySelector('.chronology');

range.onchange= function(event){
   
   /* for(let i = 1 ; i <= 10 ; i++){
        let line = document.querySelector("#line-"+i);
        let thumb =document.querySelector("input[type=range]::-webkit-slider-thumb");

        box = line.getBoundingClientRect().left;
        let Mx,LastX;
        console.log(thumb);
        Mx = event.offsetX;
        console.log(Mx);
        if(Mx>box && Mx<(box + line.offsetWidth)){
           
            console.log("prep");
        }
    }*/
    let wid = document.documentElement.scrollWidth;
    function openLine(margin_left,margin_enter,sensitivity){
        for(let i = 0 ; i<=9 ; i++){
            let j = i+1;
            if ((range.value>(margin_left+i*margin_enter-sensitivity))
            &&(range.value>(margin_left+i*margin_enter+sensitivity))
            ){
                window.location.href ="pages/page-"+j+".html";
            }
        }
    }
   if(wid>1440){
    openLine(0,90,10);
    return;
   }
   else if(wid>1200){
    openLine(0,91,5);
    return;
   }
   else if(wid>992){
    openLine(300,87,10);
    return;
   }
   else if(wid>768){
    openLine(0,84,7);
    return;
   }
   else if(wid>576){
    openLine(72,80,10);
    return; 
   }
   else if(wid>380){
    openLine(72,81,6);
    return; 
   }
   else{
    openLine(0,91,6);
    return;
   }

   
    chron.innerHTML=range.value;
}