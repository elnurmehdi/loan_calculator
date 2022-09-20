function Calculate(){
    var amount = document.getElementById("Amnt").value;
    var duration = document.getElementById("Drtn").value;
    var percent = document.getElementById("Percent").value;
    
    var percentFee = (amount*percent)/100
    var monthlyFee = (parseFloat(amount)+parseFloat(percentFee))/duration
    
    var result = document.getElementById("result").innerHTML = monthlyFee
}