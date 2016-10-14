var connection = require('../connection');

function alldata() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from archive order by dateTime desc limit 1', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
}
module.exports = new alldata();
