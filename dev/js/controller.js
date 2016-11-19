(function(window){

    function Controller(model, view){
        my = this;
        my.hello = "world";
        my.model = model;
        my.view = view;
    }

    Controller.prototype.loadCategories = function(target) {
        my.model.readCategories(function(jsondata) {
          my.view.createButtons(jsondata, target);
        });
        return('teal.controller.loadCategories');
    };

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
