(function(window){

    function Controller(model, view){
        this.hello = "world";
        this.model = model;
        this.view = view;
    }

    Controller.prototype.loadData = function(file, divRef){
      //read file - pass createButtons as a callback
      this.model.readCategories(this.createButtons);
      return('teal.controller.loadData');
    };

    Controller.prototype.createButtons = function(data) {
      var id = null, name = null;
      for (var i = 0; i < data.length; i++){
        for(var key in data[i]){
          if(key === "id") {id = data[i][key];}
          if(key === "name") {name = data[i][key];}
        }
        //re: "teal.view" - this a hack to get around a "this" binding issue. Using "this" here is broken
        if( (id !== null) && (name !== null) ){teal.view.addTemplateToPanel('data_panel_output', 'button', {id: id, buttonname: name});}
      }
    };

window.TEALClass = window.TEALClass || {};
window.TEALClass.controller = Controller;
})(window);
