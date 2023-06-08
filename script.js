function temperatureConverter(Num){
    Num = parseFloat(Num);
    document.getElementById("fahrenheit").innerHTML=(Num*1.8)+32;
}