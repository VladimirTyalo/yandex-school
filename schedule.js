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

      return result.sort(function (a, b) {
        var aTime = (new Date(a.date)).getTime();
        var bTime = (new Date(b.date)).getTime();
        
        return  bTime - aTime;
      });
    },

    // list of speakers in the event
    getSpeakers: function (filterObj) {
      // get speakers only from checked shcools
      var lectures = model.getLectures(filterObj);
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
    filterObj: {},
    getSchoolLectures: function () {
      return model.getLectures(controller.filterObj);
    },
    init: function () {
      pageView.init();
    }
  };

  var lecturesView = {
    init: function () {
      lecturesView.render();
    },
    render: function () {
      var lectureList = controller.getSchoolLectures();
      var $lectures = document.querySelector(".lectures");
      var fragment = document.createDocumentFragment();

      // remove old (li)  lecture items elements
      var $lectureItems = document.querySelectorAll(".lectures__item");
      $lectureItems.forEach(function (item) {
        item.parentNode.removeChild(item);
      });

      // create new (li) lecture items elements
      lectureList.forEach(function (lecture) {
        var $lectureItem = document.createElement("li");
        $lectureItem.setAttribute("class", "lectures__item");
        $lectureItem.appendChild(lectureView.init(lecture));

        fragment.appendChild($lectureItem);
      });

      $lectures.appendChild(fragment);
    }
  };

  var speakerListView = {
    init() {
      speakerListView.render();
    },
    render: function () {
      var $speakers = document.getElementsByClassName("speaker-controller")[0];
      var fragment = document.createDocumentFragment();
      var speakerList = model.getSpeakers(controller.filterObj);

      // remove old speaker info
      document.querySelectorAll(".speaker-controller label").forEach(function (el) {
        el.parentNode.removeChild(el);
      });

      document.querySelectorAll(".speaker-controller input").forEach(function (el) {
        el.parentNode.removeChild(el);
      });

      // TODO refactor with ES6 string templates;
      speakerList.forEach(function (speaker, index) {
        var input = createInputHTML(speaker, index);
        setFilterObject(input, "speakers");

        input.addEventListener("change", function (ev) {
          setFilterObject(input, "speakers");
          lecturesView.render();
        });

        var label = createLabelHTML(speaker, index);

        fragment.appendChild(input);
        fragment.appendChild(label);
      });

      var allInput = createAllInputHTML();
      var allLabel = createAllLabelHTML();

      fragment.appendChild(allInput);
      fragment.appendChild(allLabel);

      $speakers.appendChild(fragment);

      var $speakerInputList = document.querySelectorAll(".speaker-controller__input:not(:last-of-type)");

      allInput.addEventListener("change", function (ev) {
        if (allInput.checked) {
          $speakerInputList.forEach(function (input) {
            input.checked = true;
            input.dispatchEvent(new Event("change"));
          });
        } else {
          $speakerInputList.forEach(function (input) {
            input.checked = false;
            input.dispatchEvent(new Event("change"));
          });
        }
      });

      function createInputHTML(speaker, index) {
        var input = document.createElement("input");
        input.setAttribute("class", "speaker-controller__input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", speaker);
        input.setAttribute("id", speaker);
        input.setAttribute("checked", true);

        return input;
      }

      function createLabelHTML(speaker, index) {
        var label = document.createElement("label");
        label.setAttribute("for", speaker);
        label.setAttribute("class", "speaker-controller__label");
        label.innerText = speaker;
        label.style.order = index + 1; // save room for All checkbox

        return label;
      }

      function createAllInputHTML() {
        var input = createInputHTML("Все", 0);
        input.style.order = 0;

        return input;
      }

      function createAllLabelHTML() {
        var label = createLabelHTML("Все", 0);
        label.classList.add("speaker-controller__label--all");
        label.style.order = 0;

        return label;
      }
    }
  };

  var lectureView = {
    init: function (lecture) {
      var fragment = document.createDocumentFragment();

      var $lectureDate = document.createElement("div");
      $lectureDate.setAttribute("class", "lectures__date");
      $lectureDate.innerHTML = getLectureDateHTML(lecture);

      var $lectureTitle = document.createElement("div");
      $lectureTitle.setAttribute("class", "lectures__title");
      $lectureTitle.innerHTML = lecture.title;

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

      // add speaker field listener
      var speakers = $lectureSpeakers.querySelectorAll(".lectures__speaker");

      speakers.forEach(function (speaker) {
        speaker.addEventListener("click", function (ev) {
          ev.preventDefault();

          if ("speakers" in lecture) {
            var index = lecture.speakers.reduce(function (acc, el, index) {
              if (el.name === speaker.innerText) acc = index;
              return acc;
            }, -1);
            speakerInfoView.render(lecture.speakers[index]);
          } else {
            speakerInfoView.render(lecture.speaker);
          }

        });
      });

      return fragment;
    }
  };

  var speakerInfoView = {
    render: function (speaker) {
      var $modal = document.createElement("div");
      var $back = document.createElement("div");

      $modal.setAttribute("class", "speaker-info");
      $modal.innerHTML = `
       <button class="speaker-info__close"></button>
       <div class="speaker-info__name">${speaker.name}</div>
       <div class="speaker-info__company">Компания: ${speaker.company}</div>
       <div class="speaker-info__bio">
        ${speaker.bio}
       </div>`;


      $back.setAttribute("class", "backlayer");

      document.body.appendChild($back);
      document.body.appendChild($modal);


      // add Listeners
      $back.addEventListener("click", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();

        removeModal();
      });

      $modal.querySelector(".speaker-info__close").addEventListener("click", function (ev) {
        ev.preventDefault();
        removeModal();
      });

      window.addEventListener("keydown", function (ev) {
        var keyCode = ev.keyCode || ev.which;
        // if esc key pressed
        console.log(keyCode);
        if (keyCode === 27) removeModal();
      });

      function removeModal() {
        $modal.parentNode.removeChild($modal);
        $back.parentNode.removeChild($back);
      }

    }
  };

  var pageView = {
    init: function () {
      speakerListView.init();
      lecturesView.init(controller.getSchoolLectures());

      var $schoolControllers = document.querySelectorAll(".schools-controller input");
      $schoolControllers.forEach(function (input) {
        setFilterObject(input, "schools");

        input.addEventListener("change", function (ev) {
          setFilterObject(input, "schools");
          lecturesView.render();
          speakerListView.render();
        });
      });

      var $dateControllers = document.querySelectorAll(".date-controller__input");

      $dateControllers.forEach(function (input) {
        setDatesRage(input);
        input.addEventListener("change", function (ev) {
          setDatesRage(input);
          lecturesView.render();
          speakerListView.render();
        });
      });

      function setDatesRage(input) {
        if (input.id === "start-date") {
          if (controller.filterObj.dates) {
            controller.filterObj.dates[0] = input.value;
          } else {
            controller.filterObj.dates = [input.value];
          }
        } else if (input.id === "end-date") {
          if (controller.filterObj.dates) {
            controller.filterObj.dates[1] = input.value;
          } else {
            controller.filterObj.dates = [, input.value];
          }
        }
      }
    }
  };

  controller.init();


  // helper functions

  function setFilterObject(input, filterParam) {
    if (input.checked) {
      addToFilterObj(controller.filterObj, filterParam, input.name);
    } else {
      removeFromFilterObj(controller.filterObj, filterParam, input.name);
    }
  }

  function addToFilterObj(obj, filterParam, filterValue) {
    if (filterParam in obj) {
      if (obj[filterParam].indexOf(filterValue) < 0) {
        obj[filterParam].push(filterValue);
      }
    } else {
      obj[filterParam] = [filterValue];
    }
  }

  function removeFromFilterObj(obj, filterParam, filterValue) {
    if (filterParam in obj) {
      var index = obj[filterParam].indexOf(filterValue);

      if (index >= 0) {
        obj[filterParam].splice(index, 1);
      }
    }
  }


  function getLectureInfoHTML(lecture) {
    var currentTime = Date.now();
    var lectureTime = (new Date(lecture.date)).getTime();
    if (currentTime < lectureTime) {
      return `<div class="lectures__not-available">Лекция еще не началась</div>`
    } else {
      return `<a href="${lecture.video}" class="lectures__video" target="_blank">Смотреть</a>
          <a href="${lecture.materials}" class="lectures__materials" target="_blank">Материалы</a>`;
    }
  }

  function getLectureDateHTML(lecture) {
    var date = new Date(lecture.date);

    return `
        <span class="lectures__year">${date.getFullYear()}</span>
        <span class="lectures__day">${date.getDate()}</span>
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
      return `<a href="#" class="lectures__speaker">${lecture.speaker.name}</a>`;
    }
  }

  function getLectureSchoolsHTML(lecture) {
    return lecture.schools.reduce(function (acc, school) {
      acc += `<div class="lectures__school">${getSchoolName(school)}</div>`;
      return acc;
    }, "");
  }

  function getTime(date) {
    var hours = date.getHours();
    var mins = date.getMinutes();

    return `${hours < 10 ? "0" + hours : hours}:${mins < 10 ? "0" + mins : mins}`;
  }

  function getSchoolName(shortName) {
    var map = {
      interfaces: "Школа разработки интерфейсов",
      design: "Школа мобильного дизайна",
      mobile: "Школа мобильной разработки"
    };
    return map[shortName];
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

})(document, window, lectures, undefined);