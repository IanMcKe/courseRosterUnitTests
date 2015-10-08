describe("sampleCourse Directive test", function() {
  var element, scope;

  // Load the app module
  beforeEach(module('courseRoster'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function($compile, $rootScope) {
    // The injector unwraps the underscores (_) from around
    // the parameter names when matching
    element = angular.element("<sample-course></sample-course>");
    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it("directive sampleCourse returns a div with Sailing inside", function() {
    expect(element.text()).toBe("Sailing");
  });
});

describe('aGreatEye directive test', function() {
  var element, scope;

  // Load the app module
  beforeEach(module('courseRoster'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function($compile, $rootScope) {
    // The injector unwraps the underscores (_) from around
    // the parameter names when matching
    element = angular.element("<a-great-eye></a-great-eye>");
    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it('element contains "lidless, wreathed in flame, 2 times"', function() {
    expect(element.text()).toBe("lidless, wreathed in flame, 2 times");
  });
});

// describe('alertUser Directive test', function() {
//   var element, scope;
//
//   beforeEach(module('courseRoster'));
//
//   beforeEach(inject(function($compile, $rootScope) {
//     element = angular.element("<alert-user alert='alertUser(alertMessage)'></alert-user>");
//     scope = $rootScope.$new();
//     $compile(element)(scope);
//     scope.$digest();
//   }));
//
//   it('alerts user when button is clicked', function() {
//     scope.alertMessage("alert");
//     element.triggerHandler('click');
//     expect()
//   });
// });

describe('changeClass Directive test', function() {
  var element, scope;

  beforeEach(module('courseRoster'));

  beforeEach(inject(function($compile, $rootScope) {
    element = angular.element("<h1 change-class></h1>");
    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it('changes class when clicked', function() {
    element.triggerHandler('click');
    expect(element.hasClass('bg-danger')).toBe(true);
  });
});
