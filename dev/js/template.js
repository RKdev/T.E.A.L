/*jshint laxbreak:true*/
(function(window){

function Templates() {
    this.list = {
        dataPanel :
             '<header><h2>{{Title}}</h2><hr/></header>'
            + '<div id=data_panel_output></div>',

        controlPanel :
             '<header><h2>{{Title}}</h2><hr/></header>'
            + '<div id="control_panel_features">'
            + '<input id="load" type="button" class="button" value="{{Load Button}}" onclick="{{function}}">'
            + '<br/>'
            + '<br/>'
            + '<input id="input_box" type="text">'
            + '<input id="add" type="button" class="button" value="Add" onclick="{{function}}">'
            + '<input id="delete" type="button" class="button" value="Delete" onclick="{{function}}">'
            + '</div>'
    };
    this.elements = {
      button : '<id="{{id}}" input type="button" value="{{name}}" onclick="{{function}}">'
    };
}

Templates.prototype.display = function(template, data){
    var view = '';
    var returnTemplate = this.list[template];

    //put data in template

    //return template
    view = view + returnTemplate;
    return view;

};

window.TEALClass  = window.TEALClass || {};
window.TEALClass.templates = Templates;
})(window);
