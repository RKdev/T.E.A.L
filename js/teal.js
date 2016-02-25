console.log('T.E.A.L Running...');
var TEAL = TEAL || {};

//Define categories object
TEAL.categories = TEAL.categories || {};
TEAL.categories.array = TEAL.categoryArray || [];
TEAL.categories.db = "/pretendDB/categories.json";

TEAL.categories.loadCategories = function(data){
  if(!(TEAL.categories.array)){
  TEAL.populateArray(data, targetArray);
  }
};

TEAL.categories.writeCategories = function(){};

TEAL.categories.renderCategories = function(){
  var targetDropdown = 'category-drop-down';
  TEAL.populateDropDownfromArray(targetArray, targetDropdown);
  TEAL.displayCategories();
};

TEAL.categories.displayCategories = function (){
  var aryLength = TEAL.categoryArray.length;
  if (aryLength) {
    var categoryButtonDiv = document.getElementById('category-output-area');
    categoryButtonDiv.innerHTML = '';
    for (var i = 0; i < aryLength; i++) {
      console.log("TEAL.displayCategories: " + i + ' ' + TEAL.categoryArray[i]);
      categoryButtonDiv.innerHTML = categoryButtonDiv.innerHTML + '<input type="button" class="categoryButton" id=' + i + ' value=' + TEAL.categoryArray[i] + '>';
    }
  }
};



TEAL.categories.$2plus2 = function(){
  var returnVal = 4;
  return returnVal;
};

TEAL.categories.addCategory = function (categoryName){
  TEAL.addItemToArray(TEAL.categoryArray, categoryName);
  addItemtoDropdown('category-drop-down', categoryName);
  document.getElementById('input-category').value='';
  TEAL.displayCategories();
  TEAL.writeArraytoAJAX(TEAL.category_db, TEAL.categoryArray);

};
TEAL.categories.removeCategory = function(){};

TEAL.resources = {};
TEAL.topics = {};


TEAL.testArray = [];
TEAL.db = "/pretendDB/data.json";

TEAL.categoryArray = [];
TEAL.category_db = "/pretendDB/categories.json";

TEAL.resourcesArray = [];
TEAL.resource_db = "/pretendDB/resources.json";

TEAL.topicsArray = [];
TEAL.topic_db = "/pretendDB/topics.json";

//function declarations

TEAL.populateDropDownfromArray = function(data, target){
    for (var i = 0; i < data.length; i++) {
        addItemtoDropdown(target, data[i]);
    }
};

TEAL.populateArray = function(data, target){
    for (var i = 0; i < data.length; i++) {
        if (target.push(data[i])) {
          console.log("TEAL.populateArray: data loaded");
        }
    }
};

TEAL.emptyArray = function emptyArray(target){
  target.length = 0;
  if (target.length === 0) {
    console.log("TEAL.emptyArray: array emptied");
  }
};

TEAL.loadArrayfromAJAX = function(absPath, arrayTarget, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log('TEAL.loadArrayfromAJAX: ' + xhr.readyState);
  };

  xhr.open("GET", absPath, true);
  xhr.addEventListener("load", function(){
    var appendArrayItems=JSON.parse(this.responseText);
    callback(appendArrayItems, arrayTarget);
  });
  xhr.send();
};

TEAL.writeArraytoAJAX = function(absPath, arraySource){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log('TEAL.writeArraytoAJAX: ' + xhr.readyState);
  };
  xhr.open("POST", absPath, true);
    //  xhr.addEventListener("load", function(){
    //    callback(arraySource);
    //  });
  xhr.send(JSON.stringify(arraySource));
};

TEAL.addObjectToArray = function(target, objectItem){
  var newObject = {};
  newObject.objectItem = objectItem;
  if (target.push(newObject)) {
    console.log("TEAL.addObjectToArray: data added");
  }
};

TEAL.addItemToArray = function(target, arrayItem){
  if (arrayItem){
    if (target.push(arrayItem)) {
      console.log("TEAL.addObjectToArray: data added");
    }
  } else {console.log("TEAL.addItemToArray: Cannot add empty value");}
};
module.exports = TEAL;
