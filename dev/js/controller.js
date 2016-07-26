(function(window){

    function Controller(model, view){
        this.hello = "world";
        this.model = model;
        this.view = view;
    }

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
