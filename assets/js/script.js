$(document).ready(function () {
  //write all of our jQuery inside this function

  //dispaly the date to the user
  //first grab a reference to the element that we want the time to be displayed
  var currentDay = $("#currentDay");
  //display current date in that variable
  currentDay.text(moment().format("dddd, MMM Do"));

  //dynamically style the time blocks based on current time
  //functions
  //funciotn will be responsible for checking the time and determining what class to add(past present or future)
  function checkTime() {
    // grab the current hour using moment js
    var currentHour = moment().hours();

    //need to grab the hour for the timeblock
    // loop through the timeblock hours
    //each every member of the arry will be passed till there isnt one then it exists out
    $(".time-block").each(function () {
      //parse int will take the string and turn it into int
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  checkTime();

  //event handlers

  $(".saveBtn").on("click", function () {
    //need to capture the information that the user inputed and we need to store that info into local STORAGE

    //need to capture the value of that input and i also need to know what timeblock it is attached to
    var value = $(this).siblings(".description").val();
    // attr takes the ID attribute of that parent
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  //display the items in local storage to time blocks
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
