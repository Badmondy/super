var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var test = document.getElementById("demo1");
var op = parseInt(document.querySelector("#select").value);

output.textContent = slider.value;
slider.oninput = function(){
output.textContent = this.value;
parseInt(slider.value);
}




function Handlecalc() {
var a = parseInt(document.querySelector("#alt").value);
var d = parseInt(document.querySelector("#desalt").value);
var gs = parseInt(document.querySelector("#gs").value);
var op = parseInt(document.querySelector("#select").value);
var q = slider.value/10;


    if(op == 1){
        altitude = a - d;
        alt_div = altitude / 1000;
        alt_fin = alt_div * 3;
        windComp = alt_fin + q;
        fpm = gs*5;
        document.querySelector('#arrow').style.transform = 'rotate(360deg)';}
        else if(op == 2){
        altitude = a - d;
        alt_div = altitude / 1000;
        alt_fin = alt_div *3;
        windComp = alt_fin - q;
        fpm = gs*5;
        document.querySelector('#arrow').style.transform = 'rotate(180deg)';
        document.querySelector('#down').style.transform = 'translate(33vh,9vh)rotate(-20deg)';}
        
    
    
    windCompDone =  Math.round(windComp * 10 ) / 10;
    calculate = "Start your decent in: " + windCompDone + " Nm ";
    breakline =  "With a decent rate of: " + fpm + " fpm";
    document.querySelector("#result").textContent = calculate.replace(NaN, '');
    document.querySelector("#result2").textContent = breakline.replace(NaN, '');
    }



function HandleReset(){
    document.querySelector("#reset").reset();
    er = " ";
    document.querySelector("#result").textContent = er;
    document.querySelector("#result2").textContent = er;
    output.textContent = "50";
    location.reload();}
 

