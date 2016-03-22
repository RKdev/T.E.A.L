//Define topics object
TEAL.topics = TEAL.topics || {};
TEAL.topics.array = TEAL.topics.array || [];
TEAL.topics.db = "/pretendDB/topics.json";
TEAL.topics.categoriesName = '';


TEAL.topics.loadtopics = function(){
     if (TEAL.topics.categoriesName) {
      TEAL.requestAJAX({srvReq:"rd_db", db:TEAL.topics.db, requestType:"GET", async:true, callback:TEAL.topics.populatetopicsData});
      } else {
        console.log("TEAL.topics.loadtopics: no category selected");
        }
};

TEAL.topics.writetopics = function(){
  TEAL.requestAJAX({srvReq:"wr_db", db:TEAL.topics.db, requestType:"POST", async:true, POSTdata:JSON.stringify(TEAL.topics.array)});
};

TEAL.topics.populatetopicsData = function(AJAXdata){
     var JSONdata = JSON.parse(AJAXdata);
     TEAL.emptyArray(TEAL.topics.array);
     TEAL.populateArray(JSONdata, TEAL.topics.array);
     console.log("Hello");
     TEAL.topics.displaytopics();
};

//create a button for each category
TEAL.topics.displaytopics = function (){
  var aryLength = TEAL.topics.array.length;
  var topicsNameArray = [];
  var topicsDisplayArray = [];
  var topicsHeaderDiv = document.getElementById('topics-header-area');
  var topicsButtonDiv = document.getElementById('topics-output-area');
  topicsHeaderDiv.innerHTML = TEAL.topics.categoriesName;
  topicsButtonDiv.innerHTML = '';

  for (i = 0; i < aryLength; i++) {
    if (TEAL.topics.array[i].categoriesName === TEAL.topics.categoriesName) {
        TEAL.addItemToArray(topicsDisplayArray, TEAL.topics.array[i]);
        console.log(topicsDisplayArray.length);
        console.log(topicsDisplayArray);
        console.log(topicsDisplayArray[i]);
      //  topicsNameArray.push(topicsDisplayArray[i].topicsName);
//        topicsButtonDiv.innerHTML = topicsButtonDiv.innerHTML +
//        '<input type="button" class="topicsButton" id=' + i + ' value=' + topicsDisplayArray[i].topicsName + '>';
    }
  }
      TEAL.buildDropdownFromArray('topics-drop-down', topicsNameArray);

};

TEAL.topics.addTotopics = function (topicsName){
  document.getElementById('input-topics').value='';   //clear input box
  if (TEAL.topics.categoriesName) {
    TEAL.addItemToArray(TEAL.topics.array, {categoriesName: TEAL.topics.categoriesName, topicsName: topicsName});   //add item to array, redislplay UI items, store data
//    TEAL.topics.displaytopics();
    TEAL.topics.writetopics();
  } else {
    console.log("TEAL.topics.addTotopics: No Category Selected" );
    }
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
