(function(window){

    function Model(store){
        this.hello = "world";
        this.store = store;
        this.UIContext = "Initial Context";
        this.recordKey = "Initial Record Key";
        this.recordValue = "Initial Record Value";
    }

Model.prototype.setUIContext = function (context) {
    this.UIContext = context;
};

Model.prototype.setRecordKey = function (key) {
    this.recordKey = key;
};

Model.prototype.setRecordValue = function (value) {
    this.recordValue = value;
};

Model.prototype.readData = function (callback){
  this.store.readFile(this.store[this.UIContext], callback);
  return ('teal.model.readData');
};

Model.prototype.addData = function (data, callback) {
      this.store.createRecord(this.UIContext, this.recordValue, data, callback);
      return('teal.model.addData');
};

Model.prototype.readRecords = function (callback) {
      this.store.readRecords(this.store[this.UIContext], this.recordKey, this.recordValue, callback);
      return('teal.model.readRecords');
};

Model.prototype.dropAllRecords = function (callback) {
  this.store.dropAllRecords(this.store[this.UIContext], callback);
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.model = Model;
})(window);
