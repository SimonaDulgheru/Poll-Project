module.exports = function(db) {
    
    db.Answers.create({
        poll_id: "1",
        answer: "Javascript"
    });
    db.Answers.create({
        poll_id: "1",
        answer: "HTML6"
    });
    db.Answers.create({
        poll_id: "1",
        answer: "CSS"
    });
    db.Answers.create({
        poll_id: "1",
        answer: "Sequilize"
    });
    db.Answers.create({
        poll_id: "2",
        answer: "Dog"
    });
    db.Answers.create({
        poll_id: "2",
        answer: "Cat"
    });
    db.Answers.create({
        poll_id: "2",
        answer: "Cow"
    });
    db.Answers.create({
        poll_id: "2",
        answer: "Tiger"
    });
    db.Answers.create({
        poll_id: "3",
        answer: "Football"
    });
    db.Answers.create({
        poll_id: "3",
        answer: "Rugby"
    });
    db.Answers.create({
        poll_id: "3",
        answer: "Cricket"
    });
    db.Answers.create({
        poll_id: "3",
        answer: "Tennis"
    });
    db.Answers.create({
        poll_id: "3",
        answer: "Golf"
    });
    db.Answers.create({
        poll_id: "3",
        answer: "Motor racing"
    });
    db.Answers.create({
        poll_id: "4",
        answer: "Be Ugly"
    });
    db.Answers.create({
        poll_id: "4",
        answer: "Be Stupid"
    });
    db.Polls.create({
        question: "Whats the best coding language?"
    });
    db.Polls.create({
        question: "Whats the best animal?"
    });
    db.Polls.create({
        question: "Whats the best sport?"
    });
    db.Polls.create({
        question: "Would you rather?"
    });
}