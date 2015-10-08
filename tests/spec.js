//////////////////////
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
////////////////

///////////////////
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

//////////////////////////////////////
describe('CoursesController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('assigns a course to CoursesController', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    var $scope = {};
    var controller = $controller('CoursesCtrl', { $scope: $scope });
    $scope.course = course;
    expect($scope.course.name).toBe("PHP/JavaScript/Drupal");
  })
});
/////////////////////////////////////////

////////////////////////////////////////
describe('StudentsController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('adds a student using the method .addStudent()', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    var $scope = {}
    var controller = $controller('StudentsCtrl', { $scope: $scope });
    $scope.course = course;
    $scope.studentName = "Ian";
    $scope.addStudent();

    expect($scope.course.students[0].name).toBe("Ian");
  });
});
//////////////////////////////////////
describe('CoursesFactory test', function() {
  beforeEach(module('courseRoster'));

  var
});
