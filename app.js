/* Code obtained from https://alvarotrigo.com/blog/hamburger-menu-css/ */
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

/* Code based on JS course I am doing with Udemy  */
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let currentQuestion = {};

let questions = [
  {
      question: "Which country started the tradition of putting up a Christmas tree?",
      choice1: "Lapland",
      choice2: "Alaska",
      choice3: "Germany",
      choice4: "Switzerland",
      answer: 3
  },
  
  {
    question: "How many of Rudolph's fellow reindeers' names start with 'D'?",
    choice1: "Three - Dancer, Dasher, Donner",
    choice2: "Two - Donner, Dasher",
    choice3: "Four - Damper, Dasher, Donner, Dancer",
    choice4: "Two - Dancer, Donner",
    answer: 1
  },
  
  {
    question: "What is traditionally hidden inside a Christmas pudding?",
    choice1: "Fruit",
    choice2: "A coin",
    choice3: "Sprinkles",
    choice4: "Icing",
    answer: 2
  },
  
  {
    question: "Which city has been donating Trafalgar Squares Christmas tree to London every year since 1947?",
    choice1: "Paris",
    choice2: "Berlin",
    choice3: "London",
    choice4: "Oslo",
    answer: 4
  },
  
  {
    question: "What colour are mistletoe berries?",
    choice1: "Red",
    choice2: "White",
    choice3: "Green",
    choice4: "Black",
    answer: 2
  },
  
  {
    question: "What is the name of the ballet that takes place at Christmas?",
    choice1: "The Nutcracker",
    choice2: "Ghosts of Christmas Past",
    choice3: "Swan Lake",
    choice4: "Sleeping Beauty",
    answer: 1
  },
  
  {
    question: "What plant is sometimes known as the Christmas flower?",
    choice1: "Forest Furn",
    choice2: "Holly",
    choice3: "Mistletoe",
    choice4: "Poinsettia",
    answer: 4
  },
  
  {
    question: "How many reindeer drive Santa's sleigh?",
    choice1: "6",
    choice2: "8",
    choice3: "9",
    choice4: "4",
    answer: 2
  },
  
  {
    question: "What colour suit did Santa wear until Coca Cola rebranded him in red?",
    choice1: "Green",
    choice2: "Gold",
    choice3: "Silver",
    choice4: "Blue",
    answer: 1
  },
  
  {
    question: "What decoration do elves traditionally have on their shoes?",
    choice1: "Tassels",
    choice2: "Candy Canes",
    choice3: "Pom Poms",
    choice4: "Bells",
    answer: 4
  },
  ];
