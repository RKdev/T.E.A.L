//remember to remove logging before prod!

(function(window){

    function Store(){
        this.hello = "world";
        this.categories_db = '/dev/pretendDB/categories.json';
        this.topics_db = '/dev/pretendDB/topics.json';
        this.resources_db = '/dev/pretendDB/resources.json';
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
    //generate a list of all a files contents
      this.AJAXGet(file_db, callback);
};

Store.prototype.createRecord = function(file_db, data, callback) {
  var my = this;
  my.AJAXGet(file_db, function(jsonData){
      var tempArray = [];
      var catObject = {};
      tempArray = jsonData;
      catObject.id = (tempArray.length + 1);
      catObject.name = data;
      tempArray.push(catObject);
      my.AJAXPost(file_db, tempArray, function(){my.AJAXGet(file_db, callback);});
  });
};

Store.prototype.readRecord = function(){

};

Store.prototype.updateRecord = function() {

};

Store.prototype.destroyRecord = function() {

};

Store.prototype.dropData = function (file_db, callback) {
  //remove all data from a file

};

window.TEALClass = window.TEALClass || {};
window.TEALClass.store = Store;
})(window);
