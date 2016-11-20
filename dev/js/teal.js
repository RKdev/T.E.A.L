function Teal() {

        this.store = new TEALClass.store();
        this.templates = new TEALClass.templates();
        this.view = new TEALClass.view(this.templates);
        this.model = new TEALClass.model(this.store);
        this.controller = new TEALClass.controller(this.model, this.view);
}

    var  teal = new Teal();

    var initTeal = function() {
        //get initial view from index.html
        teal.view.getLayout();

        //render initial view
        teal.view.renderPanel('panel_1', 'dataPanel', {Title: 'Data Panel'});
        teal.view.renderPanel('panel_2', 'controlPanel', {Title: 'Control Panel', controlbutton: 'Load Data'});

        //get current view
        teal.view.getLayout();

        //add event to load button

      //  attachEvent(geid('load'), 'click', function(){ teal.controller.loadCategories('data_panel_output'); });
      attachEvent(geid('load'), 'click', function(){teal.controller.loadCategories('data_panel_output');});
      attachEvent(geid('add'), 'click', function(){teal.controller.controlPanelAdd();});
      attachEvent(geid('input_box'), 'keyup', function(e){if(e.keyCode == 13){teal.controller.controlPanelAdd(); geid('input_box').value = '';}});
};
