(function(window){

    function Model(store){
        this.hello = "world";
        this.store = store;
        this.UIContext = "Initial Context";
    }

Model.prototype.setUIContext = function (context) {
    this.UIContext = context;
};

Model.prototype.readData = function (callback){
  this.store.readFile(this.store[this.UIContext], callback);
  return ('teal.model.readData');
};

Model.prototype.addData = function (data, callback) {
      this.store.createRecord(this.store[this.UIContext], data, callback);
      return('teal.model.addData');
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.model = Model;
})(window);
