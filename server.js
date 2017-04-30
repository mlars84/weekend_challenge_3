// requires
var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );
var app = express();
var port = 3001;

var config = {
  database: 'tasks-week3',
  host: 'localhost',
  port: 5432,
  max: 10
};

var pool = new pg.Pool( config );

//uses
app.use( express.static( 'public' ));
app.use( bodyParser.urlencoded( {extended: true} ));

// base url hit
app.get( '/', function( req, res ) {
  res.sendFile( path.resolve( 'public/views/index.html' ));
});

// /getAllTasks GET
app.get( '/getAllTasks', function( req, res ) {
  var tasksArray = [];
  pool.connect( function( err, connection, done ){
    if ( err ){
      console.log( err );
      res.sendStatus( 400 );
    }
    else{
      console.log( 'connected to DB in getAllTasks' );
      var resultSet = connection.query( "SELECT * FROM tasks" );
      resultSet.on( 'row', function( row ) {
        tasksArray.push( row );
      }); // end on row
      resultSet.on( 'end', function() {
        done();
        console.log( tasksArray );
        res.send( tasksArray );
      }); // end on end
    } // end no error
  }); // end pool.connect
}); // end getAllTasks POST

// /addTask POST
app.post( '/addTask', function ( req, res ) {
  pool.connect( function( err, connection, done ){
    if ( err ){
      console.log( err );
      res.sendStatus( 400 );
    }
    else{
      console.log('connected  to DB', req.body);
      connection.query("INSERT INTO tasks (taskname, completionstatus) VALUES ($1, $2)", [req.body.taskname, req.body.completionstatus]);
      done();
      res.sendStatus(200);
    } // end no error
  }); // end pool.connect
}); // end addTask POST

app.post('/completed', function( req, res ) {
  pool.connect( function( err, connection, done ){
    if( err ){
      console.log( err );
      res.send( 400 );
    }
    else{
      console.log( 'connected to DB' );
      connection.query( "UPDATE tasks SET completionstatus=true where id=$1", [req.body.id]);
      done();
      res.sendStatus( 200 );
    } // end no error
  }); //end pool.connect
});  // end complete POST

app.delete( '/delete', function( req, res ) {
  pool.connect( function( err, connection, done ){
    if( err ){
      console.log( err );
      res.send( 400 );
    }
    else{
      console.log('connected to db');
      connection.query( "DELETE from tasks where id=$1", [req.body.id]);
      done();
      res.sendStatus( 200 );
    } // end no error
  }); // end pool.connect
});  // end delete DELETE

// listening on 3001...
app.listen(port, function(req, res) {
  console.log('listening on port', port);
});
