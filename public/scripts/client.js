$( document ).ready( onReady );
console.log( 'JQ' );

function onReady() {
  console.log( ' in onReady' );
  $( '#add' ).on( 'click', addTask );
  $( '#complete' ).on( 'click', completeTask );
  $( '#delete' ).on( 'click', deleteTask );
} // end onReady

function addTask() {
  console.log( 'add button clicked' );
} // end addTask

function completeTask() {
  console.log( 'complete button clicked' );
} // end completeTask

function deleteTask() {
  console.log( 'delete button clicked' );
} // end deleteTask
