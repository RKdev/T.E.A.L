//Define template object
TEAL.template = TEAL.template || {};
TEAL.template.array = TEAL.template.array || [];
TEAL.template.db = "/pretendDB/template.json";

TEAL.template.loadtemplate = function(){
  if(!(TEAL.template.array.length)){  //only load template array once
  TEAL.requestAJAX({srvReq:"rd_db", db:TEAL.template.db, requestType:"GET", async:true, callback:TEAL.template.populatetemplateData});
  } else {
  console.log("TEAL.template.loadtemplate: template already loaded");
  }
};

TEAL.template.writetemplate = function(){
  TEAL.requestAJAX({srvReq:"wr_db", db:TEAL.template.db, requestType:"POST", async:true, POSTdata:JSON.stringify(TEAL.template.array)});
};

TEAL.template.populatetemplateData = function(AJAXdata){
  var JSONdata = JSON.parse(AJAXdata);
  TEAL.populateArray(JSONdata, TEAL.template.array);
  TEAL.template.displaytemplate();
};

//create a button for each category
TEAL.template.displaytemplate = function (){
  var aryLength = TEAL.template.array.length;
  var templateButtonDiv = document.getElementById('template-output-area');
  templateButtonDiv.innerHTML = '';
  for (var i = 0; i < aryLength; i++) {
      templateButtonDiv.innerHTML = templateButtonDiv.innerHTML +
      '<input type="button" class="templateButton" id=' + i + ' value=' + TEAL.template.array[i] + '>';
  }
  TEAL.buildDropdownFromArray('template-drop-down', TEAL.template.array);
};

TEAL.template.addTotemplate = function (templateName){
  document.getElementById('input-template').value='';   //clear input box

  TEAL.addItemToArray(TEAL.template.array, templateName);   //add item to array, redislplay UI items, store data
  TEAL.template.displaytemplate();
  TEAL.template.writetemplate();
};

TEAL.template.removeFromtemplate = function(){
  var listOfDropDownValues = document.getElementById('template-drop-down'); //select item from dropdown
  var ddItem = listOfDropDownValues.selectedIndex;

  TEAL.removeItemFromArray(TEAL.template.array, ddItem); //remove item from array, redislplay UI items, store data
  TEAL.template.displaytemplate();
  TEAL.template.writetemplate();
};
