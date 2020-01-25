

document.addEventListener('DOMContentLoaded', () => {

    async function getPollById(Id){
        const response = await fetch(`/api/polls/${Id}`);
        const data = await response.json()
        return data;
    }
    async function getAnswersById(Id){
        const response = await fetch(`/api/answers/${Id}`);
        const data = await response.json()
        return data;
    }
    async function postNewVote(answer_id , unique_id) {
        await fetch('/api/votes/new', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify({ "answer_id": answer_id, "unique_id": unique_id})
        });
    }
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    const question = document.querySelector(`#question-here`);
    const answers = document.querySelector(`#answers-here`);

    getPollById(id).then(data => {
        const questionSelected = 
            `<p class="picked-question mobile-picked-question" id="${data.id}">${data.question}</p>`;
            question.innerHTML += questionSelected;
    });

    getAnswersById(id).then(data => {
        data.forEach(answer =>{
        const answersSelected = 
        `<div class="favorite-answer mobile-favorite-answer">
            <p class="picked-answer mobile-picked-answer">${answer.answer}</p>
            <button class ="vote-answer" type="submit" id="${answer.id}">VOTE</button>
        </div>
        `;
        answers.innerHTML += answersSelected;
        const voteButtons = document.querySelectorAll(`.vote-answer`);
        voteButtons.forEach(voteButton =>{
            voteButton.addEventListener(`click`, (event) =>{
                event.preventDefault();
                console.log(`Voting for ${event.target.id}`)
                postNewVote(event.target.id);
                window.location.replace( `/answers?id=${id}`);
                console.log( window.location.href)
            }) 
        })

        })
    });

    const copyUrlButton = document.querySelector(`.copy-button`);

    const copyToClipBoard = (str) => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    
    copyUrlButton.addEventListener(`click`,function(){
        let copyUrl =  window.location.href;
        copyToClipBoard(copyUrl);
        alert("Invite members to Vote. Paste invitation");
    });
   
});

