console.log('T.E.A.L Running...');
var TEAL = TEAL || {};

//Define categories object
TEAL.categories = TEAL.categories || {};
TEAL.categories.array = TEAL.categories.array || [];
TEAL.categories.db = "/pretendDB/categories.json";

TEAL.categories.loadCategories = function(){
  if(!(TEAL.categories.array.length)){  //only load category array once
  TEAL.requestAJAX({srvReq:"rd_db", db:TEAL.categories.db, requestType:"GET", async:true, callback:TEAL.categories.populateCategoryArray });
  } else {
  console.log("TEAL.categories.loadCategories: categories already loaded");
  }
};

TEAL.categories.writeCategories = function(){
  TEAL.requestAJAX({srvReq:"wr_db", db:TEAL.categories.db, requestType:"POST", async:true, POSTdata:JSON.stringify(TEAL.categories.array)});
};

TEAL.categories.populateCategoryArray = function(AJAXdata){
  var JSONdata = JSON.parse(AJAXdata);
  TEAL.populateArray(JSONdata, TEAL.categories.array);
  TEAL.populateDropDownfromArray(TEAL.categories.array, 'category-drop-down');
  TEAL.categories.displayCategories();
};

TEAL.categories.renderCategories = function(){
  var targetDropdown = 'category-drop-down';
  TEAL.populateDropDownfromArray(targetArray, targetDropdown);
  TEAL.displayCategories();
};

TEAL.categories.displayCategories = function (){
  var aryLength = TEAL.categories.array.length;
  if (aryLength) {
    var categoryButtonDiv = document.getElementById('category-output-area');
    categoryButtonDiv.innerHTML = '';
    for (var i = 0; i < aryLength; i++) {
      console.log("TEAL.displayCategories: " + i + ' ' + TEAL.categories.array[i]);
      categoryButtonDiv.innerHTML = categoryButtonDiv.innerHTML + '<input type="button" class="categoryButton" id=' + i + ' value=' + TEAL.categories.array[i] + '>';
    }
  }
};


TEAL.categories.$2plus2 = function(parameters){

  return parameters.value;

};

TEAL.categories.addCategory = function (categoryName){
  TEAL.addItemToArray(TEAL.categories.array, categoryName);
  addItemtoDropdown('category-drop-down', categoryName);
  document.getElementById('input-category').value='';
  TEAL.categories.displayCategories();
  TEAL.categories.writeCategories();

};
TEAL.categories.removeCategory = function(){};

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

TEAL.requestAJAX = function(params){
  //process parameters
  //db : for now, abs path to db
  //srvReq : wr_db, rd_db
  //requestType : 'GET' or 'POST'
  //async : false for 'sync' or true for 'async'
  //POSTdata : data to send to server
  //callback : function(){};


  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
        console.log('TEAL.requestAJAX: ' + xhr.readyState);
  };
  xhr.open(params.requestType, params.db, params.async);
  xhr.addEventListener("load", function(){
    if (typeof params.callback === 'function') {params.callback(this.responseText);}
  });

  xhr.send(params.POSTdata);
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

//module.exports = TEAL;
