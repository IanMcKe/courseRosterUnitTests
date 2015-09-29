courseRoster.directive('sampleCourse', function() {
  return {
    scope: {
      courseName:"@"
    },
    // link: function(scope, element, attrs) {
    //   scope.courseName = attrs.sampleCourse;
    // },
    template: "<div debug>{{courseName}}</div>"

  }
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
