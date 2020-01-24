const path = require("path");

module.exports = function(app) {

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });

  app.get("/new", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/new.html'));
  });

  app.get("/answers", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/answers.html'));
  });

  app.get("/questions", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/question.html'));
  });

  app.get('/questions/:id', function (req, res) {
    res.sendFile(path.join(__dirname, `../views/questions/${req.params.id}`));
   
  });

  app.get('/answers/:id', function (req, res) {
    res.sendFile(path.join(__dirname, `../views/answers/${req.params.id}`));
  });

  app.post("/", function(req, res) {
    // console.log(req.params.id);
    const homePage = req.body;
      res.json(homePage);
  })

  app.post("/new", function(req, res) {
    const newPage = req.body;
      res.json(newPage);
  })
};
