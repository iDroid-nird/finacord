const indexedDB = window.indexedDB || webkitIndedexedDB || mozIndedexedDB || msIndexedDB;
const IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction ||
    window.msIDBTransaction;

const IDBKeyRange = window.IDBKeyRange ||
    window.webkitIDBKeyRange || window.msIDBKeyRange;
let db;
let request = indexedDB.open("finacord_Database", 2);

request.onerror = (event) => {
    console.log("Error: " + event);
};


function createData(){
/*
display the inputs when done onclick
*/  
    var row = document.getElementById("preview_form");
    var newRow = row.insertRow(1);
    //inserting cells per each input
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    //creating row automatically
    cell1.sale_report.innerHTML = cursor.value.product;
//    cell2.innerHTML = takePrice;
//    cell3.innerHTML = takeItem;
//    cell4.innerHTML = takeIpayment;
//    cell5.innerHTML = genTotal;
    // creates new row upon new entry
}

request.onupgradeneeded = (event) => {
    console.log('Hello');
    db = event.target.result;
};
request.onsuccess = (event) => {
    db = request.result;
    console.log("Success: " + db);
    view();
};
let view = () => {
    console.log("Hmm" + db);
    let objectStore = db.transaction("preview").objectStore("preview");
    let sale_report = document.getElementById("sale_report");

    objectStore.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;
        if (cursor) {
            console.log(cursor);
            createData();
//            createData()
//            tableData.innerHTML = cursor.value.product + ', ' + cursor.value.quantity;
//            table.appendChild(tableData);
            //Codde for DOM manipulation goes here it shouldn't be under the cursor.continue
            //no need for loops this function is going to iterate over elements
            //To get a value use cursor.value.nameoftheobject
            cursor.continue();
        }else {
       console.log('Entries all displayed.');
    }

    };

};