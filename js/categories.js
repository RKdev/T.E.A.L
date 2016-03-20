//Define categories object
TEAL.categories = TEAL.categories || {};
TEAL.categories.array = TEAL.categories.array || [];
TEAL.categories.db = "/pretendDB/categories.json";

TEAL.categories.loadCategories = function(){
  if(!(TEAL.categories.array.length)){  //only load categories array once
  TEAL.requestAJAX({srvReq:"rd_db", db:TEAL.categories.db, requestType:"GET", async:true, callback:TEAL.categories.populatecategoriesData});
  } else {
  console.log("TEAL.categories.loadCategories: categories already loaded");
  }
};

TEAL.categories.writeCategories = function(){
  TEAL.requestAJAX({srvReq:"wr_db", db:TEAL.categories.db, requestType:"POST", async:true, POSTdata:JSON.stringify(TEAL.categories.array)});
};

TEAL.categories.populatecategoriesData = function(AJAXdata){
  var JSONdata = JSON.parse(AJAXdata);
  TEAL.populateArray(JSONdata, TEAL.categories.array);
  TEAL.categories.displayCategories();
};

//create a button for each category
TEAL.categories.displayCategories = function (){
  var aryLength = TEAL.categories.array.length;
  var categoriesButtonDiv = document.getElementById('categories-output-area');
  categoriesButtonDiv.innerHTML = '';
  for (var i = 0; i < aryLength; i++) {
      categoriesButtonDiv.innerHTML = categoriesButtonDiv.innerHTML +
      '<input type="button" class="categoriesButton" id=' + i + ' value=' + TEAL.categories.array[i] +
      ' onclick="TEAL.topics.searchFromCategories(' + "'" + TEAL.categories.array[i] + "'" + ')"' + '>';
  }
  TEAL.buildDropdownFromArray('categories-drop-down', TEAL.categories.array);
};

TEAL.categories.addToCategories = function (categoriesName){
  document.getElementById('input-categories').value='';   //clear input box

  TEAL.addItemToArray(TEAL.categories.array, categoriesName);   //add item to array, redislplay UI items, store data
  TEAL.categories.displayCategories();
  TEAL.categories.writeCategories();
};

TEAL.categories.removeFromCategories = function(){
  var listOfDropDownValues = document.getElementById('categories-drop-down'); //select item from dropdown
  var ddItem = listOfDropDownValues.selectedIndex;

  TEAL.removeItemFromArray(TEAL.categories.array, ddItem); //remove item from array, redislplay UI items, store data
  TEAL.categories.displayCategories();
  TEAL.categories.writeCategories();
};
