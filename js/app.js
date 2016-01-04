console.log('Running...');
//Some setup vars
var db = "/pretendDB/data.json"
var resources = [];
var test = [];


//function declarations

function populateArray(data, target){
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      target.push(data[i]);
    }
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

function addResource(category,id,name,subresources,topics,type){
  var newResource = {};
 newResource.category = category;
/*  newResource.cycle = 0;
  newResource.id = id;
  newResource.name = name;
  newResource.subresources = [];
  newResource.topics = [];
  newResource.type = type;
  */
  resources.push(newResource);
  console.log(resources);
}

/*still not sure about how to do this correctly. Right now I'm accessing the global
 resources array manually instead of passing a reference - which I want to do
 I'm thinking it's just a lack of understanding how to do objects and callbacks
 correctly in javascript. But it works for right now. I want this to be a generic function though*/

function jsonLoader(absPath, target, callback) {
       var xhr = new XMLHttpRequest();
       xhr.open("GET", absPath, true);
       xhr.addEventListener("load", function(){
         var appendObject=JSON.parse(this.responseText);
         callback(appendObject, target);
       });
       xhr.send();
}

//broken till I learn POSTing with node.js, right now it's just a copy of the
function jsonWriter(absPath, target, callback) {
       var xhr = new XMLHttpRequest();
       xhr.open("POST", absPath, true);
       xhr.addEventListener("load", function(){
       callback();
       });
       xhr.send();
}

//functions to make

//create record
//  adds to record id array
//  wants name, type, category
//  optionally wants topics
//  sets record id to array subscript
//  sets cycle to 0

//add topic
//  add topic to a topic array within a record
//  wants record to add to, category, topic name
