document.addEventListener('DOMContentLoaded', () => {

    async function getPollById(id){
        const response = await fetch(`0/api/polls/${id}`);
        const data = await response.json()
        return data;
    }
    async function getAnswersById(Id){
        const response = await fetch(`/api/answers/${Id}`);
        const data = await response.json()
        return data;
    }
    async function getVotesById(id){
        const response = await fetch(`/api/votes/${id}`);
        const data = await response.json()
        return data;
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    const question =document.querySelector(`#answered-question`);
    let answerAndVotes = [];
    let questionAnswered;

    getPollById(id)
        .then(poll=> {
            const questionCard = 
                `<div class="wrapper mobile-wrapper">
                    <h2 class="poll mobile-poll question_answered">
                        ${poll.question}
                    </h2>`;
            question.innerHTML += questionCard;
            questionAnswered = poll.question;
        })  
      
    getAnswersById(id)
        .then(answers =>{
            answers.forEach(answer =>{
                const voteCount = [];
                getVotesById(answer.id)
                    .then(vote =>{
                        voteCount.push(vote);
                    })
                    .then(() =>{
                        let answerToGraph = {
                            name : answer.answer,
                            data : [voteCount[0].length]
                        }
                        answerAndVotes.push(answerToGraph);
                    })
                    .then(() => {
                        window.Highcharts.chart('container', {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: questionAnswered
                        },
                        yAxis: {
                            title: {
                                text: 'Votes Received'
                            }
                        },
                        series: answerAndVotes
                        });
                    })
            })

        })
    
    setTimeout('window.location.reload();', 10000);
});