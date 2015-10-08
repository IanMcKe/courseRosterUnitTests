# Course Roster with Karma Unit testing
#### Ian McKenney

## Description
Two controllers ```StudentsController.js``` and ```CoursesController.js``` and two factories ```StudentsFactory.js``` and ```UtilitiesFactory.js``` are created for the project.

I created an ```appTest.js``` file which is an exact copy of the ```app.js``` file with the ngMock dependency.  Having the ngMock dependency in the index.html file can cause issues with using your website.  

##### Before beginning testing be sure to go through the [installation](http://karma-runner.github.io/0.13/intro/installation.html) and then the [configuration](http://karma-runner.github.io/0.13/intro/configuration.html) of Karma.  I left ```my.conf.js``` in the repo for reference but try deleting it and running karma init to make your own.

A website that allows users to create a course roster by adding courses.  Students can then be added to each course.  Tests have been added for the following:

* sampleCourse directive
* aGreatEye directive (an example from the AngularJS website)
* changeClass directive
* CoursesController
* StudentsController
* CoursesFactory
* UtilitiesFactory

Karma makes the basic ```my.conf.js``` for you when you enter "karma init" in your browser, but you will need to add files to the "files" section of my.conf.js in order for Karma to run properly.  Here's how my files section of ```my.conf.js``` looked after I got done:

![my.conf.js files section](https://github.com/IanMcKe/courseRosterUnitTests/blob/master/my.conf.js_files.JPG)

##### Note that the order is important:  ```angular.js``` needs to come first and ```angular-mocks.js``` needs to come afterward (get ```angular-mocks.js``` [here](https://docs.angularjs.org/api/ngMock)).  After those you will need to add in ```app.js``` and finally your controllers/directives/services/tests etc.

## Setup

* Clone the project using the link provided on Github in the Terminal.
* Download Python and enter the following line in the Terminal while in the project directory:
```console
python -m SimpleHTTPServer
```
or if you have python 3.x run:
```console
python -m http.server 8000
```

## Technologies Used

HTML, CSS, Bootstrap, JavaScript, AngularJS, Karma, Jasmine

### Legal

Copyright (c) 2015 **Ian McKenney**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
