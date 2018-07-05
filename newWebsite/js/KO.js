/*eslint-env jquery*/

var ko;

var viewModel = {
    greeting: ko.observable(true),
    biography: ko.observable(false),
    education: ko.observable(false),
    codingExamples: ko.observable(false),

    displayControl: function(data, event) {
        this.greeting(false)
        this.biography(false)
        this.education(false)
        this.codingExamples(false)
        
        switch (event.target.id) {
        case 'greeting':
            this.greeting(true)
            break;
        case 'biography':
            this.biography(true)
            break;
        case 'education':
            this.education(true)
            break;
        case 'codingExamples':
            this.codingExamples(true)
            break;
        }
    }

};

ko.applyBindings(viewModel);