courseRoster.directive('sampleCourse', function() {
  return {

    restrict:"E",
    replace: true,
    template: "<span>Sailing</span>"

  };
});

courseRoster.directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
    };
});

courseRoster.directive('alertUser', function() {
  return {
    scope: {
      alert:"&"
    },
    template: "<button class='btn btn-warning' ng-click='alert()'>Alert!</button>"
  }
});

courseRoster.directive('hometext', function() {
  return {
    template: "Back to the beginning"
  }
});

courseRoster.directive('changeClass', function() {
  return function(scope, element) {
    element.bind("click", function() {
      element.toggleClass("bg-danger");
    });
  }
});

courseRoster.directive('debug', function($compile) {
  return {
    terminal: true,
    priority: 100000,
    link: function (scope, element) {
      var clone = element.clone();
      element.attr("style", "color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
  }
});
