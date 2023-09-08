function AmountChange(){
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}
function YearChange(){
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}
function RateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}
function CalculateClick(){
    var P = parseInt(document.getElementById("txtAmount").value);
    var r = parseFloat(document.getElementById("txtRate").value)/12/100;
    var n = parseInt(document.getElementById("txtYears").value) * 12;

    var EMI = P * r * Math.pow(1 + r,n)/Math.pow(1 + r, n) - 1;

    document.getElementById("result").innerHTML = "Monthly Installment for your amount " + P + " for " + n + "months is " + "<b> &#8377;" + Math.round(EMI) + "</b>";

}