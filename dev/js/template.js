/*jshint laxbreak:true*/
(function(window){

function Templates() {
    this.list = {
        button : '<input type="button" value="{{name}}">',

        dataPanel :
             '<header><h2>{{Title}}</h2><hr/></header>'
            + '<div id=data_panel_output></div>',

        controlPanel :
             '<header><h2>{{Title}}</h2><hr/></header>'
            + '<div id="control_panel_features">'
            + '<input id="input_box" type="text">'
            + '<input type="button" value="Add">'
            + '<input type="button" value="Delete">'
            + '</div>'
    };
}

Templates.prototype.display = function(template, data){
    var view = '';
    var returnTemplate = this.list[template];

    view = view + returnTemplate;
    return view;

};

window.TEALClass  = window.TEALClass || {};
window.TEALClass.templates = Templates;
})(window);
