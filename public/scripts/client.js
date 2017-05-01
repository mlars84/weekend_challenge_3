$( document ).ready( onReady );
console.log( 'JQ' );

// onReady function gets all tasks from DB and runs event listeners
function onReady() {
  $( '#add' ).on( 'click', addTask);
  getAllTasks();
  $( document ).on( 'click', '#completed', completedTask );
  $( document ).on( 'click', '#delete', deleteTask );
} // end onReady

// getAllTasks gets any/all tasks from DB and appends them to the DOM
function getAllTasks() {
  console.log('in getAllTasks');
  $.ajax({
    url: '/getAllTasks',
    type: 'GET',
    success: function ( response ){
      console.log( 'back from server' + response );
      $('#taskList').empty();
      $('#taskList').append('<ul id="todos">TASK LIST - </ul>');
      for ( var i = 0; i < response.length; i++ ) {
        if( response[i].completionstatus === true ){
          $( '#taskList' ).append('<div class="finishedTasks" data-id=' + response[i].id + '><span>' + response[i].taskname + " - " + '</span><img id="checkImg"src="https://openclipart.org/download/253846/1467299975.svg" </>' + " " + '<button id="delete" data-id=' + response[i].id + ' type="button" name="button">delete</button></div>');
        } else{
          $( '#taskList' ).append('<div class="listedTasks" data-id=' + response[i].id + '><span>' + response[i].taskname + "  - " + '</span><button id="completed" data-id=' + response[i].id + ' type="button">completed?</button>' + " " + '<button id="delete" data-id=' + response[i].id + ' type="button" name="button">delete</button></div>');
        }
      }  // end for
    } // end success
  }); // end ajax GET
} // end getAllTasks

// addTask function adds tasks from user input into the DB and runs getAllTasks
function addTask() {
  console.log( 'add button clicked' );
  var taskToSend = {
    taskname: $('#task').val(),
    completionstatus: false
  };
  $.ajax({
    url: '/addTask',
    type: 'POST',
    data: taskToSend,
    success: function( response ) {
      console.log('addTask -->', response );
      $('form').trigger('reset');
      getAllTasks();
    } // end success
  }); // end ajax POST
} // end addTask

// deleteTask once confirmed OK, deletes tasks from both DOM and DB
function deleteTask() {
  console.log('delete button clicked');
  // ajax delete...
  if(confirm( 'Do you really wish to delete this task?' ) === true ) {
    var deleteTaskId = $(this).data('id');
    deleteIdToSend = {
      id: deleteTaskId
    };
  } // end if
  $.ajax({
    url: '/delete',
    type: 'DELETE',
    data: deleteIdToSend,
    success: function( response ) {
      console.log( response );
      getAllTasks();
    }
  }); // end ajax DELETE
} // end deleteTask

// completedTask should indicate on DOM that task is complete and change DB completionstatus to TRUE
function completedTask() {
  console.log( 'completed button clicked', $( this ).data( 'id' ));
    var completeTaskId = $( this ).data( 'id' );
    var completeIdToSend = {
      id: completeTaskId
    };
  // ajax POST...
  $.ajax({
    url: '/completed',
    type: 'POST',
    data: completeIdToSend,
    success: function( response ) {
      console.log( response );
      getAllTasks();
    } // end success
  }); // end ajax
} // end completeTask
