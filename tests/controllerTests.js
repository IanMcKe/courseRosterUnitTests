describe('CoursesController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;
  var CoursesFactory;

  beforeEach(inject(function(_$controller_, _CoursesFactory_) {
    $controller = _$controller_;
    CoursesFactory = _CoursesFactory_;
  }));

  it('can pull a course from CoursesFactory', function() {
    var $scope = {};
    var controller = $controller('CoursesCtrl', { $scope: $scope });

    CoursesFactory.courseName = "PHP/JavaScript/Drupal";
    CoursesFactory.addCourse();

    expect($scope.courses[0].name).toBe("PHP/JavaScript/Drupal");
  });
});

describe('StudentsController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('adds a student using the method .addStudent()', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    var $scope = {};
    var controller = $controller('StudentsCtrl', { $scope: $scope });
    $scope.course = course;
    $scope.studentName = "Ian";
    $scope.addStudent();

    expect($scope.course.students[0].name).toBe("Ian");
  });
});
