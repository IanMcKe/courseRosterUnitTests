describe('CoursesFactory test', function() {
  beforeEach(module('courseRoster'));

  var CoursesFactory;

  beforeEach(inject(function(_CoursesFactory_) {
    CoursesFactory = _CoursesFactory_;
  }));

  it('should have an .addCourse() method', function() {
    expect(angular.isFunction(CoursesFactory.addCourse)).toBe(true);
  });

  it('adds a course using the method .addCourse()', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    var $scope = {};
    CoursesFactory.courseName = "PHP/JavaScript/Drupal";
    CoursesFactory.addCourse();
    expect(CoursesFactory.courses[0].name).toBe("PHP/JavaScript/Drupal");
  });
});
