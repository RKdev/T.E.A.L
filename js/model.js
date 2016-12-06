(function(window){

    function Model(store){
        this.hello = "world";
        this.store = store;
        this.UIContext = "categories";
        this.searchKey = "parent";
        this.searchValue = "categories";
    }


Model.prototype.newRecord = function() {
  var record = new Record();
  return record;
};

Model.prototype.setUIContext = function (context) {
    this.UIContext = context;
};

Model.prototype.setsearchKey = function (key) {
    this.searchKey = key;
};

Model.prototype.setsearchValue = function (value) {
    this.searchValue = value;
};

Model.prototype.readData = function (callback) {
  this.store.readFile(this.store[this.UIContext], callback);
  return ('teal.model.readData');
};

Model.prototype.addData = function (data, callback) {
      var record = new Record(data);
      record.parent = this.searchValue;
      console.log(record);
      this.store.createRecord(this.UIContext, record, callback);
      return('teal.model.addData');
};

Model.prototype.readRecords = function (callback) {
      console.log("**********" + this.store[this.UIContext] + ":" + this.searchKey + ":" + this.searchValue + ":" + callback);
      this.store.readRecords(this.store[this.UIContext], this.searchKey, this.searchValue, callback);
      return('teal.model.readRecords');
};

Model.prototype.dropAllRecords = function (callback) {
  this.store.dropAllRecords(this.store[this.UIContext], callback);
  return('teal.model.dropAllRecords');
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.model = Model;
})(window);
