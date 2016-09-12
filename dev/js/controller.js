(function(window){

    function Controller(model, view){
        my = this;
        my.hello = "world";
        my.model = model;
        my.view = view;
    }

    Controller.prototype.loadData = function(file, divRef){
      //read file - pass createButtons as a callback
      my.model.readCategories(my.createButtons);
      return('teal.controller.loadData');
    };

    Controller.prototype.createButtons = function(data) {
      console.log(arguments.callee.caller.toString());
      for (var i = 0; i < data.length; i++){
        for(var key in data[i]){
          if(key === "id") {id = data[i][key];}
          if(key === "name") {name = data[i][key];}
        }
        if( (id !== null) && (name !== null) ){my.view.addTemplateToPanel('data_panel_output', 'button', {id: id, buttonname: name});}
      }
    };

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
