(function(window){

    function View(templates){
        this.templates = templates;

        //get a list of page elements using  getLayout method
        this.panels = {};
        this.buttons = {};
}

View.prototype.getLayout = function() {
        //this will eventually take a "layoutconfig.json" argument and provide the layout
        // for the html or present a default option if no config is passed
        // for now retrieves div list from document
        var divs = qsa('div');
        var inputs = qsa('input');
        var buttons = [];

        //populate panels {} with div panel ids
        for (var i = 0; i < divs.length; i++){
              var panelName = 'panel_' + (i + 1).toString();
              this.panels[panelName] = divs[i].id;
        }

        //populate buttons {} with button names
         var j = 1;
         for ( i = 0; i < inputs.length; i++) {
            var buttonName = '';
            if(inputs[i].type === 'button'){
                buttonName = 'button_' + (j++).toString();
                this.buttons[buttonName] = inputs[i].value;
            }
        }

        return("getLayout");
};

View.prototype.getElementFromLayout = function(identifier, value) {
    console.log(this.getLayout());
    console.log(this.buttons);
    if (identifier === 'button'){
        for(var i = 0; i < this.buttons.length; i++) {
            console.log(i);
        }
    }
};

View.prototype.renderPanel = function(panelRef, templateRef){
            //search the panels object for the name of the div to modify
            el = geid(this.panels[panelRef]);
            el.innerHTML = this.templates.display(templateRef);
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.view = View;
})(window);
