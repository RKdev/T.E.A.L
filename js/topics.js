//Define topics object
TEAL.topics = TEAL.topics || {};
TEAL.topics.array = TEAL.topics.array || [];
TEAL.topics.db = "/pretendDB/topics.json";
TEAL.topics.categoriesName = '';

TEAL.topics.loadtopics = function(){
  TEAL.emptyArray(TEAL.topics.array);
  TEAL.requestAJAX({srvReq:"rd_db", db:TEAL.topics.db, requestType:"GET", async:true, callback:TEAL.topics.populatetopicsData});
};

TEAL.topics.writetopics = function(){
  TEAL.requestAJAX({srvReq:"wr_db", db:TEAL.topics.db, requestType:"POST", async:true, POSTdata:JSON.stringify(TEAL.topics.array)});
};

TEAL.topics.populatetopicsData = function(AJAXdata){
  var JSONdata = JSON.parse(AJAXdata);
  TEAL.populateArray(JSONdata, TEAL.topics.array);
  TEAL.topics.displaytopics();
};

//create a button for each category
TEAL.topics.displaytopics = function (){
  var aryLength = TEAL.topics.array.length;
  var topicsNameArray = [];
  var topicsIndexArray = [];
  var topicsHeaderDiv = document.getElementById('topics-header-area');
  var topicsButtonDiv = document.getElementById('topics-output-area');
  topicsHeaderDiv.innerHTML = TEAL.topics.categoriesName;
  topicsButtonDiv.innerHTML = '';

  for (var i = 0; i < aryLength; i++) {
    if (TEAL.topics.array[i].categoriesName === TEAL.topics.categoriesName) {
      TEAL.addItemToArray(topicsNameArray, TEAL.topics.array[i].topicsName);
      TEAL.addItemToArray(topicsIndexArray, i);
      topicsButtonDiv.innerHTML = topicsButtonDiv.innerHTML +
      '<input type="button" class="topicsButton" id=' + i + ' value="' + TEAL.topics.array[i].topicsName + '">';
    }
  }
  TEAL.buildDropdownFromArray({anyDropdown: 'topics-drop-down', textArray: topicsNameArray, valuesArray: topicsIndexArray, arrayLength: topicsNameArray.length});
};

TEAL.topics.addTotopics = function (topicsName){
  document.getElementById('input-topics').value='';   //clear input box
  TEAL.addItemToArray(TEAL.topics.array, {categoriesName: TEAL.topics.categoriesName, topicsName: topicsName});   //add item to array, redislplay UI items, store data
  TEAL.topics.displaytopics();
  TEAL.topics.writetopics();
};

TEAL.topics.removeFromtopics = function(){
  var listOfDropDownValues = document.getElementById('topics-drop-down'); //select item from dropdown
  var ddItem = listOfDropDownValues.options[listOfDropDownValues.selectedIndex].value;
  console.log(ddItem);
  TEAL.removeItemFromArray(TEAL.topics.array, ddItem); //remove item from array, redislplay UI items, store data
  TEAL.topics.displaytopics();
  TEAL.topics.writetopics();
};

TEAL.topics.searchFromCategories = function(categoriesName){
  TEAL.topics.categoriesName = categoriesName;
  TEAL.topics.loadtopics();
};
