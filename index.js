function createPreview(){
/*
display the inputs when done onclick
*/  var takePrice, takeQty, takeItem, takeIpayment, genTotal,taxRate, netSale;
    takeQty = document.getElementById('iqty').value;
    takePrice = document.getElementById('iunit').value;
    takeItem = document.getElementById('iproduct').value;
    takeIpayment = document.getElementById('ipayment').value;
    genTotal = parseInt(takeQty) * parseFloat(takePrice);
    taxRate = (genTotal * 3)/100;
    var row = document.getElementById("preview_form");
    var newRow = row.insertRow(1);
    //inserting cells per each input
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    //creating row automatically
    cell1.innerHTML = takeQty;
    cell2.innerHTML = takePrice;
    cell3.innerHTML = takeItem;
    cell4.innerHTML = takeIpayment;
    cell5.innerHTML = genTotal;
    // creates new row upon new entry
}