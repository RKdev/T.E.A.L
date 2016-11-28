(function(window){

    function Controller(model, view){
        my = this;
        my.model = model;
        my.view = view;
    }

    Controller.prototype.addCategory = function(data, targetDiv) {
      my.view.clearDiv(targetDiv);
      my.model.addCategory(data,function(jsonData){
        my.view.createButtons(jsonData, targetDiv, my.model.UIContext);
      });
      return('teal.controller.addCategory');
    };

    Controller.prototype.controlPanelAdd = function(){
      var data = geid('input_box').value;
      if(data) {
        my.addCategory(data, 'data_panel_output');
        geid('input_box').value = '';
      }
      return('teal.controlPanelAdd');
    };

    Controller.prototype.loadData = function(targetDiv, uicontext) {
      my.model.setUIContext(uicontext);
      my.view.renderDiv('data_panel_header', 'header', {Title:my.model.UIContext.capitalize()});
      my.view.clearDiv(targetDiv);
      my.model.readGeneral(function(jsondata) {
        my.view.createButtons(jsondata, targetDiv);
      });
    };

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
