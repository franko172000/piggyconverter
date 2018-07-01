

var peopleData = [
    { name: "John Dow", email: "john@company.com" },
    { name: "Don Dow", email: "don@company.com" }
];

function setDbResult (result){

}
var mdb;
function initDb() {
    var request = indexedDB.open("piggyDB", 1);
    request.onsuccess = function (evt) {
        mdb = evt.target.result;
    };

    request.onerror = function (evt){
        console.log("piggyDB error: " + evt.target.errorCode);
    };

    request.onupgradeneeded = function (evt){
        var objectStore = evt.currentTarget.result.createObjectStore("currencies",
            { keyPath: "id", autoIncrement: true });

        // objectStore.createIndex("name", "name", { unique: false });
        // objectStore.createIndex("email", "email", { unique: true });
        //
        // for (i in peopleData) {
        //     objectStore.add(peopleData[i]);
        // }
    };
}