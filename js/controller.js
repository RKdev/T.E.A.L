(function(window){

    function Controller(model, view){
        my = this;
        my.model = model;
        my.view = view;
    }

    Controller.prototype.loadAllData = function(targetDiv) {
      my.model.searchKey = "parent";
      my.model.searchValue = ".";
      my.view.renderDiv('data_panel_header', 'header', {Title:'Categories'});
      my.view.clearDiv(targetDiv);
      my.model.readRecords(function(jsondata) {
        my.view.createButtons(jsondata, targetDiv);
      });
    };

    Controller.prototype.addData = function(data, type, targetDiv) {
      my.view.clearDiv(targetDiv);
      my.model.addData(data, type,
        function(){my.model.readRecords(
          function(jsonData){
            my.view.createButtons(jsonData, targetDiv);
          });
        });
      return('teal.controller.addData');
    };

    Controller.prototype.controlPanelAddH = function(){
      var data = geid('inputH').value;
      if(data) {
        my.addData(data, 'hierarchy','data_panel_output');
        geid('inputH').value = '';
      }
      return('teal.controlPanelAddH');
    };

    Controller.prototype.controlPanelAddN = function(){
      var data = geid('inputN').value;
      if(data) {
        my.addData(data, 'note','notes_panel_output');
        geid('inputN').value = '';
      }
      return('teal.controlPanelAddH');
    };

    Controller.prototype.loadData = function(searchval, name) {
        //var myTargetDiv = 'data_panel_output';

          my.model.setsearchValue(searchval);

          my.model.readRecords(function(arrayData){
            teal.store.readRecords(teal.store.categories, 'id', searchval, function(newArrayData){
              if (newArrayData[0].type === 'hierarchy'){
                  console.log(arrayData[0]);
                  my.view.renderDiv('data_panel_header', 'header', {Title:name.capitalize()});
                  my.view.clearDiv('data_panel_output');
                  my.view.createButtons(arrayData, 'data_panel_output');
              }
            });

          /*
            Get array of records
            If record that was clicked on is of type 'Hierarchy' then render buttons
              in "data_panel_output"
            If record that was clicked on is of type 'Notes' then render data
              to 'notes_panel_output'
            If record that was clicked on is of type 'Flashcard' then render data
              to 'flash_cards_output'
          */

          //Hierarchy

          //Notes

          //Flashcard
          });

        return('teal.controller.loadData');
    };

    Controller.prototype.updateRecordsProperty = function(key, value) { //searchval
        my.model.readData(function(arrayData){
        var tempRecord = new Record('x');
        for(var i = 0; i < arrayData.length; i++){
            for (var tempKey in arrayData[i]){
              tempRecord[tempKey] = arrayData[i][tempKey];
          }
          tempRecord.setProperty(key, value); //set property
          tempRecord.showMe(); // see the record
        }
      });
    };

    Controller.prototype.dropAllRecords = function(targetDiv) {
      my.model.dropAllRecords(function(){my.loadAllData(targetDiv, my.model.database);});
      return('teal.controller.dropAllRecords');
    };

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
