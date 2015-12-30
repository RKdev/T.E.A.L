console.log('Running...');

var resources = [
  {
    id: 0,
    name: "College Mathematics",
    type: "Text Book",
    cycle: 0,
    category: {
        name:"Mathematics",
    },
    topics: [
      {parent: "Mathematics", name:"College Algebra"},
      {parent: "Mathematics", name:"Precalulus"},
      {parent: "Mathematics", name:"Calculus"},
    ],
  },
  {
    id: 1,
    name: "Kahn Video",
    type: "Video",
    cycle: 0,
    category: {
        name:"Mathematics",
    },
    topics: [
      {parent: "Mathematics", name:"Calculus"},
    ],
  },
];


listResources();
readArray(resources[0].topics);
listTopics(1);


//function declarations
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

//
