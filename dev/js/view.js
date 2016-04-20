(function(window){

    function View(templates){
        this.templates = templates;

        //get a list of panels from somewhere
        //this will probably turn into an array
        this.panels = {};
}

View.prototype.getLayout = function() {
        //this will eventually take a "layoutconfig.json" argument and provide the layout
        // for the html or present a default option if no config is passed
        this.panels.panel_1 = 'panel_1';
        this.panels.panel_2 = 'panel_2';
        this.panels.data_panel_output = 'data_panel_output';
};

View.prototype.renderPanel = function(panelRef, templateRef){
            el = geid(this.panels[panelRef]);
            el.innerHTML = this.templates.display(templateRef);
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.view = View;
})(window);
