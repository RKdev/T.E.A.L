(function(window){

    function View(templatesJS){
        this.templates = templatesJS;

        //get a list of panels from somewhere
        this.$panel1 = geid('panel_1');
        this.$panel2 = geid('panel_2');
    }

View.prototype.renderPanel = function(panelRef, templateRef){
        this.$panel1.innerHTML = this.templates.dataPanelTemplate;
        this.$panel2.innerHTML = this.templates.controlPanelTemplate;

};

window.TEAL = window.TEAL || {};
window.TEAL.view = View;
})(window);
