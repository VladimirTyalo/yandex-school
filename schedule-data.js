'use strict';
var lectures = [
  {
    "lecture-id": "101",
    "date": "2016-10-20T15:00:00.000Z",
    "schools": [
      "interfaces"
    ],
    "title": "Адаптивная верстка",
    "speaker": {
      "name": "Дмитрий Душкин",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4162/"
  },
  {
    "lecture-id": "102",
    "date": "2016-10-27T15:00:00.000Z",
    "schools": [
      "interfaces"
    ],
    "title": "Работа с сенсорным пользовательским вводом",
    "speaker": {
      "name": "Дмитрий Душкин",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4172/"
  },
  {
    "lecture-id": "103",
    "date": "2016-11-03T15:00:00.000Z",
    "schools": [
      "interfaces"
    ],
    "title": "Мультимедиа: возможности браузера",
    "speaker": {
      "name": "Максим Васильев",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4197/"
  },
  {
    "lecture-id": "104",
    "date": "2016-11-10T15:00:00.000Z",
    "schools": [
      "interfaces"
    ],
    "title": "Нативные приложения на веб-технологиях",
    "speaker": {
      "name": "Сергей Бережной",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4230/"
  },
  {
    "lecture-id": "105",
    "date": "2016-11-17T15:00:00.000Z",
    "schools": [
      "interfaces"
    ],
    "title": "Клиентская оптимизация: базовые знания и лучшие практики",
    "speaker": {
      "name": "Андрей Морозов",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4292/"
  },
  {
    "lecture-id": "106",
    "date": "2016-11-24T15:00:00.000Z",
    "schools": [
      "interfaces"
    ],
    "title": "Клиентская оптимизация: мобильные устройства и инструменты",
    "speaker": {
      "name": "Иван Карев",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4162/"
  },
  {
    "lecture-id": "107",
    "date": "2016-12-01T12:00:00.000Z",
    "schools": [
      "interfaces"
    ],
    "title": "Инфраструктура веб-проектов",
    "speaker": {
      "name": "Прокопюк Андрей",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4323/"
  },
  {
    "lecture-id": "108",
    "date": "2016-12-01T15:00:00.000Z",
    "schools": [
      "interfaces"
    ],
    "title": "Инструменты разработки мобильного фронтенда",
    "speaker": {
      "name": "Прокопюк Андрей",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4324/"
  },
  {
    "lecture-id": "201",
    "date": "2016-10-19T12:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Java Blitz (Часть 1)",
    "speaker": {
      "name": "Эдуард Мацуков",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4160/"
  },
  {
    "lecture-id": "202",
    "date": "2016-10-19T15:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Git & Workflow",
    "speaker": {
      "name": "Дмитрий Складнов",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4161/"
  },
  {
    "lecture-id": "203",
    "date": "2016-10-25T12:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "MyFirstApp (Часть 1)",
    "speaker": {
      "name": "Роман Григорьев",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4169/"
  },
  {
    "lecture-id": "204",
    "date": "2016-10-25T12:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "MyFirstApp (Часть 1)",
    "speaker": {
      "name": "Роман Григорьев",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4169/"
  },
  {
    "lecture-id": "205",
    "date": "2016-11-02T12:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "MyFirstApp (Часть 2)",
    "speaker": {
      "name": "Роман Григорьев",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4195/"
  },
  {
    "lecture-id": "206",
    "date": "2016-11-02T15:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "ViewGroup",
    "speaker": {
      "name": "Алексей Щербинин",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4196/"
  },
  {
    "lecture-id": "207",
    "date": "2016-11-09T15:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Background",
    "speaker": {
      "name": "Алексей Марков",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4222/"
  },
  {
    "lecture-id": "208",
    "date": "2016-11-09T17:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "RecyclerView",
    "speaker": {
      "name": "Владимир Тагаков",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4222/"
  },
  {
    "lecture-id": "209",
    "date": "2016-11-16T12:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Service & Broadcasts",
    "speaker": {
      "name": "Алексей Макаров",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4275/"
  },
  {
    "lecture-id": "210",
    "date": "2016-11-16T15:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Drawing",
    "speaker": {
      "name": "Алексей Щербинин",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4276/"
  },
  {
    "lecture-id": "211",
    "date": "2016-11-23T12:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Content provider",
    "speaker": {
      "name": "Максим Хромцов",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4296/"
  },
  {
    "lecture-id": "212",
    "date": "2016-11-23T15:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "SQL&SQLite",
    "speaker": {
      "name": "Максим Хромцов",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4297/"
  },
  {
    "lecture-id": "213",
    "date": "2016-11-30T12:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Fragments (Часть 1)",
    "speaker": {
      "name": "Денис Загаевский",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4320/"
  },
  {
    "lecture-id": "214",
    "date": "2016-11-30T15:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Fragments (Часть 2)",
    "speaker": {
      "name": "Денис Загаевский",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4321/"
  },
  {
    "lecture-id": "215",
    "date": "2016-12-07T12:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "MVP&Co",
    "speaker": {
      "name": "Дмитрий Попов",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4346/"
  },
  {
    "lecture-id": "216",
    "date": "2016-12-14T15:00:00.000Z",
    "schools": [
      "mobile"
    ],
    "title": "Debugging & Polishing",
    "speaker": {
      "name": "Илья Сергеев",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4352/"
  },
  {
    "lecture-id": "301",
    "date": "2016-10-18T12:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Идея, исследование, концепт (Часть 1)",
    "speaker": {
      "name": "Антон Тен",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4158/"
  },
  {
    "lecture-id": "302",
    "date": "2016-10-18T15:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Идея, исследование, концепт (Часть 2)",
    "speaker": {
      "name": "Антон Тен",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4159/"
  },
  {
    "lecture-id": "303",
    "date": "2016-10-25T15:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Особенности проектирования мобильных интерфейсов",
    "speaker": {
      "name": "Васюнин Николай",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4167/"
  },
  {
    "lecture-id": "304",
    "date": "2016-11-01T12:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Продукт и платформа",
    "speaker": {
      "name": "Сергей Калабин",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4189/"
  },
  {
    "lecture-id": "305",
    "date": "2016-11-01T15:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Природа операционных систем",
    "speaker": {
      "name": "Васюнин Николай",
      "company": "Яндекс",
      "bio": ""
    },
    "url": "https://events.yandex.ru/lib/talks/4190/"
  },
  {
    "lecture-id": "306",
    "date": "2016-11-08T12:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Прототипирование как процесс",
    "speaker": "",
    "speakers": [
      {
        "name": "Сергей Томилов",
        "company": "Яндекс",
        "bio": ""
      },
      {
        "name": "Дарья Старицына",
        "company": "Яндекс",
        "bio": ""
      }
    ],
    "url": "https://events.yandex.ru/lib/talks/4267/"
  },
  {
    "lecture-id": "307",
    "date": "2016-11-08T15:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Инструмент под задачи",
    "speaker": "",
    "speakers": [
      {
        "name": "Сергей Томилов",
        "company": "Яндекс",
        "bio": ""
      },
      {
        "name": "Дарья Старицына",
        "company": "Яндекс",
        "bio": ""
      }
    ],
    "url": "https://events.yandex.ru/lib/talks/4268/"
  },
  {
    "lecture-id": "308",
    "date": "2016-11-15T12:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Анимации",
    "speaker": "",
    "speakers": [
      {
        "name": "Сергей Томилов",
        "company": "Яндекс",
        "bio": ""
      },
      {
        "name": "Дарья Старицына",
        "company": "Яндекс",
        "bio": ""
      }
    ],
    "url": "https://events.yandex.ru/lib/talks/4268/"
  },
  {
    "lecture-id": "308extra",
    "date": "2016-11-15T15:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Design Everything",
    "speaker": "",
    "speakers": [
      {
        "name": "Rijshouwer Krijn",
        "company": "Framer",
        "bio": ""
      },
      {
        "name": "Treub Jonas",
        "company": "Framer",
        "bio": ""
      }
    ],
    "url": "https://events.yandex.ru/lib/talks/4269/"
  },
  {
    "lecture-id": "309",
    "date": "2016-11-22T15:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Развитие продукта",
    "speaker": {
        "name": "Андрей Гевак",
        "company": "Яндекс",
        "bio": ""
      },
    "url": "https://events.yandex.ru/lib/talks/4295/"
  },
  {
    "lecture-id": "310",
    "date": "2016-11-29T15:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Исследование интерфейсов",
    "speaker": {
        "name": "Кондратьев Александр",
         "company": "Яндекс",
        "bio": ""
      },
    "url": "https://events.yandex.ru/lib/talks/4319/"
  },
  {
    "lecture-id": "311",
    "date": "2016-11-29T15:00:00.000Z",
    "schools": [
      "design"
    ],
    "title": "Работа в команде",
     "speaker": {
        "name": "Юрий Подорожный",
         "company": "Яндекс",
        "bio": "Опыт в IT 15 лет"
      },
    "url": "https://events.yandex.ru/lib/talks/4345/"
  },
  {
    "lecture-id": "312",
    "date": "2016-11-29T15:00:00.000Z",
    "schools": [
      "design",
      "interfaces"
    ],
    "title": "Айдентика",
    "speaker": "",
    "speakers": [
      {
        "name": "Дмитрий Моруз",
        "company": "Яндекс",
        "bio": ""
      },
      {
        "name": "Ждан Филиппов",
        "company": "Яндекс",
        "bio": "Опыт в профессии 10 лет"
      }
    ],
    "url": "https://events.yandex.ru/lib/talks/4349/"
  }
];
