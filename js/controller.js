(function(window){

    function Controller(model, view){
        my = this;
        my.model = model;
        my.view = view;
    }

    Controller.prototype.loadAllData = function(targetDiv, uicontext) {
      my.model.setUIContext(uicontext);
      console.log(this.UIContext + ":" + this.model.searchKey + ":" + this.model.searchValue);
      my.view.renderDiv('data_panel_header', 'header', {Title:my.model.UIContext.capitalize()});
      my.view.clearDiv(targetDiv);
      my.model.readData(function(jsondata) {
        my.view.createButtons(jsondata, targetDiv);
      });
    };

    Controller.prototype.addData = function(data, targetDiv, uicontext) {
      my.model.setUIContext(uicontext);
      my.view.renderDiv('data_panel_header', 'header', {Title:my.model.UIContext.capitalize()});
      my.view.clearDiv(targetDiv);
      my.model.addData(data,
        function(){my.model.readRecords(
          function(jsonData){
            my.view.createButtons(jsonData, targetDiv);
          });
        });
      return('teal.controller.addData');
    };

    Controller.prototype.controlPanelAdd = function(){
      var data = geid('input_box').value;
      if(data) {
        my.addData(data, 'data_panel_output', my.model.UIContext);
        geid('input_box').value = '';
      }
      return('teal.controlPanelAdd');
    };

    Controller.prototype.loadData = function(searchval) {
        var myTargetDiv = 'data_panel_output';

        my.model.setsearchKey('parent');
        my.model.setsearchValue(searchval);

        //prep back buttons

        if (my.model.UIContext === "Initial Context") {my.model.setUIContext('categories');}
        else if (my.model.UIContext === "categories") {my.model.setUIContext('topics');}
        else if (my.model.UIContext === "topics") {my.model.setUIContext('resources');}

        my.view.renderDiv('data_panel_header', 'header', {Title:my.model.searchValue.capitalize()});
        my.view.clearDiv(myTargetDiv);

        my.model.readRecords(function(arrayData){
          my.view.createButtons(arrayData, myTargetDiv);
        });
        return('teal.controller.loadData');
    };

    Controller.prototype.dropAllRecords = function(targetDiv) {
      my.model.dropAllRecords(function(){my.loadAllData(targetDiv, my.model.UIContext);});
      return('teal.controller.dropAllRecords');
    };

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
