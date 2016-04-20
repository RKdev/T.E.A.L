function Teal() {
        this.model = new TEALClass.model();
        this.controller = new TEALClass.controller();
        this.templates = new TEALClass.templates();
        this.view = new TEALClass.view(this.templates);
}

    var  teal = new Teal();

    var initTeal = function() {
        teal.view.getLayout();
        teal.view.renderPanel('panel_1', 'dataPanel');
        teal.view.renderPanel('panel_2', 'controlPanel');
    };
