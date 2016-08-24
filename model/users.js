/**
 * Created by joze on 24/08/16.
 */
var db = require('../db.js')

exports.insertUser = function(fullName, facebookId) {

    var query = "select * from users";

    db.pgPool.acquire(function(err, client) {
        if (err) {
            // handle error - this is generally the err from your
            // factory.create function
        }
        else {
            client.query(query, [], function() {
                // return object back to pool
                db.pgPool.release(client);
            });
        }
    });
};