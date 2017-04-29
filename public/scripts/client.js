$( document ).ready( onReady );
console.log( 'JQ' );

function onReady() {
  console.log( ' in onReady' );
  getAllTasks();
  $( '#add' ).on( 'click', addTask );
  $( '#complete' ).on( 'click', completeTask );
  $( '#delete' ).on( 'click', deleteTask );
} // end onReady

function getAllTasks() {
  $.ajax({
    url: '/getAllTasks',
    type: 'GET',
    success: function( response ) {
      console.log( response );
    }
  });
} // end getAllTasks

function addTask() {
  console.log( 'add button clicked' );
  var objectToSend = {
    taskname: "fix fence",
    completionstatus: no
  }; // 

  $.ajax({
    url: '/addTask',
    type: 'POST',
    data: objectToSend,
    success: function( response ) {
      console.log( response );
    }
  });
} // end addTask

function completeTask() {
  console.log( 'complete button clicked' );
} // end completeTask

function deleteTask() {
  console.log( 'delete button clicked' );
} // end deleteTask
