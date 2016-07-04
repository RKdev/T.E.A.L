(function(window){

    function Store(){
        this.hello = "world";
    }

Store.prototype.listCategories = function (callback) {
    //generate a list of all defined categories
    //pass that list to a callback function
};

Store.prototype.listTopicsByCategory = function (category, callback) {
    //generate a list of all topics within a category
    //pass that list to a callback function
};

Store.prototype.listResourcesByTopic = function (topic, callback) {
    //generate a list of all resources withing a topic
    //pass that list to a callback function
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.store = Store;
})(window);
