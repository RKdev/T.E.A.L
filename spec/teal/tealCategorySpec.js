//Teal specs go here

var TEAL = require('../../js/teal.js');
var test = TEAL.categories;
console.log('teal.categories object');
TEAL.categories.array = ['1', '2', '3'];

//Begin Describe
describe('2plus2', function(){
  //Begin It
  it('should return 4', function(){
    var testVal = test.$2plus2();
    expect(testVal).toEqual(4);
  //End It
  });
//End Describe
});


//Begin Describe
describe('loadCategories', function(){
  it ('should execute an AJAX GET call to the category_db');
  it ('should return AJAX BAD if AJAX call fails');
  it ('should return AJAX GOOD if AJAX call succeeds');
  it ('should start with an empty array');
  it ('should populate the empty array with data');
//End Describe
});

//Begin Describe
describe('renderCategories', function(){
  it ('should create an html button for each category');
//End Describe
});

//Begin Describe
describe('writeCategories', function(){
 it ('should execute an AJAX POST call to the category_db');
 it ('should return AJAX BAD if AJAX call fails');
 it ('should return AJAX GOOD if AJAX call succeeds');
//End Describe
});

//Begin Describe
describe('addCategory', function(){
 it ('should add an new item to the array');
 it ('should verify that an item has been added to the array');
 it ('should create a new html button');
 it ('should verify that a new html button has been created');
//End Describe
});

//Begin Describe
describe('removeCategory', function(){
 it ('should remove an item from the array');
 it ('should verify that the correct item has been removed from the array');
 it ('should remove the html button');
 it ('should verify that the correct button has been removed');
//End Describe
});
