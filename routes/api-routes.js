const db = require(`../models/index`)
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app){
    app.get(`/api/polls`, function (req,res){
        db.Polls.findAll().then( result =>{
            res.status( 200 ).json(result);
        })
    })

    app.get(`/api/Polls/:id`, function (req, res){
        const pollId = req.params.id;
        console.log(pollId)/* try to get rid of console logs for production code */
        if (pollId){
            db.Polls.findOne({
                where: {
                    id: pollId
                }
            }).then(result => {
                res.status( 200 ).json(result);
            })
        }
        /* what is this code going to do if it isn't given an id in the params???
        Make sure to cover the case when it is false */
    });
    
    app.get(`/api/polls/search/:searchpolls`, function (req, res){
        const searchpolls = req.params.searchpolls;
        if (searchpolls){
            db.Polls.findAll({
                    where: {
                        question: {[Op.like]: '%'+searchpolls+'%'}
                    } 
                }).then(result => {
                res.status( 200 ).json(result);
            })
        }
        /* same again, if searchPolls is falsey then the api call will hang */
    });

    app.get(`/api/answers/:id`, function(req, res){
        const answerPollId = req.params.id;
        if (answerPollId){
            db.Answers.findAll({
                where: {
                    poll_id: answerPollId
                }
            }).then(result => {
                res.status( 200 ).json(result);
            })
        } 
        /* and here too :) */
    });

    app.get(`/api/votes/:id`, function(req, res){
        const votePollId = req.params.id;
        if (votePollId){
            db.Votes.findAll({
                where: {
                    answer_id: votePollId
                }
            }).then(result => {
                res.status( 200 ).json(result);
            })
        }
        /* and here too */
    });

    app.post(`/api/polls/new`, function(req,res){
        const newPoll = req.body;/* you could at this point extract
        the information that you expect from the body (you could use destructuring here)
        e.g. const {question, answers} = req.body 
        so as to save you referencing newPoll later on.*/

        /* It would also enable you to check that the body looks like you expect
        so then you res.status( 500 ).end() or something if the data doesn't look right */
        let newPollId;
        db.Polls.create({
            question: newPoll.question
        }).then(result =>{
            newPollId = result.id;
            console.log(newPollId);/* remove logs for production */
            newPoll.answers.forEach(answers=>{
                db.Answers.create({
                    poll_id: newPollId,
                    answer: answers
                })
            })
            res.send({newPollId})
        })
    })

    app.post(`/api/votes/new`, function(req,res){
        const newVote = req.body; /* same again here with getting answer_id and unique_id out of the body
        and then exit if you don't have them. */
        db.Votes.create({
            answer_id: newVote.answer_id,
            unique_id: newVote.unique_id
        })
        res.end();
    })
};