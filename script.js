//? step 1: make some questions
const questions = [
  {
    que: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hyperlinks and Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Not in the list",
    correct: "a",
  },
  {
    que: "Who is making the Web standards?",
    a: "Microsoft",
    b: "Google",
    c: "The World Wide Web Consortium",
    d: "Mozilla",
    correct: "c",
  },
  {
    que: "Choose the correct HTML element to define emphasized text",
    a: "<em>",
    b: "<italic>",
    c: "<i>",
    d: "<br>",
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let queBox = document.getElementById("queBox");
let optionsInput = document.querySelectorAll(".options");

//? step 2: make load question function
const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  queBox.innerText = `${index + 1}) ${data.que}`;
  optionsInput[0].nextElementSibling.innerText = data.a;
  optionsInput[1].nextElementSibling.innerText = data.b;
  optionsInput[2].nextElementSibling.innerText = data.c;
  optionsInput[3].nextElementSibling.innerText = data.d;
};

//? step 3: get all the answer options
const getAnswer = () => {
  let answer;
  optionsInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

//? step 4: submit the question
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

//? step 5: reset next questions answer
const reset = () => {
  optionsInput.forEach((input) => {
    input.checked = false;
  });
};

//? step 6: check index == total then end the quiz
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <h3>Thank's for playing quiz.</h3>
    <br/>
    <h3>${right} / ${total} Correct Answer.</h3>
    `;
};

loadQuestion();
