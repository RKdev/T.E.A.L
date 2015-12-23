console.log('Running...');

var resources = [
  {
    id: 0,
    name: "College Mathematics",
    type: "Text Book",
    cycle: 0,
    category: {
        name:"Mathematics",
        topics: [
          {parent: "Mathematics", name:"College Algebra"},
          {parent: "Mathematics", name:"Precalulus"},
          {parent: "Mathematics", name:"Calculus"},
        ],
    },
  },
  {
    id: 1,
    name: "Kahn Video",
    type: "Video",
    cycle: 0,
    category: {
        name:"Mathematics",
        topics: [
          {parent: "Mathematics", name:"College Algebra"},
          {parent: "Mathematics", name:"Precalulus"},
          {parent: "Mathematics", name:"Calculus"},
        ],
    },
  },
];

console.log(resources[0].name);
console.log(resources[1].name);
listTopics(0);


//function declarations
function listTopics(resourceID){
  var aryLength = resources[resourceID].category.topics.length;
  for (var i = 0; i < aryLength; i++) {
    console.log(resources[resourceID].category.topics[i].name);
  }
}
