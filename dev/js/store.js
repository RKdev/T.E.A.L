//remember to remove logging before prod!

(function(window){

    function Store(){
        this.hello = "world";
        this.categories_db = '/dev/pretendDB/categories.json';
        this.topics_db = '/dev/pretendDB/topics.json';
        this.resources_db = '/dev/pretendDB/resources.json';
    }

Store.prototype.AJAXGet = function(db, callback) {
  console.log("AJAXGet: "+ callback);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', db, true);
  xhr.addEventListener("load", function(){
    console.log(callback(JSON.parse(this.responseText)));
  });
  xhr.send();
  return('teal.store.AJAXGet');
};

Store.prototype.AJAXPost = function(db, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', db, true);
  xhr.addEventListener("load", function(){
    console.log('AJAXPost: ' + callback);
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
  me = this;
  console.log('createRecord: ' + callback);
  me.AJAXGet(file_db, function(jsonData){
      var tealArray = [];
      var catObject = {};
      tealArray = jsonData;
      catObject.id = (tealArray.length + 1);
      catObject.name = data;
      tealArray.push(catObject);
      me.AJAXPost(file_db, tealArray, function(){me.AJAXGet(file_db, callback);});
  });
};

Store.prototype.readRecord = function(){

};

Store.prototype.updateRecord = function() {

};

Store.prototype.destroyRecord = function() {

};

window.TEALClass = window.TEALClass || {};
window.TEALClass.store = Store;
})(window);
