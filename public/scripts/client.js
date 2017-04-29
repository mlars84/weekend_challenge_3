$( document ).ready( onReady );
console.log( 'JQ' );

function onReady() {
  console.log( ' in onReady' );
  $( '#add' ).on( 'click', addTask);
  getAllTasks();
  addTask();
  $( '#complete' ).on( 'click', completeTask );
  $( '#delete' ).on( 'click', deleteTask );
} // end onReady

function addTask() {
  console.log( 'add button clicked' );
  var taskToSend = {
    taskname: $('#task').val(),
  };

  $.ajax({
    url: '/addTask',
    type: 'POST',
    data: taskToSend,
    success: function( response ) {
      console.log( response );
    } // end success
  }); // end ajax POST
} // end addTask

function getAllTasks() {
  console.log('in getAllTasks');
  $.ajax({
    url: '/getAllTasks',
    type: 'GET',
    success: function ( response ){
      console.log( 'back from server' + response );
      $('#taskList').empty();
      $('#taskList').append('<ul id="todos">TASK LIST - <button id="complete">complete</button><button id="delete">delete</button></ul>');
      for ( var i = 0; i < response.length; i++ ) {
        console.log( response[i] );
        // append task info at index i to DOM
        $('#todos').append('<p>' + response[i].taskname + '</p>');
      } // end for
    } // end success
  }); // end ajax GET
} // end getAllTasks

function completeTask() {
  console.log( 'complete button clicked' );
} // end completeTask

function deleteTask() {
  console.log( 'delete button clicked' );
} // end deleteTask
