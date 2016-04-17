/*jshint laxbreak:true*/
(function(window){

function Templates() {
    this.buttonTemplate = '<input type="button" value="{{name}}">';

    this.dataPanelTemplate
     = '<header><h2>{{Title}}</h2><hr/></header>'
     + '<div id=data_panel_output></div>';

     this.controlPanelTemplate
     = '<header><h2>{{Title}}</h2><hr/></header>'
     + '<div id="control_panel_features">'
     + '<input id="input_box" type="text">'
     + '<input type="button" value="Add">'
     + '<input type="button" value="Delete">'
     + '</div>';
}

Templates.prototype.display = function(template, data){
    var view = '';
    var returnTemplate = '';


    view = view + returnTemplate;
    return view;

};

window.TEAL  = window.TEAL || {};
window.TEAL.templates = Templates;
})(window);
