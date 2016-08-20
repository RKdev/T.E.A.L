(function(window){

    function Model(store){
        this.hello = "world";
        this.store = store;
    }

Model.prototype.readCategories = function () {
        //generate a list of all defined categories
        this.store.readFile(this.store.categories_db);
        return ('teal.model.readCategories');
    };

Model.prototype.readTopics = function () {
        //generate a list of all defined topics
        this.store.readFile(this.store.topics_db);
        return('teal.model.readTopics');
};

Model.prototype.readResources = function () {
        //generate a list of all defined topics
        this.store.readFile(this.store.resources_db);
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
