//Define contents object
TEAL.contents = TEAL.contents || {};
TEAL.contents.array = TEAL.contents.array || [];
TEAL.contents.db = "/pretendDB/contents.json";
TEAL.contents.categoriesName = '';

TEAL.contents.loadcontents = function(){
  TEAL.emptyArray(TEAL.contents.array);
  TEAL.requestAJAX({srvReq:"rd_db", db:TEAL.contents.db, requestType:"GET", async:true, callback:TEAL.contents.populatecontentsData});
};

TEAL.contents.writecontents = function(){
  TEAL.requestAJAX({srvReq:"wr_db", db:TEAL.contents.db, requestType:"POST", async:true, POSTdata:JSON.stringify(TEAL.contents.array)});
};

TEAL.contents.populatecontentsData = function(AJAXdata){
  var JSONdata = JSON.parse(AJAXdata);
  TEAL.populateArray(JSONdata, TEAL.contents.array);
  TEAL.contents.displaycontents();
};

//create a button for each category
TEAL.contents.displaycontents = function (){
  var aryLength = TEAL.contents.array.length;
  var contentsNameArray = [];
  var contentsIndexArray = [];
  var contentsHeaderDiv = document.getElementById('contents-header-area');
  var contentsButtonDiv = document.getElementById('contents-output-area');
  contentsHeaderDiv.innerHTML = TEAL.contents.categoriesName;
  contentsButtonDiv.innerHTML = '';

  for (var i = 0; i < aryLength; i++) {
    if (TEAL.contents.array[i].topicsName === TEAL.contents.categoriesName) {
      console.log(TEAL.contents.array[i].contentsName);
      TEAL.addItemToArray(contentsNameArray, TEAL.contents.array[i].contentsName);
      TEAL.addItemToArray(contentsIndexArray, i);
      contentsButtonDiv.innerHTML = contentsButtonDiv.innerHTML +
      '<input type="button" class="contentsButton" id=' + i + ' value="' + TEAL.contents.array[i].contentsName + '">';
    }
  }
  TEAL.buildDropdownFromArray({anyDropdown: 'contents-drop-down', textArray: contentsNameArray, valuesArray: contentsIndexArray, arrayLength: contentsNameArray.length});
};

TEAL.contents.addTocontents = function (contentsName){
  document.getElementById('input-contents').value='';   //clear input box
  TEAL.addItemToArray(TEAL.contents.array, {categoriesName: TEAL.resources.categoriesName, topicsName: TEAL.contents.categoriesName, contentsName: contentsName});   //add item to array, redislplay UI items, store data
  TEAL.contents.displaycontents();
  TEAL.contents.writecontents();
};

TEAL.contents.removeFromcontents = function(){
  var listOfDropDownValues = document.getElementById('contents-drop-down'); //select item from dropdown
  var ddItem = listOfDropDownValues.options[listOfDropDownValues.selectedIndex].value;
  console.log(ddItem);
  TEAL.removeItemFromArray(TEAL.contents.array, ddItem); //remove item from array, redislplay UI items, store data
  TEAL.contents.displaycontents();
  TEAL.contents.writecontents();
};

TEAL.contents.searchFromCategories = function(categoriesName){
  TEAL.contents.categoriesName = categoriesName;
  TEAL.contents.loadcontents();
};
