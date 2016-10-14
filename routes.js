var outtemp = require('./models/outtemp');
var intemp = require('./models/intemp');
var alldata = require('./models/alldata');

module.exports = {
  configure: function(app) {
    app.get('/outtemp/', function(req, res) {
      outtemp.get(res);
    });
    app.get('/outtemp/:startDate/', function(req, res) {
      outtemp.getByDate(req.params.startDate,res);
    });
    app.get('/outtemp/:startDate/:endDate', function(req, res) {
      outtemp.getBetweenDate(req.params.startDate,req.params.endDate,res);
    });
    app.get('/intemp/', function(req, res) {
      intemp.get(res);
    });
    app.get('/alldata/', function(req, res) {
      alldata.get(res);
    });
  }
};
