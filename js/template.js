/*jshint laxbreak:true*/
(function(window){

function Templates() {
    this.list = {
        dataPanel :
              '<div id=data_panel_header><header><h2>{{Title}}</h2></header></div>'
            + '<hr/>'
            + '<div id=data_panel_output></div>',

        controlPanel :
              '<div id=control_panel_header><header><h2>{{Title}}</h2></header></div>'
            + '<hr/>'
            + '<div id="control_panel_features">'
            + '<input id="load" type="button" class="button" value="{{Controlbutton}}">'
            + '<br/>'
            + '<br/>'
            + '<input id="inputH" type="text">'
            + '<input id="addH" type="button" class="button" value="Add Hierarchy">'
            + '<br/>'
            + '<input id="inputN" type="text">'
            + '<input id="addN" type="button" class="button" value="Add Notes">'
            + '<br/>'
            + '<input id="inputF" type="text">'
            + '<input id="addF" type="button" class="button" value="Add Flash Card">'
            + '<hr/>'
            + 'Shortcuts'
            + '<br/>'
            + '<input id="load_sc_1" type="button" class="button" value="Ch_8">'
            + '<input id="load_sc_2" type="button" class="button" value="Ch_11">'
            + '</div>',

        note :
              '<div id=notes_panel_header><header><h2>{{Title}}</h2></header></div>'
            + '<hr/>'
            + '<div id=notes_panel_output><textarea>{{Data}}</textarea></div>',

        notedata : '<textarea>{{Data}}</textarea>',

        button : '<input id="{{id}}" type="button" class="button" value="{{buttonname}}">',

        header : '<header><h2>{{Title}}</h2></header>'
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
