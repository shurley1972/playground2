define([ 'text!./viewmodel.html'], function( htmlString) {
//define([], function() {
	function viewModel(params) {
		// +++ EDIT MODEL BELOW TO DESIGN YOUR CUSTOM SPA FORM
		var self = this;
		self.attachmentRequired = ko.observable(false);
		//self.Title = ko.observable(); // commented out because of params.get
		this.mytitle = ko.observable().extend({ listItem: "Title" });

	}
    // Use prototype to declare any public methods
    //viewModel.prototype.doSomething = function() { ... };
	//viewModel.prototype.MyButtonClick = function () {
	//	var model = this;
	//	debugger;
	//};

 
    // Return model definition
    //return viewModel;
	return { viewModel: viewModel, template: htmlString };
});
