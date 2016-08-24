var pg = require('pg');
var http = require('http');
var connectionString = process.env.DATABASE_URL || 'postgres://jozhe:karamela@localhost:5432/expense_tracker';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('INSERT INTO users (userid, email, facebookid) VALUES (DEFAULT, \'joze.kosmerl@rettro.si\', \'aaafdsfdgfds333fdsf\');');
query.on('end', function() { client.end(); });