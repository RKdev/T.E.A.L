(function(window){

    function Model(store){
        this.hello = "world";
        this.store = store;
        this.UIContext = "Initial Context";
    }

Model.prototype.setUIContext = function (context) {
    this.UIContext = context;
};

String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
      };

Model.prototype.readGeneral = function (callback){
  this.store.readFile(this.store[this.UIContext], callback);
  return ('teal.model.readGeneral');
};

Model.prototype.readCategories = function (callback) {
        //generate a list of all defined categories
        this.store.readFile(this.store.categories, callback);
        return ('teal.model.readCategories');
    };

Model.prototype.addCategory = function (data, callback) {
      this.store.createRecord(this.store.categories, data, callback);
};

Model.prototype.readTopics = function (callback) {
        //generate a list of all defined topics
        this.store.readFile(this.store.topics, callback);
        return('teal.model.readTopics');
};

Model.prototype.readResources = function (callback) {
        //generate a list of all defined topics
        this.store.readFile(this.store.resources, callback);
        return('teal.model.readResources');
};

Model.prototype.listTopicsByCategory = function (category, callback) {
    //generate a list of all topics within a category
    //pass that list to a callback function
};

Model.prototype.listResourcesByTopic = function (topic, callback) {
    //generate a list of all resources withing a topic
    //pass that list to a callback function
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.model = Model;
})(window);
