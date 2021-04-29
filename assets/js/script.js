// current day displayed at top of calender
var currentDay = $("#currentDay");
var momentDay = moment().format("MMM Do YYYY");
currentDay.text(momentDay);
console.log(currentDay);

//each time block is color coded to indicate wether it is in the past, present, or future

// save text to local storage
var saveBtn = $("saveBtn");

//on click
saveBtn.addEventListner("click", function (event) {
  event.preventDefault();

  var description = $("#description");
  // set user input to local storage
  localStorage.setItem("description", JSON.stringify(description));
});

localStorage.getItem("description");
