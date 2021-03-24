function calc() {
    var a = parseInt(document.querySelector("#alt").value);
    var d = parseInt(document.querySelector("#desalt").value);
    var gs = parseInt(document.querySelector("#gs").value);
    var op = document.querySelector("#select").value;
    var calculate;
    var first;
    var second;
    var third;
    var fpm;
    var nanValue = NaN;

    if (op == "HeadWind"){
        first  = a - d;
        second = first / 1000;
        third = second * 3 + 10;
    } else if (op == "TailWind"){
        first = a -d;
        second = first / 1000;
        third = second * 3;}
        
    
    fpm = gs*5
    
    if(fpm == isNaN){
        fpm.replace(NaN,'0');
        calculate = "Start your decent in: " + third + " Nauticalmiles" + "<br>" + "With a decent rate of: " + fpm; 
    }else{
        calculate = "Start your decent in: " + third + " Nauticalmiles" + "<br>" + "With a decent rate of: " + fpm + " fpm";
    }



    
    
    document.querySelector("#result").innerHTML = calculate.replace(NaN,'0');
}


function Reset(){
    document.querySelector("#reset").reset();
    var er =" "
    document.querySelector("#result").innerHTML = er;
}