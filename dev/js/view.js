(function(window){

    function View(templates){
        this.templates = templates;

        //get a list of panels from somewhere
        this.panels = {
                panel1 : geid('panel_1'),
                panel2 : geid('panel_2')
        };
    }

View.prototype.renderPanel = function(panelRef, templateRef){
        this.panels[panelRef].innerHTML = this.templates.display(templateRef);
};

window.TEAL = window.TEAL || {};
window.TEAL.view = View;
})(window);
