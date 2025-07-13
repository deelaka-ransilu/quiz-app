const questions = [
  {
    id: 1,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperloop Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hypertext Markup Language"
  },
  {
    id: 4,
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995"
  },
  {
    id: 5,
    question: "Which of these is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: "React"
  }
];

let nextIndex = 0;

let count = questions.length;


function calculateMarks(option){
    if(option){
        
    }else{
        count--;
    }
}

function nextBtnOnClick(){
    if(questions.length != nextIndex){
        const q = questions[nextIndex];

        let optionsHTML = `
          <h2 class="text-2xl font-semibold">${q.question}</h2>
          <div class="mt-4">
        `;

        q.options.forEach(option => {
          optionsHTML += `
            <label class="option">
              <input type="radio" name="ques" id="${nextIndex}" value="${option}" onchange="handleChange(this)">
              <span>${option}</span>
            </label>
          `;
        });

        optionsHTML += `</div>`;

        document.getElementById("question-container").innerHTML = optionsHTML;
        nextIndex++;
    } else {
        document.getElementById("question-container").innerHTML = "";
        document.getElementById("marks").innerHTML = `Your Score: ${count}/${questions.length}`;
    }
}


function handleChange(src) {

    let selectedValue = src.value;
    let arrayIndex = src.id;

    // console.log(src);

    for(let i = 0;i<questions.length;i++){
        console.log();
        if(questions[arrayIndex].answer == selectedValue){
            // console.log("correct answer");
            src.style.accentColor = "green";
            calculateMarks(true);
            break;
        }else{
            // console.log("incorrect answer");
            src.style.accentColor = "red";
            calculateMarks(false);
            break;
        }
    }
}




