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
        teal.view.renderPanel('panel_1', 'dataPanel');
        teal.view.renderPanel('panel_2', 'controlPanel');

        //get current view
        teal.view.getLayout();
};
