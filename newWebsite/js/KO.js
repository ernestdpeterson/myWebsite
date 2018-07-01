/*eslint-env jquery*/

var ko;

var viewModel = {
    greating: ko.observable(false),
    biography: ko.observable(false),
    skillset: ko.observable(false),
    codingExamples: ko.observable(false)

};

ko.applyBindings(viewModel);