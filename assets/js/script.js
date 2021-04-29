// current day displayed at top of calender
var currentDay = $("#currentDay");
var momentDay = moment().format("MMM Do YYYY");
currentDay.text(momentDay);
console.log(currentDay);

//each time block is color coded to indicate wether it is in the past, present, or future

// save text to local storage
var saveBtn = $("saveBtn");
var description = $("#description");

//on click
saveBtn.addEventListner("click", function (event) {
  event.preventDefault();

  // set user input to local storage
  localStorage.setItem("description", JSON.stringify(description));
});

// get input saved from local storage and keep it in the text area
localStorage.getItem("description");
