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
      my.view.clearDiv('notes_panel_output');
      my.view.clearDiv('notes_panel_header');
      my.view.clearDiv('data_panel_notes_output');
      my.model.readRecords(function(jsondata) {
        my.view.createButtons(jsondata, targetDiv);
      });
    };

    Controller.prototype.addRecord = function(data, type, targetDiv) {
      my.view.clearDiv(targetDiv);
      my.model.addRecord(data, type,
        function(){my.model.readRecords(
          function(jsonData){
            my.view.createButtons(jsonData, targetDiv);
          });
        });
      return('teal.controller.addRecord');
    };

    Controller.prototype.controlPanelAddH = function(){
      var data = geid('inputH').value;
      if(data) {
        my.addRecord(data, 'hierarchy','data_panel_output');
        geid('inputH').value = '';
      }
      return('teal.controlPanelAddH');
    };

    Controller.prototype.controlPanelAddN = function(){
      var data = geid('inputN').value;
      if(data) {
        my.addRecord(data, 'note','data_panel_output');
        geid('inputN').value = '';
      }
      return('teal.controlPanelAddH');
    };

    Controller.prototype.loadData = function(searchval, name) {
        //var myTargetDiv = 'data_panel_output';

          my.model.setsearchValue(searchval);

          my.model.readRecords(function(arrayData){
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

            teal.store.readRecords(teal.store.categories, 'id', searchval, function(newArrayData){
              var notesArray = [];
              var hierarchyArray = [];

              if (newArrayData[0].type === 'hierarchy'){
                  my.view.clearDiv('notes_panel_output');
                  my.view.clearDiv('notes_panel_header');
                  my.view.clearDiv('data_panel_output');
                  my.view.clearDiv('data_panel_notes_output');
                  my.view.renderDiv('data_panel_header', 'header', {Title:name.capitalize()});
                  for(var i in arrayData){
                    if (arrayData[i].type === 'note') {
                      notesArray.push(arrayData[i]);
                    }
                      else {
                        hierarchyArray.push(arrayData[i]);
                      }
                  }
                  my.view.createButtons(notesArray, 'data_panel_notes_output');
                  my.view.createButtons(hierarchyArray, 'data_panel_output');
              }
              //Notes

              else if (newArrayData[0].type === 'note') {
                console.log(arrayData[0]);
                my.view.clearDiv('notes_panel_output');
                my.view.renderDiv('notes_panel_header', 'header', {Title:name.capitalize()});
                if (typeof newArrayData[0].data !== 'undefined') {
                  my.view.renderDiv('notes_panel_output', 'notedata', {Data:newArrayData[0].data});
                }
                else {my.view.renderDiv('notes_panel_output', 'notedata', {Data:''});}
              }

              //Flashcard

            });

          });

        return('teal.controller.loadData');
    };

    Controller.prototype.updateRecordsProperty = function(id, key, value) { //searchval
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

    Controller.prototype.updateRecordProperty = function (id, key, value) {
      my.model.updateRecordProperty(id, key, value, function(){});
    };

    Controller.prototype.readRecord = function (id) {
      teal.store.readRecord(teal.store.categories, 'id', id, function(x){console.log(x);});
    };

    Controller.prototype.listAllRecords = function() {
      teal.store.readFile(teal.store.categories, function(x){
        for(var i = 0; i < x.length; i++){
                console.log("Index: " + (i + 1) + " " + "ID: " + x[i].id + " Type: " + x[i].type + " Name: " +  x[i].name);
        }
        console.log(x.length);
      });
    };

    Controller.prototype.dropAllRecords = function(targetDiv) {
      my.model.dropAllRecords(function(){my.loadAllData(targetDiv, my.model.database);});
      return('teal.controller.dropAllRecords');
    };

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
