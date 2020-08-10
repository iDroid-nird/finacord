//jshint esversion: 6
const indexedDB = window.indexedDB || webkitIndedexedDB || mozIndedexedDB || msIndexedDB;
const IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction ||
    window.msIDBTransaction;

const IDBKeyRange = window.IDBKeyRange ||
    window.webkitIDBKeyRange || window.msIDBKeyRange;
if (!indexedDB) {
    alert("Unsupported Browser");
}

let db;
let request = indexedDB.open("finacord_Database", 2);
let total = 0;
let tax = 0.96;

request.onerror = (event) => {
    console.log("Error: " + event);
};

request.onsuccess = (event) => {
    db = request.result;
    console.log("Success: " + db);
};

request.onupgradeneeded = (event) => {
    console.log('Hello');
    db = event.target.result;
    let objectStore = db.createObjectStore('preview', {
        keyPath: "id",
        autoIncrement: true
    });
};


//btn.addEventListener('click', add);
//document.getElementsByClassName("btn_save").addEventListener("click",add);
