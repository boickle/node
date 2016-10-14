var connection = require('../connection');

function outTemp() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select dateTime, outTemp from archive order by dateTime desc limit 1', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
  this.getByDate = function(date, res) {
    connection.acquire(function(err, con) {
      con.query('select dateTime, outTemp from archive where dateTime > ?', [date], function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
  this.getBetweenDate = function(startDate, endDate, res) {
    connection.acquire(function(err, con) {
      con.query('select dateTime, outTemp from archive where dateTime BETWEEN ? and ?', [startDate,endDate], function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
}
module.exports = new outTemp();
