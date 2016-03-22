console.log('T.E.A.L Running...');
var TEAL = TEAL || {};

TEAL.populateArray = function(data, target){
    for (var i = 0; i < data.length; i++) {
        if (target.push(data[i])) {
          console.log("TEAL.populateArray: data loaded");
        }
    }
};

TEAL.populateArrayofObjects = function(data, target){
    for (var i = 0; i < data.length; i++) {
      TEAL.addObjectToArray(data,topic);
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

TEAL.addObjectToArray = function(target, datum){
  console.log(target);
  var newObject = {};
  newObject.objectItem = datum;
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

TEAL.removeItemFromArray = function(target, arrayItem){
  if (target) {
    if (target[arrayItem]) {
    target.splice(arrayItem, 1);
    } else {
      console.log("TEAL.removeItemFromArray: array index does not exist");
    }
  } else {
    console.log("TEAL.removeItemFromArray: invalid array");
  }
};

TEAL.buildDropdownFromArray = function(params) {
    //params.anyDropdown
    //params.textArray
    //params.valuesArray
    //params.arrayLength


     var tmpDropdown = document.getElementById(params.anyDropdown);
     var ddOption = document.createElement("option");

     tmpDropdown.innerHTML = '';

     for (var i = 0; i < params.arrayLength; i++) {
       tmpDropdown = document.getElementById(params.anyDropdown);
       ddOption = document.createElement("option");

       ddOption.textContent = params.textArray[i];
       ddOption.Value = params.valuesArray[i];
       tmpDropdown.appendChild(ddOption);
     }


};

//module.exports = TEAL;
