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

    Controller.prototype.addData = function(data, targetDiv) {
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
      var data = geid('inputH').value;
      if(data) {
        my.addData(data, 'data_panel_output');
        geid('inputH').value = '';
      }
      return('teal.controlPanelAdd');
    };

    Controller.prototype.loadData = function(searchval, name) {
        //var myTargetDiv = 'data_panel_output';

        teal.store.readFile(teal.store.categories, function(jsonData){
          var tempArray = jsonData;
          console.log(tempArray.length);
          for(i = 0; i < tempArray.length; i++) {
//        teal.store.updateRecord(teal.store.categories, tempArray[i].id, 'type', 'hierarchy', function(x){console.log(x)});
          console.log('index:' + (i+1) + ' id' + ":" + tempArray[i].id + " name:" + tempArray[i].name + " type:" + tempArray[i].type);
          }
        });

//        my.model.setsearchValue(searchval);

//        my.model.readRecords(function(arrayData){

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
          //my.view.renderDiv('data_panel_header', 'header', {Title:name.capitalize()});
          //my.view.clearDiv('data_panel_output');
          //my.view.createButtons(arrayData, 'data_panel_output');

          //Notes

          //Flashcard

//        });
        return('teal.controller.loadData');
    };

    Controller.prototype.updateRecordsProperty = function(key, value) { //searchval
        my.model.readData(function(arrayData){
//      my.model.queryRecord('parent', searchval, function(arrayData){
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
