var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Route for /madlibs
router.get("/madlibs", function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'madlibs.html'));
});

// route for /car
router.get('/car', function (req, res){
  res.sendFile(path.join(__dirname, '..', 'public', 'car.html'))
})

// car data
router.get('/carOut', function (req, res){
  let filePath = path.join(__dirname, '..', 'car.txt');
  if (!fs.existsSync(filePath)){
    filePath = path.join(__dirname, '..', 'car.txt');
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading car.txt", err);
      return res.status(500).json({ error: "Could no read car data"});
    }
    try {
      const cars = data.trim().split('\n').filter(line => line.trim() !=='').map(line => {
        const parts = line.split(',').map(part => part.trim().replace(/^"|"$/g, ""));
        return {
          equipid: parseInt(parts[0]),
          marker: parts[1],
          model: parts[2],
          year: parseInt(parts[3])
        };
      });
      res.json(cars);
    } catch (parseError){
      console.error("Error parsing file", parseError);
      res.status(500).json({error: "Error parsing car data"})
    }
  });
});
module.exports = router;