var ko,viewModel={greeting:ko.observable(!0),biography:ko.observable(!1),schoolWork:ko.observable(!1),codingExamples:ko.observable(!1),workHistory:ko.observable(!1),displayControl:function(o,e){switch(this.greeting(!1),this.biography(!1),this.schoolWork(!1),this.codingExamples(!1),this.workHistory(!1),e.target.id){case"greeting":this.greeting(!0);break;case"biography":this.biography(!0);break;case"schoolWork":this.schoolWork(!0);break;case"codingExamples":this.codingExamples(!0);break;case"workHistory":this.workHistory(!0)}}};ko.applyBindings(viewModel);