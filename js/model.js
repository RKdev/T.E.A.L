(function(window){

    function Model(store){
        this.hello = "world";
        this.store = store;
        this.database = "categories";
        this.searchKey = "parent";
        this.searchValue = ".";
    }

Model.prototype.newRecord = function() {
  var record = new Record();
  return record;
};

Model.prototype.setdatabase = function (name) {
    this.database = name;
};

Model.prototype.setsearchKey = function (key) {
    this.searchKey = key;
};

Model.prototype.setsearchValue = function (value) {
    this.searchValue = value;
};

Model.prototype.readData = function (callback) {
  this.store.readFile(this.store[this.database], callback);
  return ('teal.model.readData');
};

Model.prototype.addRecord = function (data, type, callback) {
      var record = new Record(data);
      record.parent = this.searchValue;
      record.type = type;
      if (type === 'note') {
        record.name = "Note: " + data;
      }
      this.store.createRecord(this.database, record, callback);
      return('teal.model.addRecord');
};

Model.prototype.readRecords = function (callback) {
      this.store.readRecords(this.store[this.database], this.searchKey, this.searchValue, callback);
      return('teal.model.readRecords');
};

Model.prototype.readRecord = function (callback) {
      this.store.readRecord(this.store[this.database], this.searchKey, this.searchValue, callback);
      return('teal.model.readRecords');
};

Model.prototype.updateRecordProperty = function (id, updatekey, updatevalue, callback) {
  this.store.updateRecordProperty(this.store[this.database], id, updatekey, updatevalue, callback);
};

Model.prototype.dropAllRecords = function (callback) {
  this.store.dropAllRecords(this.store[this.database], callback);
  return('teal.model.dropAllRecords');
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.model = Model;
})(window);
