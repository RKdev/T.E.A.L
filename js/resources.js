//Define resources object
TEAL.resources = TEAL.resources || {};
TEAL.resources.array = TEAL.resources.array || [];
TEAL.resources.db = "/pretendDB/resources.json";
TEAL.resources.categoriesName = '';

TEAL.resources.loadresources = function(){
  TEAL.emptyArray(TEAL.resources.array);
  TEAL.requestAJAX({srvReq:"rd_db", db:TEAL.resources.db, requestType:"GET", async:true, callback:TEAL.resources.populateresourcesData});
};

TEAL.resources.writeresources = function(){
  TEAL.requestAJAX({srvReq:"wr_db", db:TEAL.resources.db, requestType:"POST", async:true, POSTdata:JSON.stringify(TEAL.resources.array)});
};

TEAL.resources.populateresourcesData = function(AJAXdata){
  var JSONdata = JSON.parse(AJAXdata);
  TEAL.populateArray(JSONdata, TEAL.resources.array);
  TEAL.resources.displayresources();
};

//create a button for each category
TEAL.resources.displayresources = function (){
  var aryLength = TEAL.resources.array.length;
  var resourcesNameArray = [];
  var resourcesIndexArray = [];
  var resourcesHeaderDiv = document.getElementById('resources-header-area');
  var resourcesButtonDiv = document.getElementById('resources-output-area');
  resourcesHeaderDiv.innerHTML = TEAL.resources.categoriesName;
  resourcesButtonDiv.innerHTML = '';

  for (var i = 0; i < aryLength; i++) {
    if (TEAL.resources.array[i].topicsName === TEAL.resources.categoriesName) {
      console.log(TEAL.resources.array[i].resourcesName);
      TEAL.addItemToArray(resourcesNameArray, TEAL.resources.array[i].resourcesName);
      TEAL.addItemToArray(resourcesIndexArray, i);
      resourcesButtonDiv.innerHTML = resourcesButtonDiv.innerHTML +
      '<input type="button" class="resourcesButton" id=' + i + ' value="' + TEAL.resources.array[i].resourcesName + '">';
    }
  }
  TEAL.buildDropdownFromArray({anyDropdown: 'resources-drop-down', textArray: resourcesNameArray, valuesArray: resourcesIndexArray, arrayLength: resourcesNameArray.length});
};

TEAL.resources.addToresources = function (resourcesName){
  document.getElementById('input-resources').value='';   //clear input box
  TEAL.addItemToArray(TEAL.resources.array, {categoriesName: TEAL.topics.categoriesName, topicsName: TEAL.resources.categoriesName, resourcesName: resourcesName});   //add item to array, redislplay UI items, store data
  TEAL.resources.displayresources();
  TEAL.resources.writeresources();
};

TEAL.resources.removeFromresources = function(){
  var listOfDropDownValues = document.getElementById('resources-drop-down'); //select item from dropdown
  var ddItem = listOfDropDownValues.options[listOfDropDownValues.selectedIndex].value;
  console.log(ddItem);
  TEAL.removeItemFromArray(TEAL.resources.array, ddItem); //remove item from array, redislplay UI items, store data
  TEAL.resources.displayresources();
  TEAL.resources.writeresources();
};

TEAL.resources.searchFromCategories = function(categoriesName){
  TEAL.resources.categoriesName = categoriesName;
  TEAL.resources.loadresources();
};
