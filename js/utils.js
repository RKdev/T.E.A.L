// ******************************************
// global functions - convert into TEAL objects or make into utils
function listTopics(resourceID){
  var intArrayLength = resources[resourceID].topics.length;
  for (var i = 0; i < intArrayLength; i++) {
    console.log("Global Function listTopics: " + resources[resourceID].topics[i].name);
  }
}

function listResources() {
  var aryLength = resources.length;
  for (var i = 0; i < aryLength; i++) {
    console.log("Global Function listResources: " + resources[i].id + ' ' + resources[i].name);
  }
}

function readArray(anyArray) {
    if (anyArray.length === 0) {
        console.log("Global Function readArray: Array Empty" );
      } else {
        for (var i = 0; i < anyArray.length; i++)
        console.log("Global Function readArray:" + i + ":" + anyArray[i]);
      }
}

function supports_local_storage() {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch(e){
    return false;
  }
}
