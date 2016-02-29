//Teal specs go here

var TEAL = require('../../js/teal.js');
var test = TEAL.categories;

console.log('teal.categories object');
console.log(test);

//Begin Describe
describe('2plus2', function(){

  it('should return 4', function(){
    expect(test.$2plus2({value:4})).toEqual(4);
  });
//End Describe
});


//Begin Describe
describe('loadCategories', function(){
  it ('should start with an empty array');
  it ('should populate the empty array with data');
  it ('should execute an AJAX GET call to the category_db');
  it ('should respond appropriately to the response of the AJAX call');

//End Describe
});

//Begin Describe
describe('renderCategories', function(){
  it ('should create an html button for each category if told to create');
  it ('should remove an html button for each category if told to destroy');
//End Describe
});

//Begin Describe
describe('writeCategories', function(){
 it ('should execute an AJAX POST call to the category_db');
 it ('should respond appropriately to the response of the AJAX call');
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

//Begin Describe
describe ('requestAJAX', function(){
  it ('should specify a request type to the server', function(){
//    expect(TEAL.requestAJAX({srvReq:'wr_db'})).toEqual('wr_db');
//    expect(TEAL.requestAJAX({srvReq:'rd_db'})).toEqual('rd_db');
//    expect(TEAL.requestAJAX('stuff')).toEqual('noReq');
//    expect(TEAL.requestAJAX({srvReq:'bob'})).toEqual('badReq');
  });
  it ('should alert if the AJAX call fails for some reason');
//End Describe
});
