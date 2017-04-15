(function (document, window, lectures) {
  "use strict";

  var model = {
    // filter object {schools: [], speakers: [], dates: [start, end]}
    getLectures: function (filterObj) {
      var result = lectures;

      // filter by school
      if ("schools" in filterObj) {
        result = result.filter(function (lecture) {
          return filterObj.schools.some(function (school) {
            return lecture.schools.indexOf(school) >= 0;
          });
        });
      }

      // filter by speaker
      if ("speakers" in filterObj) {
        result = result.filter(function (lecture) {
          if ("speakers" in lecture) {
            return filterObj.speakers.some(function (speaker) {
              return lecture.speakers.map(function (s) {
                return s.name;
              }).indexOf(speaker) >= 0;
            });
          }
          else {
            return filterObj.speakers.indexOf(lecture.speaker.name) >= 0;
          }
        });
      }

      // filter by date
      if ("dates" in filterObj) {
        var start = (new Date(filterObj.dates[0])).getTime();
        var end = (new Date(filterObj.dates[1])).getTime();

        result = result.filter(function (lecture) {
          var lectureTime = (new Date(lecture.date)).getTime();
          return lectureTime >= start && lectureTime <= end;
        });
      }

      return result;
    },

    // list of speakers in the event
    getSpeakers: function () {
      var speakersSet = lectures.reduce(function (acc, lecture) {
        if ("speakers" in lecture) {
          lecture.speakers
            .map(function (speaker) {
              return speaker.name;
            })
            .forEach(function (name) {
              acc[name] = true;
            });
        } else {
          acc[lecture.speaker.name] = true;
        }

        return acc;
      }, {});

      return Object.keys(speakersSet);
    }
  };

  var controller = {
    getSchoolLectures: function (filterObj) {
      return model.getLectures(filterObj);
    },
    init: function () {
      speakerView.init();
    }

  };

  var scheduleView = {
    init: function (lectureList) {
      
    },
    render: function (lectureList) {

    }
  };

  var speakerView = {
    init: function () {
      var $speakers = document.querySelector(".speaker-controller");
      var fragment = document.createDocumentFragment();
      var speakerList = model.getSpeakers();

      // TODO refactor with ES6 string templates;
      speakerList.forEach(function (speaker) {
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", speaker);
        input.setAttribute("id", speaker);
        input.setAttribute("checked", true);

        var label = document.createElement("label");
        label.setAttribute("for", speaker);
        label.setAttribute("class", "speaker-controller__label");
        label.innerText = speaker;

        fragment.appendChild(input);
        fragment.appendChild(label);
      });

      $speakers.appendChild(fragment);
    }
  };

  var lectureView = {
    init: function (lecture, $lectureItem) {
      var fragment = document.createDocumentFragment();

      var $lectureDate = document.createElement("div");
      $lectureDate.setAttribute("class", "lectures_date");
      $lectureDate.innerHTML = getLectureDateHTML(lecture);

      var $lectureTitle = document.createElement("div");
      $lectureTitle.setAttribute("class", "lectures__title");
      $lecturesTitle.innerHTML = lecture.title;

      var $lectureSchools = document.createElement("div");
      $lectureSchools.setAttribute("class", "lectures__schools");
      $lectureSchools.innerHTML = getLectureSchoolsHTML(lecture);

      var $lectureSpeakers = document.createElement("div");
      $lectureSpeakers.setAttribute("class", "lecture__speakers");
      $lectureSpeakers.innerHTML = getLectureSpeakersHTML(lecture);

      var $lectureInfo = document.createElement("div");
      $lectureInfo.setAttribute("class", "lecture__info");
      $lectureInfo.innerHTML = getLectureInfoHTML(lecture);

      fragment.appendChild($lectureDate);
      fragment.appendChild($lectureTitle);
      fragment.appendChild($lectureSchools);
      fragment.appendChild($lectureSpeakers);
      fragment.appendChild($lectureInfo);

      $lectureInfo.appendChild(fragment);
    }
  };


  controller.init();
})(document, window, lectures, undefined);

function getLectureInfoHTML(lecture) {
  return `<a href="${lecture.url}" class="lectures__video">Смотреть</a>
          <a href="#" class="lectures__materials">Материалы</a>`;
}

function getLectureDateHTML(lecture) {
  var date = new Date(lecture.date);

  return `
        <span class="lectures__year">${date.getFullYear()}</span>
        <span class="lectures__day">${date.getDay()}</span>
        <span class="lectures__month">${getMonthName(date.getMonth())}</span>
        <span class="lectures__time">${getTime(date)}</span>
      `;
}

function getLectureSpeakersHTML(lecture) {
  if ("speakers" in lecture) {
    return lecture.speakers.reduce(function (acc, speaker) {
      acc += `<a href="#" class="lectures__speaker">${speaker.name}</a>`;
      return acc;
    }, "");
  } else {
    return `<a href="#" class="lectures__speaker">${speaker.name}</a>`;
  }
}

function getLectureSchoolsHTML(lecture) {
  return lecture.schools.reduce(function (acc, school) {
    acc += `<div class="lectures__school">${school}</div>`;
    return acc;
  }, "");
}

function getTime(date) {
  var hours = date.getHours();
  var mins = date.getMinutes();

  return `${hours < 10 ? "0" + hours : hours}:${mins < 10 ? "0" + mins : mins}`;
}

function getMonthName(month) {
  var months = {
    0: "января",
    1: "февраля",
    2: "марта",
    3: "апреля",
    4: "мая",
    5: "июня",
    6: "июля",
    7: "августа",
    8: "сентября",
    9: "окрября",
    10: "ноября",
    11: "декабря"
  };
  return months[month];
}