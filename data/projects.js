export const PROJECTS = [
  {
    id: 1,
    image: [
      require("/public/images/Project-Imgs/Avocademy/HomePage.png"),
      require("/public/images/Project-Imgs/Avocademy/Filters.png"),
    ],
    title: "Avocademy Dashboard",
    description:
      "This is a mentor dashboard I built from scratch for my current employer. It allows mentors to access and use student information to track and update the progress they are making in their program. <br> After a meeting with the PM, we decided that the best technology to build this project with was NextJs combined with the Airtable API. We decided on NextJs over plain ReactJs because of the ability for server-side rendering in Next. Not only does it help with SEO, but the current number of mentors and students is exponentially growing and we wanted to make sure all users will have an optimized performance experience while using the portal. <br> The design team, our PM, and I worked closely to create a portal that not only provides exceptional User Experience, but also a pixel perfect User Interface. <br> The entire process was made easier thanks to the Agile Scrum methodology Avocademy uses. We used Jira to set an initial roadmap, weekly sprints to track progress, and later track bugs as we were getting closer to production. We also used Slack to stay in constant communication with each other. <br> The dashboard is now live with data for approximately 500 students and is being utilized by over 20 mentors.",
    github: "https://github.com/Lokoski",
  },
  {
    id: 2,
    image: [
      require("/public/images/Project-Imgs/PersonalSite/HomePage.png"),
      require("/public/images/Project-Imgs/PersonalSite/Projects.png"),
      require("/public/images/Project-Imgs/PersonalSite/Toolkit.png"),
      require("/public/images/Project-Imgs/PersonalSite/Modal.png"),
      require("/public/images/Project-Imgs/PersonalSite/Contact.png"),
    ],
    title: "Personal Website",
    description:
      "This is the first iteration of my personal website. It is fully responsive on all mobile devices. <br> Developed with ReactJs, CSS3 and Bootstrap 4",
    github: "https://github.com/Lokoski/PersonalSite-React",
  },
  {
    id: 3,
    image: [
      require("/public/images/Project-Imgs/Nucamp/NucampHome.png"),
      require("/public/images/Project-Imgs/Nucamp/About.png"),
      require("/public/images/Project-Imgs/Nucamp/Directory.png"),
      require("/public/images/Project-Imgs/Nucamp/DirectoryItem.png"),
      require("/public/images/Project-Imgs/Nucamp/Contact.png"),
    ],
    title: "NuCamp Site",
    description:
      "This project was created as part of the curriculum of the coding bootcamp I attended. It is fully responsive on all mobile devices. <br> Developed with ReactJs, Redux, Reactstrap and SASS",
    github: "https://github.com/Lokoski/Nucamp-React",
  },
  {
    id: 4,
    image: [
      require("/public/images/Project-Imgs/Bubamara/HomePage.png"),
      require("/public/images/Project-Imgs/Bubamara/About.png"),
      require("/public/images/Project-Imgs/Bubamara/Carousel.png"),
      require("/public/images/Project-Imgs/Bubamara/Location.png"),
      require("/public/images/Project-Imgs/Bubamara/Menu.png"),
      require("/public/images/Project-Imgs/Bubamara/Reservation.png"),
    ],
    title: "Cafe Bubamara",
    description:
      "This is a website I created for a restaurant. It is fully responsive on all mobile devices. <br> Designed with HTML5, CSS3, Bootstrap 4 and JavaScript",
    github: "https://github.com/Lokoski/CafeBubamara",
  },
  {
    id: 5,
    image: [
      require("/public/images/Project-Imgs/MealPlaner/HomePage.png"),
      require("/public/images/Project-Imgs/MealPlaner/MealSettings.png"),
      require("/public/images/Project-Imgs/MealPlaner/MealPlan.png"),
      require("/public/images/Project-Imgs/MealPlaner/SingeMeal.png"),
    ],
    title: "Meal Planner ",
    description:
      "This Meal Planner application lets you create a daily meal plan or find a single meal that will fit your macros. <br> You can select the minimum grams of protein as well as the minimum and maximum number of calories you'd like your meal to have. It is fully responsive on all mobile devices. <br> Designed with HTML5, CSS3, ReactJs and the Spoonacular API .",
    github: "https://github.com/Lokoski/MealPlanner-ReactJs",
  },
  {
    id: 6,
    image: [
      require("/public/images/Project-Imgs/Calculator/HomePage.png"),
      require("/public/images/Project-Imgs/Calculator/InUse.png"),
    ],
    title: "Calculator",
    description:
      "This is a simple calculator app I built while learning vanilla JavaScript. It is fully functional and mobile friendly. <br> Developed With HTML5, CSS3 and vanilla Javascript",
    github: "https://github.com/Lokoski/CalculatorJS",
  },

  {
    id: 7,
    image: [
      require("/public/images/Project-Imgs/ToDoApp/HomePage.png"),
      require("/public/images/Project-Imgs/ToDoApp/Edit.png"),
      require("/public/images/Project-Imgs/ToDoApp/InUse.png"),
    ],
    title: "To Do App",
    description:
      "This is a To Do app that I built in the process of learning vanilla JavaScript. The app supports all CRUD operators. <br> Developed with HTML5, CSS3 and vanilla JavaScript",
    github: "https://github.com/Lokoski/ToDoJS-CRUD",
  },
  {
    id: 8,
    image: [
      require("/public/images/Project-Imgs/WeatherApp/HomePage.png"),
      require("/public/images/Project-Imgs/WeatherApp/Miami.png"),
      require("/public/images/Project-Imgs/WeatherApp/Cairo.png"),
    ],
    title: "Weather App",
    description:
      "This is a simple weather app I created to practice working with APIs. It is fully responsive on all mobile devices. <br>Developed with ReactJs, CSS3, Axios and the OpenWeatherMap API. ",
    github: "https://github.com/Lokoski/WeatherApp",
    liveDemo: "https://weather22.netlify.app/",
  },
];
