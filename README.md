ToDo
------
  - [X] Create a front end experience that allows a user to create a task.
  - [X] When the task is created, it should be stored inside of a database (SQL)
      - [X] create table
      - [X] Whether or not a task is complete should also be stored in the database.
        (starting all completion status as false)
      - [X] link '#task' input to DB
      - [X] on add click, add task to DB

  - [X] Whenever a task is created the front end should refresh to show all tasks that need to be completed.
      - [X] refresh front end when task is "added"?

  - [] Each task should have an option to 'Complete' or 'Delete'.
      - [X] event listener to complete task and alter it on document
      - [X] When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'.

  - [X] Deleting a task should remove it both from the Front End as well as the Database.
      - [X] event listener to delete from both DOM and DB
      - [?] Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
      - [X] HARD MODE, add are you sure confirm?

  - [X] Make sure that you also show us your best styling chops.
  - [X] Additionally, please include some way to recreate your initial database schema. This can be a .sql file with CREATE TABLE statements or you can create your schema automatically when your app loads.


We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

HARD MODE

In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interrupt this however you would like.

PRO MODE

Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.
