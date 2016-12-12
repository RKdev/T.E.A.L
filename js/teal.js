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
        teal.view.renderDiv('panel_1', 'dataPanel', {Title: 'Data Panel'});
        teal.view.renderDiv('panel_2', 'controlPanel',
        {
          Title: 'Control Panel',
          Controlbutton: 'Load Categories',
        });

        //add initial events
      attachEvent(geid('load'), 'click', function(){teal.controller.loadAllData('data_panel_output', 'categories');});
      attachEvent(geid('addH'), 'click', function(){teal.controller.controlPanelAdd();});
      attachEvent(geid('input_box'), 'keyup', function(e){if(e.keyCode === 13){teal.controller.controlPanelAdd();}});
      attachEvent(geid('data_panel_output'), 'click', function(e){if(e.target !== e.currentTarget){teal.controller.loadData(e.target.id, e.target.value);}e.stopPropagation();});
      //attachEvent(geid('drop'), 'click', function(){teal.controller.dropAllRecords('data_panel_output');});
      attachEvent(geid('load_sc_1'), 'click', function(){teal.controller.loadData("1481419033797327", "Chapter 8: The Administrative State");});
      attachEvent(geid('load_sc_2'), 'click', function(){teal.controller.loadData("148141938211330", "Chapter 11: Local Government");});

};
