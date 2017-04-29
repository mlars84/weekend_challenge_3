// requires
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();
var port = 3001;

var config = {
  database: 'tasks-week3',
  host: 'localhost',
  port: 5432,
  max: 15
};

var pool = new pg.Pool( config );

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// base url hit
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

var tasksArray = [];
// /getAllTasks GET
app.get('/getAllTasks', function( req, res ) {
  tasksArray = [];
  pool.connect( function( err, connection, done ){
    if ( err ){
      console.log( err );
      res.sendStatus( 400 );
    }
    else{
      console.log( 'connected to DB' );
      var resultSet = connection.query( "SELECT * FROM tasks" );
      resultSet.on( 'row', function( row ) {
        tasksArray.push( row );
      }); // end on row
      resultSet.on( 'end', function() {
        done();
        log
      
        res.send( tasksArray );
      }); // end on end
    } // end no error
  }); // end pool.connect
});

// /addTask POST
app.post('/addTask', function ( req, res ) {
  pool.connect(function( err, connection, done ){
    if ( err ){
      console.log( err );
      res.sendStatus( 400 );
    }
    else{
      console.log('connect to DB');

      // connection using parameterization
      connection.query("INSERT INTO tasks (taskname, completionstatus) VALUES ($1, $2,)", [req.body.taskname, req.body.completionstatus]);
      done();
      res.sendStatus(200);
    } // end no error
  }); // end pool.connect
});

app.listen(port, function(req, res) {
  console.log('listening on port', port);
});
