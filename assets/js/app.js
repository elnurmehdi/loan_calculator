function Calculate(){
    var amount = document.getElementById("Amnt").value;
    var duration = document.getElementById("Drtn").value;
    var percent = document.getElementById("Percent").value;
    
    var percentPayment = (amount*percent)/100
    var monthlyPayment = (parseFloat(amount)+parseFloat(percentPayment))/duration
    
    var result = document.getElementById("result").innerHTML = monthlyPayment.toFixed(2)
}


