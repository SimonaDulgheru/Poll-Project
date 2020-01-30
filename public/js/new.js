const formPollAnswers = document.querySelector(`.poll-answers`);
const addButton = document.querySelector (`#add`);
const createPoll = document.querySelector(`#poll-button`);
const questionText = document.querySelector(`#question-text`);
const answersForQuestion =[];

async function postNewQuestion(question , answers) {
    await fetch('http://localhost:8080/api/polls/new', {/* It is better to use a relative paths (which you have done now anyway)  */
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ "question": question, "answers": answers})
    }).then(
        res =>res.json()
    ).then(function(res){
        window.location.replace( `/questions?id=${res.newPollId}`);
    })
}

addButton.addEventListener (`click`, (event) => {
    event.preventDefault();
    function newElement() {
        let input = document.createElement("input")
        input.className = `answer-text`;
        input.placeholder = `Type your answer`
        formPollAnswers.insertBefore(input, addButton);
    }
    newElement();
});

createPoll.addEventListener(`click`, (event)=>{ 
    const answerText = document.querySelectorAll(`.answer-text`);
    event.preventDefault()
    answerText.forEach(answer =>{
        answersForQuestion.push(answer.value)
    });
    if (questionText.value === "") {
        alert("Please insert a question!")
    }
    else {
        postNewQuestion( questionText.value, answersForQuestion );
    }
});