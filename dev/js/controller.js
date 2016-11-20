(function(window){

    function Controller(model, view){
        my = this;
        my.hello = "world";
        my.model = model;
        my.view = view;
    }

    Controller.prototype.loadCategories = function(targetDiv) {
        my.view.clearDiv(targetDiv);
        my.model.readCategories(function(jsondata) {
          my.view.createButtons(jsondata, targetDiv);
        });
        return('teal.controller.loadCategories');
    };

    Controller.prototype.addCategory = function(data, targetDiv) {
      my.view.clearDiv(targetDiv);
      my.model.addCategory(data,function(jsonData){
        my.view.createButtons(jsonData, targetDiv);
      });
    };

    Controller.prototype.controlPanelAdd = function(){
      var data = geid('input_box').value;
      if(data) {
        console.log(my.addCategory(data, 'data_panel_output'));      
      }
    };

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
