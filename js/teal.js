console.log('T.E.A.L Running...');
var TEAL = TEAL || {};

//Some setup vars
TEAL.resourcesArray = [];
TEAL.testArray = [];
TEAL.db = "/pretendDB/data.json"


//function declarations

TEAL.populateArray = function(data, target){
    for (var i = 0; i < data.length; i++) {
        if (target.push(data[i])) {
          console.log("TEAL.populateArray: data loaded");
        }
    }
}

TEAL.emptyArray = function emptyArray(target){
  target.length = 0;
  if (target.length === 0) {
    console.log("TEAL.emptyArray: array emptied");
  }
}

TEAL.loadArrayfromAJAX = function(absPath, arrayTarget, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log('TEAL.loadArrayfromAJAX: ' + xhr.readyState);
  }
  xhr.open("GET", absPath, true);
  xhr.addEventListener("load", function(){
    var appendArrayItems=JSON.parse(this.responseText);
    callback(appendArrayItems, arrayTarget);
  });
  xhr.send();
}

TEAL.writeArraytoAJAX = function(absPath, arraySource){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log('TEAL.writeArraytoAJAX: ' + xhr.readyState);
  }
  xhr.open("POST", absPath, true);
//  xhr.addEventListener("load", function(){
//    callback(arraySource);
//  });
  xhr.send(JSON.stringify(arraySource));
}

TEAL.addToArray = function(target, category){
  var newResource = {};
  newResource.category = category;
  if (target.push(newResource)) {
    console.log("TEAL.addToArray: data added");
  }
}

function listTopics(resourceID){
  var intArrayLength = resources[resourceID].topics.length;
  for (var i = 0; i < intArrayLength; i++) {
    console.log("GFunc listTopics: " + resources[resourceID].topics[i].name);
  }
}

function listResources() {
  var aryLength = resources.length;
  for (var i = 0; i < aryLength; i++) {
    console.log("GFunc listResources: " + resources[i].id + ' ' + resources[i].name);
  }
}

function readArray(anyArray) {
  for (var i = 0; i < anyArray.length; i++) {
    console.log("GFunc readArray:" + anyArray[i]);
  }
}

function supports_local_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
    return false;
  }
}
