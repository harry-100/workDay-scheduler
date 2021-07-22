
var currentDayEl  = $("#currentDay");
var currentDate = moment().format("MMMM Do, YYYY");
var containerEl = $("#container");

currentDayEl.text(currentDate);
var currentTime = moment().format('H') - 3;
console.log("current time=", currentTime);

// create hour blocks

for (var timeOfHour=9; timeOfHour < 18; timeOfHour++){
    var rowEl = $("<div>");
    var col1El = $("<div>");
    var col2El = $("<textarea>");
    var col3El = $("<button>");
    var btnIconEl = $("<i>");

    if (timeOfHour > 12){
        timeHour = timeOfHour - 12;
        timeHourString = timeHour + " PM";
    }
    else if (timeOfHour < 12) {
        timeHourString = timeOfHour + " AM";
    }
    else {
        timeHourString = timeOfHour + " PM";
    }

    rowEl.addClass("row height: 100px");
    rowEl.attr("id", "id-" + timeOfHour);
    col1El.addClass("col-md-1 text-center pt-3 hour");
    col1El.attr("id", "id-" + timeOfHour);
    col1El.text(timeHourString);
    col2El.addClass("col-md-10 text-center textarea");
    col2El.attr("id", "taskId-" + timeOfHour);
 
    // color coding of hour blocks 

    if (timeOfHour < currentTime){
        col2El.addClass("past");
    }
    else if (timeOfHour == currentTime) {
        col2El.addClass("present");
    }
    else {
        col2El.addClass("future");
    }

    
    col3El.addClass("col-md-1 text-center saveBtn");
    col3El.attr("id", "BtnId-" + timeOfHour);
    btnIconEl.addClass("fas fa-save fa-2x");

   // adding elements to DOM

    col3El.append(btnIconEl);
    rowEl.append(col1El);
    rowEl.append(col2El);
    rowEl.append(col3El);
    containerEl.append(rowEl);
};

$(".saveBtn").on("click", function () {
    var textareaInput = $(this).siblings(".textarea").val();
    var timeId = $(this).siblings(".hour").attr("id");
    localStorage.setItem(timeId, textareaInput);
  });

  //Get data from local storage
