(function (document, window, lectures) {
  "use strict";

  var model = {
    getLectures: function (school) {
      switch (school) {
        case "all": {
          return lectures;
        }
        case "interfaces": {
          return lectures.filter(function (lec) {
            return lec.schools.indexOf("interfaces") >= 0;
          });
        }
        case "design": {
          return lectures.filter(function (lec) {
            return lec.schools.indexOf("design") >= 0;
          });
        }
        case "mobile": {
          return lectures.filter(function (lec) {
            return lec.schools.indexOf("mobile") >= 0;
          });
        }
        default: throw new Error("No such school in Yandex yet.");
      }
    }
  };

  var controller = {
    getSchoolLectures: function(school) {
      return model.getLectures(school);
    }
  };

  var scheduleView = {
    init: function () {
      return null;
    },
    render: function () {

    }
  };

  var speakerView = {
    init: function() {

    },
    render: function() {

    }
  };

  var lectureView = {
    init: function() {

    },
    render: function() {

    }
  };

  console.log(model.getLectures("interfaces"));

})(document, window, lectures, undefined);