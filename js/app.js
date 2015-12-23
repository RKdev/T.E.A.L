console.log('Hello, World!');

var resources = [
  {
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

console.log(resources[0].name)
console.log(resources[1].name);
