(function(window){

    function Store(){
        this.hello = "world";
        this.categories = '/pretendDB/categories.json';
        this.teal = '/pretendDB/teal.json';
    }

Store.prototype.AJAXGet = function(file, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', file, true);
  xhr.addEventListener("load", function(){
    console.log(callback(JSON.parse(this.responseText)));
  });
  xhr.send();
  return('teal.store.AJAXGet');
};

Store.prototype.AJAXPost = function(file, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', file, true);
  xhr.addEventListener("load", function(){
    callback();
  });
  xhr.send(JSON.stringify(data));
  return('teal.store.AJAXPost');
};


Store.prototype.readFile = function(file_db, callback) {
      this.AJAXGet(file_db, callback);
};

Store.prototype.createRecord = function(file_db, data, callback) {
  var my = this;
  var file = my[file_db];

  my.AJAXGet(file, function(jsonData){
      var tempArray = [];
      tempArray = jsonData;
      tempArray.push(data);
      my.AJAXPost(file, tempArray, callback);
  });
};

Store.prototype.readRecords = function(file, searchkey, searchval, callback){
  this.AJAXGet(file, function(jsonData){
      var returnArray = [];
      for(var key in jsonData) {
          if (jsonData[key][searchkey] === searchval) {
            returnArray.push(jsonData[key]);
          }
      }
      //console.log(returnArray);
      callback(returnArray);
  });
};

Store.prototype.readRecord = function(file, searchkey, searchval, callback){
  this.AJAXGet(file, function(jsonData){
      for(var key in jsonData) {
          if (jsonData[key][searchkey] === searchval) {
            returnRecord = jsonData[key];
          }
      }
      callback(returnRecord);
  });
};

Store.prototype.updateRecordProperty = function(file_db, id, updatekey, updatevalue, callback) {
  var my = this;
  my.AJAXGet(file_db, function(jsonData){
      for (var key in jsonData) {
        if (jsonData[key].id === id) {
           jsonData[key][updatekey] = updatevalue;
           console.log(jsonData[key]);
        }
      }
      my.AJAXPost(file_db, jsonData, callback);
  });
};

Store.prototype.destroyRecord = function() {
  /*
    GET data from file_db
    read into array
    search array for id
    splice array[id]
    POST data to file_db
  */
};

Store.prototype.dropAllRecords = function (file_db, callback) {
  var my = this;
  my.AJAXGet(file_db, function(jsonData){
      var tempArray = [];
      my.AJAXPost(file_db, tempArray, callback);
  });

};

window.TEALClass = window.TEALClass || {};
window.TEALClass.store = Store;
})(window);
