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
            + '<input id="load" type="button" class="button" value="{{controlbutton}}">'
            + '<br/>'
            + '<br/>'
            + '<input id="input_box" type="text">'
            + '<input id="add" type="button" class="button" value="Add">'
            + '<input id="delete" type="button" class="button" value="Delete">'
            + '</div>'
    };
    this.elements = {
      button : '<id="{{id}}" input type="button" value="{{buttonname}}">'
    };
}

Templates.prototype.display = function(template, data){
    var view = '';
    var returnTemplate = this.list[template];

    //put data in template
    for(var key in data ){
        //replace template item with data[key]
        //template item must match data object key name
        returnTemplate = returnTemplate.replace('{{' + key + '}}', data[key]);
    }

    //return template
    view = view + returnTemplate;
    return view;

};

window.TEALClass  = window.TEALClass || {};
window.TEALClass.templates = Templates;
})(window);
