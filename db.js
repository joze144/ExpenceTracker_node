var pg = require('pg');
poolModule = require('generic-pool');

var connectionString = 'postgres://jozhe:karamela@localhost:5432/expense_tracker';

exports.pgPool = new poolModule.Pool({
    name: 'postgres',
    client: new pg.Client(connectionString),
    create   : function(callback) {
        var c = pg.Client(connectionString);

        // parameter order: err, resource
        callback(null, c);
    },
    destroy  : function(client) { client.end(); },
    max      : 10,
    // specifies how long a resource can stay idle in pool before being removed
    idleTimeoutMillis : 30000,
    // if true, logs via console.log - can also be a function
    log : true
});