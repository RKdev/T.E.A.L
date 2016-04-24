(function(window){

    function View(templates){
        this.templates = templates;

        //get a list of panels getLayout method
        this.panels = {};
}

View.prototype.getLayout = function() {
        //this will eventually take a "layoutconfig.json" argument and provide the layout
        // for the html or present a default option if no config is passed
        // for now retrieves div list from index.html
        var divs = qsa('div');

        for (var i = 0; i < divs.length; i++){
              var panelName = 'panel_' + (i + 1).toString();
              this.panels[panelName] = divs[i].id;
        }
};

View.prototype.renderPanel = function(panelRef, templateRef){
            el = geid(this.panels[panelRef]);
            el.innerHTML = this.templates.display(templateRef);
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.view = View;
})(window);
