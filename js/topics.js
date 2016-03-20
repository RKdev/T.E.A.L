//Define topics object
TEAL.topics = TEAL.topics || {};
TEAL.topics.array = TEAL.topics.array || [];
TEAL.topics.db = "/pretendDB/topics.json";
TEAL.topics.categoriesName = '';

TEAL.topics.loadtopics = function(){
  if(!(TEAL.topics.array.length)){  //only load topics array once
  TEAL.requestAJAX({srvReq:"rd_db", db:TEAL.topics.db, requestType:"GET", async:true, callback:TEAL.topics.populatetopicsData});
  } else {
  console.log("TEAL.topics.loadtopics: topics already loaded");
  }
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
  var topicsButtonDiv = document.getElementById('topics-output-area');
  topicsButtonDiv.innerHTML = '';
  for (var i = 0; i < aryLength; i++) {
      topicsButtonDiv.innerHTML = topicsButtonDiv.innerHTML +
      '<input type="button" class="topicsButton" id=' + i + ' value=' + TEAL.topics.array[i] + '>';
  }
  TEAL.buildDropdownFromArray('topics-drop-down', TEAL.topics.array);
};

TEAL.topics.addTotopics = function (topicsName){
  document.getElementById('input-topics').value='';   //clear input box

  TEAL.addItemToArray(TEAL.topics.array, topicsName);   //add item to array, redislplay UI items, store data
  TEAL.topics.displaytopics();
  TEAL.topics.writetopics();
};

TEAL.topics.removeFromtopics = function(){
  var listOfDropDownValues = document.getElementById('topics-drop-down'); //select item from dropdown
  var ddItem = listOfDropDownValues.selectedIndex;

  TEAL.removeItemFromArray(TEAL.topics.array, ddItem); //remove item from array, redislplay UI items, store data
  TEAL.topics.displaytopics();
  TEAL.topics.writetopics();
};

TEAL.topics.searchFromCategories = function(categoriesName){
  TEAL.topics.categoriesName = categoriesName;
    console.log("TEAL.categories.searchFromcategories: " + TEAL.topics.categoriesName);
  TEAL.topics.loadtopics();
};
