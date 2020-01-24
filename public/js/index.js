document.addEventListener('DOMContentLoaded', () => {

    async function getAllPolls(){
        const response = await fetch(`http://localhost:8080/api/polls`);
        const data = await response.json()
        return data;
    }
    async function getPollBySearch(Search){
        const response = await fetch(`http://localhost:8080/api/polls/search/${Search}`);
        const data = await response.json()
            return data;
    } 

    function clearQuestions(){
        if (questions.hasChildNodes){
            while(questions.firstChild){
                questions.removeChild(questions.firstChild);
            }
        }
    }
    
    const questions = document.querySelector(`#questions`);
    const searchBar = document.querySelector(`#search-bar`);
    const searchFor = document.querySelector(`#search-for`);
    
    getAllPolls()
        .then(data => {
            data.forEach(poll => {
            const questionCard = 
                `<li class="link-question">
                    <a href= "/questions?id=${poll.id}">
                        ${poll.question}
                    </a>
                </li>`;
            questions.innerHTML += questionCard;
        })  
    });

    searchFor.addEventListener(`click`, (event) =>{
        clearQuestions()
        event.preventDefault();
        if (searchBar.value === "" ) {
            alert ("Please insert something to find your question!")
        }
        getPollBySearch(searchBar.value)
            .then(data => {
                data.forEach(poll => {
                const questionCard = 
                    `<li class="link-question">
                        <a href="/questions?id=${poll.id}">
                            ${poll.question}
                        </a>
                    </li>`;
                questions.innerHTML += questionCard;
            })  
        });
    });
});