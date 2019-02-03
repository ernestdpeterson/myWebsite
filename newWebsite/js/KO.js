/*eslint-env jquery*/
/*globals ko*/

var viewModel = {
    Greeting: ko.observable(true),
    Biography: ko.observable(false),
    SchoolWork: ko.observable(false),
    CodingExamples: ko.observable(false),
    WorkHistory: ko.observable(false),
    Documents: ko.observable(false),

    displayControl: function(data, event) {
        this.Greeting(false);
        this.Biography(false);
        this.SchoolWork(false);
        this.CodingExamples(false);
        this.WorkHistory(false);
        this.Documents(false);
        
        switch (event.target.id) {
        case "greeting":
            this.Greeting(true);
            break;
        case "biography":
            this.Biography(true);
            break;
        case "schoolWork":
            this.SchoolWork(true);
            break;
        case "codingExamples":
            this.CodingExamples(true);
            break;
        case "workHistory":
            this.WorkHistory(true);
            break;
        case "documents":
            this.Documents(true);
            break;
        }
    }
};

ko.applyBindings(viewModel);