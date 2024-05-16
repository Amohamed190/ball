var eightball = document.getElementById("ques");
var eightbtn = document.getElementById("btn");
var eightoutput = document.getElementById("output");

eightbtn.addEventListener("click", magicbtn);

function magicbtn() {
  let question = eightball.value;
  // console.log(question);
  let randomNumber = Math.floor(Math.random() * 5);
  console.log(randomNumber);

  console.log(question.toLowerCase());
  if (question.toLowerCase() == `does a magic 8 ball actually work`) {
    eightoutput.innerHTML = `How dare you doubt me`;
  } else if (question.toLowerCase() == ``) {
    eightoutput.innerHTML = `please ask a question`;
  } else if (question.toLowerCase() == `is cristiano ronaldo the goat?`) {
    eightoutput.innerHTML = `of course he is`;
  } else if (
    question.toLowerCase() == `is real madrid the best team in the world?`
  ) {
    eightoutput.innerHTML = `of course they are`;
  } else if (
    question.toLowerCase() == `is football the best sport in the world?`
  ) {
    eightoutput.innerHTML = `yes it is`;
  } else if (randomNumber == 0) {
    eightoutput.innerHTML = "Outlook not good";
  } else if (randomNumber == 1) {
    eightoutput.innerHTML = "Yes, that is definitely happening!";
  } else if (randomNumber == 2) {
    eightoutput.innerHTML = "Concentrate and ask again";
  } else if (randomNumber == 3) {
    eightoutput.innerHTML = "As I see it, yes.";
  } else if (randomNumber == 4) {
    eightoutput.innerHTML = "Without a Doubt.";
  } else if (randomNumber == 5) {
    eightoutput.innerHTML = "Don't count on it";
  }
}
