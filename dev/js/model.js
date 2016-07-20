(function(window){

    function Model(store){
        this.hello = "world";
        this.store = store;
    }

Model.prototype.listCategories = function () {
        //generate a list of all defined categories
        this.store.readFile(this.store.categories_db);
    };

Model.prototype.listTopics = function () {
        //generate a list of all defined topics
        this.store.readFile(this.store.topics_db);
};

Model.prototype.listResources = function () {
        //generate a list of all defined topics
        this.store.readFile(this.store.resources_db);
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.model = Model;
})(window);
