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
        teal.view.renderDiv('panel_3', 'note', {Title: 'Notes'});

        //add initial events
      attachEvent(geid('load'), 'click', function(){teal.controller.loadAllData('data_panel_output');});
      attachEvent(geid('addH'), 'click', function(){teal.controller.controlPanelAddH();});
      attachEvent(geid('inputH'), 'keyup', function(e){if(e.keyCode === 13){teal.controller.controlPanelAddH();}});
      attachEvent(geid('addN'), 'click', function(){if(teal.model.searchValue !== "."){teal.controller.controlPanelAddN();}});
      attachEvent(geid('inputN'), 'keyup', function(e){if(e.keyCode === 13 && teal.model.searchValue !== "."){teal.controller.controlPanelAddN();}});
      attachEvent(geid('data_panel_output'), 'click', function(e){if(e.target !== e.currentTarget){teal.controller.loadData(e.target.id, e.target.value);}e.stopPropagation();});
      attachEvent(geid('data_panel_notes_output'), 'click', function(e){if(e.target !== e.currentTarget){teal.controller.loadData(e.target.id, e.target.value);}e.stopPropagation();});
      attachEvent(geid('load_sc_1'), 'click', function(){teal.controller.loadData("148306710907592", "Schaums Theory and Problems of College Algebra");});
      attachEvent(geid('load_sc_2'), 'click', function(){teal.controller.loadData("148141938211330", "Chapter 11: Local Government");});
      attachEvent(geid('notes_panel_output'), 'keyup', function(e){if(e.keyCode === 13){
        if(teal.model.searchValue !== "."){
              //console.log(geid('notes_panel_text').value);
              teal.controller.updateRecordProperty(teal.model.searchValue, 'data', geid('notes_panel_text').value);
        }
      }});
      attachEvent(geid('notes_panel_output'), 'keydown', function(e){console.log(e);});

};
