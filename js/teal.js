console.log('Running...');
var TEAL = TEAL || {};


//Some setup vars
TEAL.resourcesArray = [];
TEAL.testArray = [];
TEAL.db = "/pretendDB/data.json"


//function declarations

TEAL.populateArray = function(data, target){
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      target.push(data[i]);
    }
  console.log(target);
}


TEAL.loadArrayfromJSON = function(absPath, arrayTarget, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", absPath, true);
  xhr.addEventListener("load", function(){
    var appendArrayItems=JSON.parse(this.responseText);
    callback(appendArrayItems, arrayTarget);
  });
  xhr.send();
}

TEAL.addToArray = function(target, category){
  var newResource = {};
  newResource.category = category;
  target.push(newResource);
  console.log(target);
}

function listTopics(resourceID){
  var intArrayLength = resources[resourceID].topics.length;
  for (var i = 0; i < intArrayLength; i++) {
    console.log(resources[resourceID].topics[i].name);
  }
}

function listResources() {
  var aryLength = resources.length;
  for (var i = 0; i < aryLength; i++) {
    console.log(resources[i].id + ' ' + resources[i].name);
  }
}

function readArray(anyArray) {
  for (var i = 0; i < anyArray.length; i++) {
    console.log(anyArray[i]);
  }
}

function supports_local_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
    return false;
  }
}
