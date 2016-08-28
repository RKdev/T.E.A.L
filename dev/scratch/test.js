var createButtons = function(data) {
  for (var i = 0; i<data.length; i++){
    view.addTemplateToPanel('data_panel_output', 'button', {id: [i], buttonname: [i]});
  }
};
